'use client';

import { Provider } from 'react-redux';

import { store } from '~/lib/store';
import type { Layout } from '~/lib/types';

const ReduxProvider: Layout = ({ children }) => <Provider store={store}>{children}</Provider>;

export { ReduxProvider };
