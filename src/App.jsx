import Body from "./components/Dashboard/Body";
import { FaLightbulb } from "react-icons/fa";
import { MdNightlightRound } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./utils/appSlice";

function App() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((store) => store.app.theme);
  const handleTheme = () => {
    dispatch(setTheme());
  };

  return (
    <div className="h-screen relative">
      <button
        className={`absolute top-5 right-5 p-[0.7rem] z-10 ${
          currentTheme === "dark" ? "bg-white" : "bg-black text-white"
        } rounded-full cursor-pointer`}
        onClick={handleTheme}
      >
        {currentTheme === "dark" ? <FaLightbulb /> : <MdNightlightRound />}
      </button>
      <img
        src={
          currentTheme === "dark"
            ? "https://img.freepik.com/free-photo/view-apocalyptic-dark-stormy-clouds_23-2151065786.jpg"
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JCyrTQdWMI_VhORmv4vxZbrcALHyBJFHRw&s"
        }
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center md:pt-6  pt-20 px-2 md:px-20 xl:px-32 py-6">
        <Body />
      </div>
    </div>
  );
}

export default App;
