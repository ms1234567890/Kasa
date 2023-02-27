import { useParams } from 'react-router-dom'
import kasa from '../assets/logements.json'
import '../assets/css/Product.css'

import starFull from '../assets/images/StarRed.png'
import starEmpty from "../assets/images/StarGrey.png"

//In this component, we push a full/empty star in the array 'stars'. To know if a star is full or empty we look in product.rating//


function ProductStars () {
    const { id } = useParams()
    let product = kasa.find(i => i.id === id)
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
        if (i < product.rating) {
            stars.push(<img src={starFull} alt="Full star" key={i} />);
        } else {
            stars.push(<img src={starEmpty} alt="Empty star" key={i} />);
        }
    }

    return (
    <div className='star-container'>{stars}</div>
    )
}

export default ProductStars
