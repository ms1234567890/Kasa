import React from "react";
import  '../assets/css/Product.css'
import Carrousel from "../components/Carrousel";
import ProductTitle from "../components/ProductTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div>
      <Header />
      <Carrousel />
      <ProductTitle />
      Accueil
      <Footer />
    </div>
  )
}

export default Product;