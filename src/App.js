import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Completed from "./Completed";
import Proceeding from "./Proceeding";
import Important from "./Important";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/completed" element={<Proceeding />} />
          <Route path="/completed" element={<Important />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
