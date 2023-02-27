import { useParams } from 'react-router-dom'
import kasa from '../assets/logements.json'
import '../assets/css/Product.css'

//Just iterate on the product.tag of the product and display each one

function ProductTag() {
    const {id} = useParams()
    let product = kasa.find(i => i.id === id)
    return (
        <div className='tag-container'>
            {product.tags.map((tag, index) => {
                return (
                    <h3 key={index} className="tag-unite">{tag}</h3>
                )
            })}
        </div>
)}

export default ProductTag