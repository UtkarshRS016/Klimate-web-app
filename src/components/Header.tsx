import { useTheme } from "@/context/themeProvider"
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom"

const Header = () => {

 const { theme, setTheme } = useTheme();
 const isDark = (theme === "dark");

 return (
  <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur py-2 supports-[backdrop]:bg-background/60">
   <div className="container flex mx-auto h-16 items-center justify-between px-4">
    <Link to={'/'}>
     <img src={isDark ? "/logo1.png" : "/logo2.png"}
      alt="Klimate logo"
      className="h-14"></img>
    </Link>
    <div>
     {/* search */}
     {/* theme toggle */}
     <div className={`flex items-center cursor-pointer transition-transform duration-500
     ${isDark ? "rotate-180":"rotate-0"}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" /> : 
      <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all"/>}
     </div>
    </div>
   </div>
  </header>
 )
}

export default Header