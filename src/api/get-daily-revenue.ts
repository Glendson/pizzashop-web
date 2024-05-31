import { api } from '@/lib/axios'

export interface GetDailyRevenueQuery {
  from?: Date
  to?: Date
}

export type GetDailyRevenueResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenue({ from, to }: GetDailyRevenueQuery) {
  const response = await api.get<GetDailyRevenueResponse>(
    'metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
