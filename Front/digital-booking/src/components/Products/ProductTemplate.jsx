import ProductHeader from "./ProductHeader";
import Product from "./Product";

function ProductTemplate({productId}){
    return ( 
            <Product productId={productId}/>
    )
}

export default ProductTemplate;