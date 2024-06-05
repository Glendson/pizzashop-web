import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'pizza 1', amount: 5 },
    { product: 'pizza 2', amount: 3 },
    { product: 'pizza 3', amount: 8 },
    { product: 'pizza 4', amount: 1 },
    { product: 'pizza 5', amount: 9 },
  ])
})
