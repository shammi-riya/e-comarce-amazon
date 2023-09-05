import { Link } from 'react-router-dom';
import './navbar.css'
import { BsCart, BsTrash } from 'react-icons/bs';
import GetCartProducts from '../../Api/getCartProducts';
import DeleteProducts from '../../Api/DeleteProducts';
import axios from 'axios';
import { useEffect, useState } from 'react';



const Navbar = () => {
    const [cartData,refetch] = GetCartProducts();
  const [totalPrice,setotalPrice] = useState(null)

    const handleIncressQuintity = (id) => {
        
        axios.patch(`https://amazon-surver-shammi-riya.vercel.app/increse-quinty/${id}`, { id: id })
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                }
            })
            .catch(error => {
                console.error('Error increasing quantity:', error);
            });
    }

    


    const handleDecressQuintity = (id) => {
      
        axios.patch(`https://amazon-surver-shammi-riya.vercel.app/decress-quinty/${id}`, {

            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(res => {
                res.data.modifiedCount && refetch()
            })
    }

    useEffect(() => {
        // Calculate the total price whenever cartData changes
        let sum = 0;
        cartData.forEach((cartProduct) => {
            sum += cartProduct.price * cartProduct.productQuantity;
        });
        setotalPrice(sum);
    }, [cartData]);


const handleDeleProducts=(id)=>{
    
    DeleteProducts(id,refetch)
}

    return (
        <div>
            <nav className="navbar navbar-bg navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand navbar-text fs-2 fw-bold" href="#">Amazon</a>
                    <button className="navbar-toggler navbar-text" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbar-text"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  me-auto  mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active navbar-text" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-text" href="#">Shop</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link navbar-text" >About</Link>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                className='fs-4 text-light'><BsCart></BsCart></span>
                            <p className='text-white fs-4 posision-absolute top-2'>{cartData.length || '0'}</p>
                        </div>

                    </div>
                </div>
            </nav>



            {/* sidebar */}

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart Products</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
                    <table className="table">
                        <thead>
                            <tr>
                               
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.slice(0,15).map(cartProduct => (
                                <tr key={cartProduct._id}>
            
                                    <td>
                                        <img style={{height:'60px',width:'60px'}}  src={cartProduct?.productImage} alt={cartProduct.name} className="product-image" />
                                    </td>
                                    <td>
                                        <button onClick={()=>handleDecressQuintity(cartProduct._id)}
                                         className="quantity-button">-</button>
                                        <span className="quantity">{cartProduct.productQuantity}</span>
                                        <button onClick={()=>handleIncressQuintity(cartProduct._id)}
                                        className="quantity-button ">+</button>
                                    </td>
                                    <td>
                                        ${cartProduct.price*cartProduct.productQuantity}
                                    </td>

                                    <td>
                                        <button onClick={()=>handleDeleProducts(cartProduct._id)}
                                        className="delete-button btn btn-danger">
                                            <span className="delete-icon"><BsTrash></BsTrash></span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                    </table>

                    <p className='text-center'>Total price =  ${totalPrice.toFixed(2)}</p>
                </div>


            </div>
        </div>
    );
};

export default Navbar;