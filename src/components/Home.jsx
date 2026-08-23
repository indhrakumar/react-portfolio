import { FaReact } from "react-icons/fa";

function Home({ setPage }) {
  return (
    <div className="text-text bg-bgDark relative w-full min-h-[calc(100vh-80px)] justify-center items-center flex font-mulish ">
      <div className="p-5  gap-5 flex flex-col rounded-lg">
        <h1
          className=" z-999 animate-pulse text-5xl p-3 font-semibold flex gap-3 justify-center items-center"
          style={{ textShadow: "0 0 25px" }}>
          <span className="text-cyan-400 flex gap-2">
            <FaReact className="text-cyan-400 animate-pulse  drop-shadow-[0_0_25px_#22d3ee]" />
            React
          </span>{" "}
          Portfolio
        </h1>
        <div className="mb-5">
          <p className="text-center z-999 italic text-cyan-400">
            Welcome to my portfolio website.
          </p>
          <p className="text-center z-999 italic text-muted ">
            Its just a simple Design.
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <button
            onClick={() => setPage("about")}
            className="z-999 animate-bounce border cursor-pointer  border-cyan-500 rounded-full  flex items-center justify-center text-green-600  p-3">
            Explore
          </button>
        </div>
      </div>
      <div>
        <FaReact
          size={500}
          className="z-0 absolute opacity-10 text-9xl text-cyan-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/7 "
        />
      </div>
    </div>
  );
}

export default Home;
