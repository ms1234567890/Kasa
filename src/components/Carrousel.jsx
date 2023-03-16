import { React, useState } from 'react'
import { useParams } from 'react-router-dom'
import kasa from '../assets/logements.json'
import '../assets/css/Product.css'
import arrowLeft from '../assets/images/Left.png'
import arrowRight from '../assets/images/Right.png'

function Carroussel() {
    const { id } = useParams()
    let product = kasa.find(i => i.id === id)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    function clickLeft () {
        if(currentImageIndex === 0) {
            setCurrentImageIndex(product.pictures.length -1)
        } else {
            setCurrentImageIndex(currentImageIndex-1)
        }
    }
    
    function clickRight () {
        if(currentImageIndex === product.pictures.length -1) {
            setCurrentImageIndex(0)
        } else {
            setCurrentImageIndex(currentImageIndex+1)
        }
    }

    return (
        <div className='carroussel'
            style={{ backgroundImage: `url(${product.pictures[currentImageIndex]})` }}>
            <div className={product.pictures.length === 1 ? 'carroussel-icon-hidden' : 'carroussel-icon'}>
                <button className='carroussel-btn' onClick={clickLeft}><img src={arrowLeft} alt="arrow-left"></img></button>
                <button className='carroussel-btn' onClick={clickRight}><img src={arrowRight} alt="arrow-right"></img></button>
            </div>
                <p>{currentImageIndex +1}/{product.pictures.length}</p>
        </div>
    )
}

export default Carroussel
