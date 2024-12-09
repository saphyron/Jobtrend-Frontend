import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar.js";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import Ask from "./Pages/Ask.js";
import Search from "./Pages/Search.js";
import MyPage from "./Pages/MyPage.js";
import Footer from "./Components/Footer.js";
import "./style/main.css";
import Jobs from "./Pages/Jobs.js";
import Subject from "./Pages/Subject.js";
import Companys from "./Pages/Company.js";
import FilterPage from "./Pages/FilterPage.js";
import AddPage from "./Pages/AddPage.js";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filterpage" element={<FilterPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/companys" element={<Companys />} />
          <Route path="/search" element={<Search />} />
          <Route path="/addpage" element={<AddPage />} />


        </Routes>
        <Footer />
      </div>
    
    </Router>
  );
}

export default App;
