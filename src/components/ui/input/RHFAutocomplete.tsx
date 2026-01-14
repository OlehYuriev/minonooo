"use client";
import { useDebounce } from "@/auth/hooks/use-debaunce";
import { FetchOptions, TOption } from "@/type/option";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props<TExtra extends object = object> = {
  name: string;
  placeholder: string;
  fetchOptions: FetchOptions<TExtra>;
  extraParams?: TExtra;
};

export function RHFAutocomplete({
  name,
  placeholder,
  fetchOptions,
  extraParams,
}: Props) {
  const { control } = useFormContext();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<TOption[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const extraParamsKey = JSON.stringify(extraParams ?? {});

  const memoExtraParams = useMemo(() => {
    return extraParamsKey ? JSON.parse(extraParamsKey) : undefined;
  }, [extraParamsKey]);

  const debouncedQuery = useDebounce(query, 500);

  const ref = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);

  const limit = 20;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const load = useCallback(
    async (pageParam: number, queryParam: string) => {
      if (loadingRef.current) return;
      loadingRef.current = true;

      setLoading(true);

      const result = await fetchOptions({
        query: queryParam,
        limit,
        page: pageParam,
        ...(memoExtraParams ?? {}),
      });
      setOptions((prev) => (pageParam === 1 ? result : [...prev, ...result]));

      setHasMore(result.length > 0);
      setLoading(false);
      loadingRef.current = false;
    },
    [memoExtraParams, fetchOptions]
  );

  useEffect(() => {
    if (debouncedQuery.length < 1) {
      setOptions([]);
      setHasMore(true);
      setPage(1);
      return;
    }

    setOptions([]);
    setHasMore(true);
    setPage(1);

    load(1, debouncedQuery);
  }, [debouncedQuery, load]);

  const handleScroll = useCallback(
    async (event: React.SyntheticEvent) => {
      const listboxNode = event.currentTarget;
      const { scrollTop, scrollHeight, clientHeight } =
        listboxNode as HTMLElement;

      if (
        !loadingRef.current &&
        hasMore &&
        scrollHeight - scrollTop - clientHeight < 50
      ) {
        const nextPage = page + 1;
        setPage(nextPage);
        load(nextPage, debouncedQuery);
      }
    },
    [debouncedQuery, hasMore, load, page]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className="relative">
            <input
              value={query}
              placeholder={placeholder}
              onFocus={() => setOpen(true)}
              onChange={(e) => {
                setOpen(true);
                setQuery(e.target.value);
                field.onChange(null);
              }}
              className={`w-full border-b py-1.5 text-sm outline-none ${
                error ? "border-red-500" : "border-[#dadada]"
              }`}
            />
            {/* Dropdown */}
            {open && (
              <div
                ref={ref}
                className="absolute z-10  w-full border-b border-l border-r border-[#dadada] bg-white shadow 
				  flex flex-col max-h-40 overflow-y-auto"
                onScroll={(e) => handleScroll(e)}
              >
                {loading && (
                  <div className="p-2 text-sm text-gray-500">Завантаження…</div>
                )}
                {!loading && options.length === 0 && (
                  <div className="p-2 text-sm text-gray-500">
                    Нічого не знайдено
                  </div>
                )}
                {options.map((option, index) => (
                  <button
                    key={`${option.value}-${index}`}
                    type="button"
                    onClick={() => {
                      field.onChange(option);
                      setQuery(option.label);
                      setOpen(false);
                    }}
                    className="hover:bg-gray-100 transition-all p-1.5 w-full  text-start"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
            {error && (
              <p className="text-red-500 mt-1 pointer-events-none">
                {error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
}
