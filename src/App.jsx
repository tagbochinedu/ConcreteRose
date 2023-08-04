import Header from "./Components/Organisms/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoanPage from "./Pages/LoanPage";
import Footer from "./Components/Organisms/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<LoanPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
