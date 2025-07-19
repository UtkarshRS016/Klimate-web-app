import type { ForecastData } from "@/api/types"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ResponsiveContainer, LineChart,Line, XAxis, YAxis, Tooltip } from 'recharts';
import { format } from 'date-fns';

interface HourlyTemperatureProps {
 data: ForecastData
}

const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {

 const chartData = data.list.slice(0, 8).map((item) => ({
  time: format(new Date(item.dt * 1000), "ha"),
  temp: Math.round(item.main.temp),
  feels_like: Math.round(item.main.feels_like),
 }))

 return (
  <Card className="flex-1">
   <CardHeader>
    <CardTitle>Todays's Temperature</CardTitle>
   </CardHeader>
   <CardContent className="px-2 sm:px-6">
    <div className="h-[200px] w-full">
     <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart data={chartData} margin={{right : 20, top:10}}>
       <XAxis dataKey="time" stroke="#888888"
        fontSize={12}
        tickLine={false}
        axisLine={false} 
        padding={{left : 12}}/>
        <YAxis stroke="#888888"
        fontSize={12}
        tickLine={false}
        axisLine={false} 
        tickFormatter={(value)=>`${value}°`}/>
     
      {/* tooltip */}
      <Tooltip content={({active, payload})=>{
       if(active && payload && payload.length){
        return(
         <div className="rounded-lg bg-background border p-2 shadow-sm">
          <div className="grid grid-cols-2 gap-2">
           <div className="flex flex-col">
            <span className="text-[0.7rem] uppercase text-muted-foreground">Temperature</span>
            <span className="font-bold">{payload[0].value}°</span>
           </div>
           <div className="flex flex-col">
            <span className="text-[0.7rem] uppercase text-muted-foreground">Feels Like</span>
            <span className="font-bold">{payload[1].value}°</span>
           </div>
          </div>
         </div>
        )
       }
       return null;
      }}/>

      <Line type="monotone"
      dataKey="temp"
      stroke="#2563eb"
      strokeWidth={2}
      dot={false}
      />
      <Line type="monotone"
      dataKey="feels_like"
      stroke="#64749b"
      strokeWidth={2}
      dot={false}
      strokeDasharray="5 5"
      />

       </LineChart>
     </ResponsiveContainer>
    </div>
   </CardContent>
  </Card>
 )
}

export default HourlyTemperature