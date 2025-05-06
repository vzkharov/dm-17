const getCookie = (cookieString: string, name: string): string | null => {
  const cookieArray = cookieString.split(';');
  const cookieMap = new Map<string, string>();

  cookieArray.forEach((cookie) => {
    const [key, value] = cookie.split('=');
    cookieMap.set(key.trim(), value.trim());
  });

  return cookieMap.get(name) ?? null;
};

export { getCookie };
