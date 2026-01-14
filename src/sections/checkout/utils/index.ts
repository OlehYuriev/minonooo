import { novaPoshtaRequest } from "@/services/nova-poshta";
import { FetchOptions, TOption } from "@/type/option";
import { transformSchedule } from "@/utils/transform-schedule";

export function createNovaPoshtaRequestBody<T extends object>(
  calledMethod: string,
  params: T
) {
  const data = {
    apiKey: "b150f3a9d495cb47a3879d15b8ba1d10",
    modelName: "AddressGeneral",
    calledMethod: calledMethod,
    methodProperties: params,
  };
  return data;
}

/* -------------------------------------------------- */
export const fetchNpCities: FetchOptions = async ({ query, limit, page }) => {
  const data = createNovaPoshtaRequestBody("searchSettlements", {
    CityName: query,
    Limit: String(limit),
    Page: String(page),
  });
  try {
    const result = await novaPoshtaRequest(data);

    const cityOptions: TOption[] = result.data[0].Addresses.map(
      (item: Record<string, string>) => ({
        value: item.DeliveryCity,
        label: item.Present,
      })
    );

    return cityOptions;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/* -------------------------------------------------- */
type NovaPoshtaSchedule = Record<string, string>;

type NovaPoshtaWarehouse = {
  Ref: string;
  Description: string;
  Schedule: NovaPoshtaSchedule;
};
type ScheduleOption = {
  schedule: {
    days: string;
    time: string;
  }[];
};
type FetchNpExtra = {
  CityRef?: string;
};
export const fetchNp: FetchOptions<FetchNpExtra, ScheduleOption> = async ({
  query,
  limit,
  page,
  CityRef,
}) => {
  const data = createNovaPoshtaRequestBody("getWarehouses", {
    FindByString: query,
    CityRef: CityRef,
    Page: String(page),
    Limit: String(limit),
  });
  try {
    const result = await novaPoshtaRequest(data);

    const options = result.data.map((item: NovaPoshtaWarehouse) => ({
      value: item.Ref,
      label: item.Description,
      schedule: transformSchedule(item.Schedule),
    }));

    return options;
  } catch (error) {
    console.error(error);
    return [];
  }
};
