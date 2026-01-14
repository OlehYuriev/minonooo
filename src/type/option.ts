export type TOption<TExtra extends object = object> = {
  label: string;
  value: string;
} & TExtra;

export type FetchBaseParams<TExtra extends object = object> = {
  query: string;
  page: number;
  limit: number;
} & TExtra;

export type FetchOptions<
  TExtraParams extends object = object,
  TExtraOption extends object = object
> = (
  params: FetchBaseParams & TExtraParams
) => Promise<TOption<TExtraOption>[]>;
