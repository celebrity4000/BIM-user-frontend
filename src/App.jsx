import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Courses from "./pages/Courses";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Courses /> */}
      <Home />
    </>
  );
}

export default App;
