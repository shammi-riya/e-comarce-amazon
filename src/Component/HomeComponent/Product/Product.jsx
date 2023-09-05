import axios from "axios";
import { useEffect, useState } from "react";
import { BsEye, BsHeart } from "react-icons/bs";
import './product.css'
import { addProducts } from "../../../Api/addproducts";
import GetCartProducts from "../../../Api/getCartProducts";
import { ColorRing } from "react-loader-spinner";

const Product = () => {
    const [productsData, setproductsData] = useState([]);
    const [cartData, refetch] = GetCartProducts();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        const apiUrl = 'https://amazon-surver-shammi-riya.vercel.app/products';

        axios.get(apiUrl)
            .then(response => {
                setproductsData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);




    const handleAddToCart = (product) => {
        const productId = product._id;
        delete product._id;

        const productsdata = {
            _id: product._id,
            productname: product?.name,
            productDetails: product?.details,
            productQuantity: product?.quantity + 1,
            price: product?.price,
            productImage: product.image

        }

        const productPostInfo = {
            ...productsdata,
            productId

        }

        addProducts(productPostInfo, refetch)

    }


    




    return (
        <div className="container position-static mx-auto">
            <div className="row">


                {
                    isLoading ? <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#33cad5', '#f47e60', '#33cad5', '#abbd81', '#33cad6']}
                  />: 
                        productsData.map(product =>
                            <div key={product.id}
                                className="col-md-3 col-sm-6">
                                <div className="product-grid m-2">
                                    <div className="product-image">
                                        <a href="#" className="image">
                                            <img className="img-fluid" src={product.image} />
                                        </a>
                                        <ul className="product-links">
    
                                            <li><span className="icon"><BsHeart></BsHeart></span></li>
                                            <li><span className="icon"><BsEye ></BsEye></span></li>
                                        </ul>
                                        <button onClick={() => handleAddToCart(product)}
                                            className="add-to-cart">Add to Cart</button>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title"><p >{product.name}</p></h3>
                                        <div className="price"><span>${product.price}</span></div>
                                    </div>
                                </div>
                            </div>)
                    }
                
               
            </div>
        </div>
    );
};

export default Product;