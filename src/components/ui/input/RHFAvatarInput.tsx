"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../buttons";

type Props = {
  name: string;
  onRemove?: () => Promise<void> | undefined;
};

export function RHFAvatarInput({ name, onRemove }: Props) {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const value = watch(name);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!value) return setPreview(null);

    if (typeof value === "string") {
      setPreview(value);
    } else if (value instanceof File) {
      const blobUrl = URL.createObjectURL(value);
      setPreview(blobUrl);

      return () => URL.revokeObjectURL(blobUrl);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setValue(name, file, { shouldValidate: true });
  };

  const removeAvatar = async () => {
    if (onRemove) await onRemove();
    setValue(name, null);
    setPreview(null);
    if (inputRef.current) inputRef.current.value = "";
  };
  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex items-start flex-col gap-4">
      <label
        htmlFor="avatar"
        className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden cursor-pointer relative group"
      >
        {preview && (
          <Image
            src={preview}
            alt="avatar preview"
            width={160}
            height={160}
            className="rounded-full object-cover w-full h-full"
            priority
          />
        )}

        <div
          className="absolute  -translate-y-full inset-0 bg-black/40	
		   flex items-center justify-center opacity-0 transition group-hover:opacity-100  group-hover:translate-y-0  "
        >
          <span className="text-white text-sm">Змінити фото</span>
        </div>
      </label>

      <input
        ref={inputRef}
        type="file"
        id="avatar"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {onRemove && (
        <div className="ml-3">
          <Button
            type="button"
            variant="secondary"
            text="Видалити фото"
            className="!py-1 px-1"
            onClick={removeAvatar}
          />
        </div>
      )}
    </div>
  );
}
