import { RHFAutocomplete } from "@/components/ui/input/RHFAutocomplete";
import { RHFRadioGroup } from "@/components/ui/input/RHFRadioGroup";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { checkoutSchemaType } from "./schema";
import { fetchNp, fetchNpCities } from "./utils/np";

export function DeliverySection() {
  const { watch, setValue } = useFormContext<checkoutSchemaType>();
  const deliveryType = watch("deliveryType");
  const cities = watch("city");
  const department = watch("department");
  useEffect(() => {
    if (deliveryType === "pickup") {
      setValue("city", null);
    }
    if (cities === null) {
      setValue("department", null);
    }
  }, [cities, deliveryType, setValue]);
  return (
    <>
      <RHFRadioGroup
        name="deliveryType"
        options={[
          { value: "pickup", label: "Самовивіз" },
          { value: "post", label: "Доставка поштою" },
        ]}
      />
      <div className="flex flex-col gap-y-5 mt-6">
        {deliveryType === "post" && (
          <RHFAutocomplete
            name="city"
            fetchOptions={fetchNpCities}
            placeholder="Місто"
          />
        )}

        {deliveryType === "post" && cities?.value && (
          <div>
            <RHFAutocomplete
              name="department"
              fetchOptions={fetchNp}
              placeholder="Відділення"
              extraParams={{ CityRef: cities?.value }}
            />
            <div className="mt-2 flex flex-col gap-1">
              {department?.schedule.length &&
                department?.schedule.map(({ days, time }, index) => (
                  <span key={time + index} className=" text-xs">
                    {days}: <strong>{time}</strong>
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
