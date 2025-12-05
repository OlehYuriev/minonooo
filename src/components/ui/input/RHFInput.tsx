import { useFormContext } from "react-hook-form";
import { Input } from "./input";

type Props = {
  name: string;
} & Omit<React.ComponentProps<typeof Input>, "name">;

export function RHFInput({ name, ...props }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return <Input {...register(name)} error={error} {...props} />;
}
