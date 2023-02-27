//CSS//
import './App.css';
//Frameworks//
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

//Database//
import kasa from "./assets/logements.json"

//Pages//
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Error from "./pages/Error";

//function who's find the  ID URL and compare if the ID of KASA is the same
function ProductView() {
  const { id } = useParams();
  let product = kasa.find(i => i.id === id)
  if (!product) {
    return <Error />;
  }
  return <Product element={<Product/>} />;
}

//Logique du router//
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Product/:id" element={<ProductView />} />
        <Route path="*" element={<Error/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
