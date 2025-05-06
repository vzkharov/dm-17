const getCurrentYear = () => new Date(Date.now()).getFullYear();

const formatDate = (dateString: string, options?: Intl.DateTimeFormatOptions) => {
  const date = new Date(dateString);

  return date.toLocaleDateString('ru-RU', { ...DEFAULT_FORMAT_OPTIONS, ...options });
};

const DEFAULT_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

export { getCurrentYear, formatDate };
