import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

const WeatherDashboard = () => {
 return (
  <div className="space-y-4"> 
   {/* Favorite cities */}
   <div className="flex items-center justify-between">
    <div className="text-xl font-bold tracking-tight">
     My location
    </div>
    <Button variant={'outline'}
     size={'icon'}
    // onClick={handleRefresh}
    // disabled={} 
    >
     <RefreshCw className="h-4 w-4" />
    </Button>
   </div>
   {/* current and hrly weather */}
  </div>
 )
}

export default WeatherDashboard