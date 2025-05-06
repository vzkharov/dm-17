import type { Address } from '~/entities/geo';

const constructAddress = (address: Address) => {
  const countryPart = address.country;
  const regionPart = address.region;
  const cityPart = address.city ? `г. ${address.city}` : '';
  const streetPart = address.street ? `ул. ${address.street}` : '';
  const housePart = address.house;

  if (streetPart) {
    return [cityPart, streetPart, housePart].filter(Boolean).join(', ');
  }

  if (cityPart) {
    return [cityPart, countryPart].filter(Boolean).join(', ');
  }

  if (regionPart) {
    return [regionPart, countryPart].filter(Boolean).join(', ');
  }

  return countryPart;
};

export { constructAddress };
