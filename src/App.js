// Pages
import Home from "./pages/Home";
import Gillat from "./pages/Gillat";
import Kopvillkor from "./pages/Kopvillkor";
import Nyheter from "./pages/Nyheter";
import OmOss from "./pages/OmOss";
import Produkter from "./pages/Produkter";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Style
import './App.css';

// Router
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/gillat" element={<Gillat />} />
                    <Route path="/kopvillkor" element={<Kopvillkor />} />
                    <Route path="/nyheter" element={<Nyheter />} />
                    <Route path="/omoss" element={<OmOss />} />
                    <Route path="/produkter" element={<Produkter />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;