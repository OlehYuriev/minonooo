export function deleteClientCookie(name: string) {
  document.cookie = `${name}=; path=/; max-age=0;`;
}
