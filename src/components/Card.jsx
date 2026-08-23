import { CalendarDays, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
const Card = ({ qualification, name, city, year, dept, icon }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${isDark ? "shadow-[5px_5px_15px_rgba(255,255,255,0.2)]" : "shadow-[5px_5px_15px_black]"} bg-bgCard border border-muted shadow-shadow/60 p-5 mt-5 overflow-hidden rounded-lg w-full lg:w-2/3 `}>
      <h1
        className={`text-2xl lg:text-4xl  font-mulish flex gap-3 items-center justify-center ${isDark ? "text-cyan-500  drop-shadow-[0_0_20px_#22d3ee]" : "text-text"}  font-bold`}>
        {icon} {qualification}
      </h1>
      <h2 className="text-indigo-500 lg:text-center  text-2xl md:text-3xl font-semibold ">
        {dept}
      </h2>
      <h3 className="text-emerald-600 lg:text-center italic text-xl lg:text-2xl tracking-wider">
        {name}
      </h3>
      <div className="flex mt-5 items-center justify-between">
        <p className="text-lg  flex items-center gap-2 lg:text-xl text-yellow-600">
          <MapPin />
          {city}
        </p>
        <span className="text-md flex gap-2 items-center lg:textlg tracking-widest text-muted">
          <CalendarDays />
          {year}
        </span>
      </div>
    </div>
  );
};

export default Card;
