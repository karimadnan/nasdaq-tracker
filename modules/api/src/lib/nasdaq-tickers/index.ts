import { getApi } from '../axios.js';
import type { NasdaqStockRecord } from '@org/types';

type TickersResponse = {
  count: number;
  next_url?: string;
  request_id: string;
  results: NasdaqStockRecord;
  status: string;
};

type TickersRequestParams = {
  pageParam?: string;
};

export async function fetchTickers({ pageParam }: TickersRequestParams) {
  const res = await getApi().get<TickersResponse>(
    pageParam ??
      'v3/reference/tickers?market=stocks&active=true&order=asc&limit=100&sort=ticker'
  );
  return res.data;
}
