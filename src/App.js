import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";

function App() {
  return <div>
    <Header></Header>
    <Skills></Skills>
    <About></About>
    <Description></Description>
    <Footer></Footer>
  </div>;
}

export default App;
