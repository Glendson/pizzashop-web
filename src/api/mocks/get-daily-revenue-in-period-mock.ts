import { http, HttpResponse } from 'msw'

import { GetDailyRevenueResponse } from '../get-daily-revenue'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueResponse
>('metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 2163 },
    { date: '02/01/2024', receipt: 2663 },
    { date: '03/01/2024', receipt: 2263 },
    { date: '04/01/2024', receipt: 2583 },
    { date: '05/01/2024', receipt: 2753 },
    { date: '06/01/2024', receipt: 2023 },
    { date: '07/01/2024', receipt: 2183 },
  ])
})
