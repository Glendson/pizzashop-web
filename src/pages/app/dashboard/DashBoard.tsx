import { Helmet } from 'react-helmet-async'

import DayOrdersAmoutCard from './Components/DayOrdersAmoutCard'
import MonthCanceledOrdersAmountCard from './Components/MonthCanceledOrdersAmountCard'
import MonthOrdersAmountCard from './Components/MonthOrdersAmountCard'
import MonthRevenueCard from './Components/MonthRevenueCard'
import { PopularCharts } from './Components/PopularCharts'
import { RevenueChart } from './Components/RevenueChart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmoutCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularCharts />
        </div>
      </div>
    </>
  )
}
