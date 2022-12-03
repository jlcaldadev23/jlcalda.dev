import { useState } from "react";

import { Navbar } from "./components";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="flex flex-col w-full h-screen bg-white text-charcoal dark:bg-charcoal dark:text-white">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </div>
    </div>
  );
}

export default App;
