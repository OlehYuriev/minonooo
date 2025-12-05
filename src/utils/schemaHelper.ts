import z from "zod";

type InputProps = {
  message?: {
    required_error?: string;
    invalid_type_error?: string;
  };
  minFiles?: number;
  isValidPhoneNumber?: (text: string) => boolean;
};

export const schemaHelper = {
  password: (props?: InputProps) =>
    z
      .string()
      .nonempty({
        message: props?.message?.required_error ?? "Пароль є обов'язковим!",
      })
      .min(8, {
        message:
          props?.message?.invalid_type_error ??
          "Пароль повинен містити щонайменше 8 символів!",
      })
      .regex(/[A-Z]/, {
        message:
          props?.message?.invalid_type_error ??
          "Пароль повинен містити хоча б одну велику літеру!",
      })
      .regex(/[a-z]/, {
        message:
          props?.message?.invalid_type_error ??
          "Пароль повинен містити хоча б одну малу літеру!",
      })
      .regex(/\d/, {
        message:
          props?.message?.invalid_type_error ??
          "Пароль повинен містити хоча б одну цифру!",
      })
      .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, {
        message:
          props?.message?.invalid_type_error ??
          "Пароль повинен містити хоча б один спеціальний символ!",
      }),
};
