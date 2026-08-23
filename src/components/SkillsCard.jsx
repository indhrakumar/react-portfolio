import { useTheme } from "../context/ThemeContext";
const SkillsCard = ({
  title,
  logo,
  cato,
  txtcolour,
  colour,
  bgColor,
  percent,
  discrip,
  dropShadow,
}) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`p-3 bg-bgCard ${isDark ? "shadow-[inset_1px_5px_18px_rgba(255,255,255,0.2)]" : "shadow-[inset_0_0_20px_black]"} backdrop-blur-sm rounded-2xl`}>
      <h1
        className={`text-center text-3xl ${txtcolour} font-bold tracking-widest`}>
        {title}
      </h1>
      <div
        className={`${txtcolour} ${isDark ? dropShadow : " "} w-full text-8xl flex mt-5 items-center justify-center`}>
        {logo}
      </div>
      <p className="text-muted text-center text-lg my-5">{discrip}</p>
      <div className="flex items-center justify-between mb-4">
        <span
          className="font-mulish text-text font-bold tracking-wider"
          style={{ textShadow: isDark ? `0 0 15px ${colour}` : "none" }}>
          {cato}
        </span>
        <span className="font-bold text-text">{percent}%</span>
      </div>
      <div className="mb-5 flex">
        <div className="bg-gray-600  mt-auto  rounded-full overflow-hidden w-full h-3">
          <div
            className={`h-full rounded-full ${bgColor}`}
            style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
