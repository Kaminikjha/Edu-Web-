import DemoComponent from "./DemoComponent";

import "./App.css";
import ComfortLevel from "./components/ComfortLevel";
import Describes from "./components/Describes";
import Intrested from "./components/Intrested";
import LearningPath from "./components/LearningPath";
import Reload from "./components/Reload";
import RightPlace from "./components/RightPlace";
import Testimonial from "./components/Testimonial";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Describes />}></Route>
          <Route path="/intrested" element={<Intrested />}></Route>
          <Route path="/rightPlace" element={<RightPlace/>}></Route>
          <Route path="/comfortLevel" element={<ComfortLevel/>}></Route>
          <Route path="/testimonial" element={<Testimonial/>}></Route>
          <Route path="/reload" element={<Reload/>}></Route>
          <Route path="/learningPath" element={<LearningPath/>}></Route>
        </Routes>
      </BrowserRouter>

     

      {/* <DemoComponent /> */}
    </div>
  );
}

export default App;
