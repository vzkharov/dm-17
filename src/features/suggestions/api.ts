import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Address } from '~/entities/geo';

const suggestionsApi = createApi({
  reducerPath: 'suggestions.api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getSuggestions: builder.query<Address[], string>({
      query: (q: string) => ({
        url: `/suggestions?q=${q}`,
      }),
    }),
  }),
});

export const useSuggestionsQuery = suggestionsApi.useGetSuggestionsQuery;

export { suggestionsApi };
