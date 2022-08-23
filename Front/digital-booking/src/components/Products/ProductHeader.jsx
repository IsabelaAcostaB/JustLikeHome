import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./product-template.css";
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'

function ProductHeader({category, title}){
    return (
        <div className="product-header">
            <div className="product-header_info">
                <p>{category}</p>
                <h2>{title}</h2>
            </div>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </div>
    )
}

export default ProductHeader;