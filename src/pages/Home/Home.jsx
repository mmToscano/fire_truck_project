import DisplayArea from "../../components/DisplayArea/DisplayArea";
import Navbar from "../../components/Navbar/Navbar";
import "./styles.css"

function Home() {
  return (
    <div className="homeMain">
      <Navbar/>
      <DisplayArea/>
    </div>
  );
}

export default Home;
