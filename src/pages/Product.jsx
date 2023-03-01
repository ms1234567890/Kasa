import React from "react";
import  '../assets/css/Product.css'
import Carrousel from "../components/Carrousel";
import ProductTitle from "../components/ProductTitle";
import ProductDescription from "../components/ProductDescription";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Product() {
  return (
      <div className="home">
          <Header />
          <Carrousel />
          <ProductTitle />    
          <ProductDescription />
          <Footer />      
      </div>
)}

export default Product
