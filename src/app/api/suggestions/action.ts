import 'server-only';

import { env } from '~/env/server';

import type { Address } from '~/entities/geo';

type AddressResponse = {
  value: string;
  unrestricted_value: string;
  data: {
    country: string;
    region?: string;
    area?: string;
    city: string;

    street: string;
    block?: string;
    house?: string;
    flat?: string;
    room?: string;

    geo_lat: number;
    geo_lon: number;
  };
};

type FetchSuggestionsOptions = {
  query: string;
  count?: number;
  locale?: string;
};

type FetchSuggestionsResponse = {
  suggestions: AddressResponse[];
};

const fetchSuggestions = async ({ query, count = 5, locale = 'ru' }: FetchSuggestionsOptions) => {
  const response = await fetch(`${env.DADATA_API_URL}/suggest/address`, {
    method: 'POST',
    body: JSON.stringify({ query, count, language: locale }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${env.DADATA_API_KEY}`,
    },
  });

  const data: FetchSuggestionsResponse = await response.json();

  return data.suggestions.map(transformAddressResponse);
};

const transformAddressResponse = (address: AddressResponse): Address => {
  return {
    country: address.data.country,
    city: address.data.city,
    street: address.data.street,
    house: address.data.house,
    flat: address.data.flat,
    room: address.data.room,
    block: address.data.block,
    area: address.data.area,
    region: address.data.region,
    coordinates: {
      lat: address.data.geo_lat,
      lon: address.data.geo_lon,
    },
  };
};

export { fetchSuggestions };
