import {
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import CreateDetails from "./components/create/CreateDetails";
import HeaderBar from "./components/layout/HeaderBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
     <HeaderBar />
     <Routes>
     <Route path="/" element= {<HomePage />} />
     <Route path="/createpage" element= {<CreateDetails />} />
     </Routes>
    </>
  );
}

export default App;
