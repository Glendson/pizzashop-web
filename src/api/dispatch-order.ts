import { api } from '@/lib/axios'

export interface DispatchrOrderParams {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchrOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
