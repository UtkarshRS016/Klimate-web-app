import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { ThemeProvider } from './context/themeProvider'
import WeatherDashboard from './pages/WeatherDashboard'
import CityPage from './pages/CityPage'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   staleTime: 5 * 60 * 1000, //5 minutes
   gcTime: 10 * 60 * 1000, //10 minutes
   retry: false,
   refetchOnWindowFocus: false
  }
 }
});

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
      <Toaster richColors/>
     </ThemeProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  </>
 )
}

export default App
