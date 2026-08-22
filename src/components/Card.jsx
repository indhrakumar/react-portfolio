const Card = ({ qualification, name, city, year, dept, icon }) => {
  return (
    <div className="bg-white/8 border border-muted shadow-shadow p-5 mt-5 rounded-lg w-full lg:w-1/2 ">
      <h1 className="text-2xl lg:text-4xl font-mulish flex gap-3 items-center">
        <span className="text-cyan-400 drop-shadow-[0_0_20px_#22d3ee]">
          {icon}
        </span>
        <span className="text-cyan-500 font-bold drop-shadow-[0_0_20px_#22d3ee]">
          {qualification}
        </span>{" "}
        - <span className="text-indigo-500 font-semibold ">{dept}</span>
      </h1>
      <h1 className="text-emerald-600 text-xl lg:text-2xl tracking-wider">
        {name}
      </h1>
      <h1 className="text-lg lg:text-xl text-fuchsia-400">{city}</h1>
      <h1 className="text-md lg:textlg tracking-widest text-muted">{year}</h1>
    </div>
  );
};

export default Card;
