//CSS//
import './assets/css/App.css';
//Frameworks//
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

//Database//
import kasa from "./assets/logements.json"

//Pages//
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Error from "./pages/Error";


function SelectedProduct() {
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
        <Route path="/apartments/:id" element={<SelectedProduct />} />
        <Route path="*" element={<Error/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
