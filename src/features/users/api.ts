import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { User } from '~/entities/user';

const usersApi = createApi({
  reducerPath: 'users.api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({ query: () => '/users' }),
  }),
});

export const useUsersQuery = usersApi.useGetUsersQuery;

export { usersApi };
