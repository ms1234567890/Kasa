import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
