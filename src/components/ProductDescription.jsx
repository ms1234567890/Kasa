import React from 'react'
import kasa from '../assets/logements.json'
import '../assets/css/Product.css'
import { useParams } from 'react-router-dom'
import Dropdown from './Dropdown'

function ProductDescription () {
    const { id } = useParams()
    let product = kasa.find(i => i.id === id)

    const productEquipments = [];
    if (Array.isArray(product.equipments)) {
        for (let i = 0; i < product.equipments.length; i++) {
            productEquipments.push(<li key={i}>{product.equipments[i]}</li>);
        }
    }

    return (
            <div className="product-dropdown">
                <Dropdown titre='Description' description={product.description} />
                <Dropdown titre='Equipements' description={product.equipments} />
            </div>
    )
}

export default ProductDescription