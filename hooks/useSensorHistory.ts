"use client"

import { useQuery } from "@tanstack/react-query"
import { fetchSensorHistory, type SensorHistoryPoint } from "@/lib/sensors"

export function useSensorHistory(from: string, to: string) {
  return useQuery<SensorHistoryPoint[], Error>({
    queryKey: ["sensors", "history", from, to],
    queryFn: () => fetchSensorHistory({ from, to }),
    enabled: Boolean(from && to),
    staleTime: 2000 * 60, // 2 minute
    refetchOnWindowFocus: false,
  })
}
