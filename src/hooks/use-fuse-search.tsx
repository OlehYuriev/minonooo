import Fuse, { FuseOptionKey, IFuseOptions } from "fuse.js";
import { useMemo } from "react";

export function useFuseSearch<T extends object>(
  list: T[],
  keys: FuseOptionKey<T>[],
  searchQuery: string,
  options?: Omit<IFuseOptions<T>, "keys">,
  returnOnEmpty: T[] | null = null
) {
  const fuse = useMemo(() => {
    return new Fuse(list, {
      keys,
      threshold: 0.3,
      ...options,
    });
  }, [list, keys, options]);

  const results = useMemo(() => {
    if (!searchQuery) return returnOnEmpty;
    return fuse.search(searchQuery).map((result) => result.item);
  }, [searchQuery, fuse, returnOnEmpty]);

  return results;
}
