import { useTheme } from "@/context/themeProvider"
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom"
import CitySearch from "./CitySearch";

const Header = () => {

 const { theme, setTheme } = useTheme();
 const isDark = (theme === "dark");

 return (
  <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur py-2 supports-[backdrop]:bg-background/60">
   <div className="container flex mx-auto h-16 items-center justify-between px-4 overflow-hidden">
    <Link to={'/'}>
     <img src={isDark ? "/logo_01.png" : "/logo_02.png"}
      alt="Klimate logo"
      className="h-14" />
    </Link>

    <div className="flex flex-nowrap max-w-full items-center gap-2 sm:gap-4">
     <div className="md:max-w-[70vw]">
      <CitySearch />
     </div>

     {/* theme toggle */}
     <div className={`flex items-center cursor-pointer transition-transform duration-500
     ${isDark ? "rotate-180" : "rotate-0"}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" /> :
       <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />}
     </div>

    </div>
   </div>
  </header>
 )
}

export default Header