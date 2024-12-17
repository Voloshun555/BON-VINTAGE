import { useQuery } from "@tanstack/react-query";
import { fetchFakeData } from "@/fakeApi.js";


export const useProducts = (count = 12) => {
    return useQuery({
      queryKey: ["products", count],
        queryFn: () => fetchFakeData(count),
      staleTime: 1000 * 60 * 5
    });
}
