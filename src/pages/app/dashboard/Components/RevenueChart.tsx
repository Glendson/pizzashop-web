import { useQuery } from '@tanstack/react-query'
import { subDays } from 'date-fns'
import { Loader2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { DateRange } from 'react-day-picker'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { getDailyRevenue } from '@/api/get-daily-revenue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DatePickerWithRange } from '@/components/ui/date-range-picker'
import { Label } from '@/components/ui/label'

export function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  const { data: dailyRevenue } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
    queryFn: () =>
      getDailyRevenue({
        from: dateRange?.from,
        to: dateRange?.to,
      }),
  })

  const chartData = useMemo(() => {
    return dailyRevenue?.map((chartItem) => {
      return {
        date: chartItem.date,
        receipt: chartItem.receipt / 100,
      }
    })
  }, [dailyRevenue])

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium ">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diaria no periodo</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <Label>Periodo</Label>
          <DatePickerWithRange date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>
      <CardContent>
        {chartData ? (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} style={{ fontSize: 12 }}>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                dy={16}
                tickFormatter={(date) =>
                  new Date(date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                  })
                }
              />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />
              <CartesianGrid vertical={false} className="stroke-muted" />
              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.violet['500']}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div>
            <Loader2 />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
