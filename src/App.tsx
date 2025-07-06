import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { ThemeProvider } from './context/themeProvider'
import WeatherDashboard from './pages/WeatherDashboard'
import CityPage from './pages/CityPage'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {

 return (
  <>
   <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <ThemeProvider>
      <Layout>
       <Routes>
        <Route path='/' element={<WeatherDashboard />}></Route>
        <Route path='/city/:cityName' element={<CityPage />}></Route>
       </Routes>
      </Layout>
     </ThemeProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  </>
 )
}

export default App
