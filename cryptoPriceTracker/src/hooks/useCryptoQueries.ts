import { queryOptions } from "@tanstack/react-query";
import {
  fetchCryptoData,
  fetchCryptoDetails,
  fetchCryptoPriceHistory,
  fetchNews,
} from "../api/fetchData";

export const cryptoMarketQueryOptions = () =>
  queryOptions({
    queryKey: ["cryptoMarket"],
    queryFn: fetchCryptoData,
  });

export const cryptoDetailsQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["cryptoDetails", id],
    queryFn: () => fetchCryptoDetails(id),
    enabled: !!id,
  });

export const cryptoPriceHistoryQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["cryptoPriceHistory", id],
    queryFn: () => fetchCryptoPriceHistory(id),
    enabled: !!id,
  });

export const newsQueryOptions = () =>
  queryOptions({
    queryKey: ["news"],
    queryFn: fetchNews,
  });


