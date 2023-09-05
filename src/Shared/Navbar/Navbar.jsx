import { Link } from 'react-router-dom';
import './navbar.css'
import { BsCart, BsTrash } from 'react-icons/bs';
import GetCartProducts from '../../Api/getCartProducts';
import DeleteProducts from '../../Api/DeleteProducts';
// import { BiMenu } from 'react-icons/bs';


const Navbar = () => {
    const [cartData,refetch] = GetCartProducts();
   


const handleDeleProducts=(id)=>{
    console.log(id);
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
                            {cartData.length || '0'}
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
                            {cartData.slice(0,10).map(cartProduct => (
                                <tr key={cartProduct._id}>
            
                                    <td>
                                        <img style={{height:'60px',width:'60px'}}  src={cartProduct?.productImage} alt={cartProduct.name} className="product-image" />
                                    </td>
                                    <td>
                                        <button className="quantity-button">-</button>
                                        <span className="quantity">{cartProduct.productQuantity}</span>
                                        <button className="quantity-button">+</button>
                                    </td>
                                    <td>
                                        ${cartProduct.price}
                                    </td>

                                    <td>
                                        <button onClick={()=>handleDeleProducts(cartProduct._id)}
                                        className="delete-button">
                                            <span className="delete-icon"><BsTrash></BsTrash></span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default Navbar;