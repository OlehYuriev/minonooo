"use client";
import { ROUTES } from "@/constants/routes";

import { useClickOutsideAndEscapeClose } from "@/hooks/use-click-outside-close";
import { useSearchProductStore } from "@/store/use-search-product-store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Input } from "../ui/input";
import VoiceSearch from "../voice-search";
import { SearchList } from "./search-list";

export function ProductSearch() {
  const router = useRouter();
  const searchQuery = useSearchProductStore((state) => state.searchQuery);
  const setSearchQuery = useSearchProductStore((state) => state.setSearchQuery);
  const [open, setOpen] = useState(false);

  const ref = useClickOutsideAndEscapeClose({
    onClose: () => setOpen(false),
    active: open,
  });
  useEffect(() => {
    setOpen(Boolean(searchQuery?.length));
  }, [searchQuery]);

  const onTextHandler = useCallback(
    (text: string) => {
      setSearchQuery(text);
    },
    [setSearchQuery]
  );

  function closeList() {
    router.push(ROUTES.CATALOG);
    setOpen(false);
  }
  return (
    <div className="relative" ref={ref}>
      <div className="relative">
        <Input
          placeholder="Пошук..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchQuery.trim()) {
              closeList();
            }
          }}
          placeholderIcon={
            <Image src="/search.svg" alt="Пошук" width={19} height={19} />
          }
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <VoiceSearch onText={onTextHandler} />
        </div>
      </div>
      <SearchList
        open={open}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        closeList={closeList}
      />
    </div>
  );
}
