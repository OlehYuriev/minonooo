export function isValidEmail(email: string) {
  // Простая проверка формата: что-то@что-то.домен
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePassword(password: string) {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Мінімум 8 символів");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Потрібна хоча б одна велика літера");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Потрібна хоча б одна мала літера");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Потрібна хоча б одна цифра");
  }
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    errors.push("Потрібен хоча б один спеціальний символ");
  }

  return errors; // повертає масив рядків з повідомленнями про помилки
}

export function validateForm(data: { email: string; password: string }) {
  const errors: { email?: string; password?: string } = {};

  if (!isValidEmail(data.email)) errors.email = "Некоректний email";

  const passwordErrors = validatePassword(data.password);
  if (passwordErrors.length > 0) errors.password = passwordErrors[0];

  return errors;
}
