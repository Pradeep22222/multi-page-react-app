import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Description } from "./components/Description";
import { Skills } from "./components/Skills";
import { About } from "./components/About";


function App() {
  return (
    <div>
      <p>is it here</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Description></Description>}></Route>
          <Route path="/skills" element={<Skills></Skills>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
