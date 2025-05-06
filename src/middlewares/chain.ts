import type { UnknownMiddleware, MiddlewareFactory } from './types';

const chain = (functions: MiddlewareFactory[], index = 0): UnknownMiddleware => {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }

  return (_request, _event, response) => {
    return response;
  };
};

export { chain };
