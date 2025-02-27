import routesUrls from './routesUrls'
import { ReactNode } from 'react'
import { DashboardPage, FinalizePage, ResultPage } from '../../pages'

export type RouteData = {
  component: ReactNode
  route: string
}

const RoutesData = (): Array<RouteData> => {
  return [
    { component: <DashboardPage />, route: routesUrls.dashboard },
    { component: <FinalizePage />, route: `${routesUrls.finalize}/:id` },
    { component: <ResultPage />, route: `${routesUrls.results}/:id` },
  ]
}

export default RoutesData
