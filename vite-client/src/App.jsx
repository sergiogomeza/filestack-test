import "./App.css";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import CustomFileStack from "./component/CustomFileStack.jsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CustomFileStack></CustomFileStack>
    </>
  );
}

export default App;
