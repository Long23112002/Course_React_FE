import "./App.css";
import "./assets/css/sidebar.css"
import { NavBar, SideBar } from "./components/navbar";
import { Footer } from "./components/footer";
import Coursel from "./components/slide/Coursel";
function App() {
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-1">
          <SideBar />
        </div>
        <div className="col-11">
          <Coursel />
          <Coursel />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
