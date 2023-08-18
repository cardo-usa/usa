import { createClient, cacheExchange, fetchExchange, subscriptionExchange, ssrExchange } from '@urql/core';
import { devtoolsExchange } from '@urql/devtools';
import { registerUrql } from '@urql/next/rsc';
import { createClient as createWsClient } from 'graphql-ws';
import { scalarExchange } from './exchange/scalar-exchange';

const url = process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT'];
if (!url) {
  throw new Error('NEXT_PUBLIC_GRAPHQL_ENDPOINT is not defined.');
}

const wsUrl = process.env['NEXT_PUBLIC_WS_ENDPOINT'];
if (!wsUrl) {
  throw new Error('NEXT_PUBLIC_WS_ENDPOINT is not defined.');
}

const wsClient = createWsClient({
  url: wsUrl,
});

const subscription = subscriptionExchange({
  forwardSubscription: (request) => ({
    subscribe(sink) {
      const unsubscribe = wsClient.subscribe({ ...request, query: request.query || '' }, sink);
      return { unsubscribe };
    },
  }),
});

export const ssr = ssrExchange();

export const urqlClient = createClient({
  url,
  exchanges: [devtoolsExchange, scalarExchange, cacheExchange, ssr, fetchExchange, subscription],
  suspense: true,
});

export const { getClient } = registerUrql(() => urqlClient);
