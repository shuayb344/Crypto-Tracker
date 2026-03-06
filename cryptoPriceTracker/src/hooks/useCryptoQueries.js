import { useQuery } from "@tanstack/react-query";
import {
  fetchCryptoData,
  fetchCryptoDetails,
  fetchCryptoPriceHistory,
  fetchNews,
} from "../api/fetchData";

export function useCryptoMarket() {
  return useQuery({
    queryKey: ["cryptoMarket"],
    queryFn: fetchCryptoData,
  });
}

export function useCryptoDetailsQuery(id) {
  return useQuery({
    queryKey: ["cryptoDetails", id],
    queryFn: () => fetchCryptoDetails(id),
    enabled: !!id,
  });
}

export function useCryptoPriceHistoryQuery(id) {
  return useQuery({
    queryKey: ["cryptoPriceHistory", id],
    queryFn: () => fetchCryptoPriceHistory(id),
    enabled: !!id,
  });
}

export function useNewsQuery() {
  return useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });
}

