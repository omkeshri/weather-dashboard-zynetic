import { Provider } from "react-redux";
import Body from "./components/Dashboard/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="h-screen relative">
        {/* Background Image */}
        <img 
          src="https://img.freepik.com/free-photo/view-apocalyptic-dark-stormy-clouds_23-2151065786.jpg" 
          alt="Stormy Clouds Background" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay for Better Readability (Optional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-32 py-6">
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
