import type { GeocodingResponse, WeatherData } from "@/api/types"

interface CurrentWeatherProps {
 data: WeatherData,
 locationName?: GeocodingResponse,
}

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
 return (
  <div>
   <div>{`${data} and ${locationName}`}</div>
  </div>
 )
}

export default CurrentWeather