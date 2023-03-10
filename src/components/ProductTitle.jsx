import { useParams } from 'react-router-dom'
import kasa from '../assets/logements.json'
import '../assets/css/Product.css'
import ProductTag from './ProductTag'
import ProductStars from './ProductStars.jsx'

//In the Return, we find the title, the location, the name and the picture of Host//
//In the end of the function, we find the component ProductStars who's display Stars//

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
