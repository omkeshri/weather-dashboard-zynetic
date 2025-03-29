import { Provider } from "react-redux";
import Body from "./components/Dashboard/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="bg-[#15355c] h-screen py-6 px-32">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
