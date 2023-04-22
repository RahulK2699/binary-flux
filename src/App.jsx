import IngestionList from "./Ingestion/IngestionList";
import { Navbar } from "./components/Navbar";
import "./index.scss";

function App() {
  return (
    <div>
      <Navbar />
      <div className=" w-full  bg-bgblue ingestion-height ">
        <IngestionList />
      </div>
    </div>
  );
}

export default App;
