import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import routesData from './routesData'
import routesUrls from './routesUrls'

const CreateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesData().map(({ component, route }) => (
          <Route path={route} element={component} key={route} />
        ))}
        <Route
          path="*"
          element={<Navigate to={routesUrls.dashboard} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default CreateRoutes
