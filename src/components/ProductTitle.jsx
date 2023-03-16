import { useParams } from 'react-router-dom'
import kasa from '../assets/logements.json'
import '../assets/css/Product.css'
import ProductTag from './ProductTag'
import ProductStars from './ProductStars.jsx'

// Dans le RETURN, on trouve le titre, la location, le nom et la photo du host //
// A la fin de la fonction, on trouve le composant qui réporte le numéro d'étoiles //

function ProductTitle() {
    const { id } = useParams()
    let product = kasa.find(i => i.id === id)

    return (
        <div className='product-container'>
            <div className='product-presentation'>
                <h1>{product.title}</h1>
                <h2>{product.location}</h2>
                <ProductTag />
            </div>
            <div className='host-ranked-container'>
                <div className='host-container'>
                    <h3>{product.host.name}</h3>
                    <img src={product.host.picture} alt="host" />
                </div>
                <ProductStars />
            </div>
        </div>
    )
}

export default ProductTitle
