import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import './footer.css'
const Footer = () => {
    return (
        <div  style={{backgroundColor:'#33cad5'}}
        className=" mt-5">
  
  <footer
          className="text-center text-lg-start text-white"
         
          >
    
    <div className="container p-4 pb-0">
    
      <section className="">
       
        <div className="row">
         
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fs-3 font-weight-bold">
              Amazon
            </h6>
            <p>
            If the item you want is available, we can process a return and place a new order
            </p>
          </div>
         

          <hr className="w-100 clearfix d-md-none" />

         
          <div className="col-md-2  col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <Link className="text-white link-underline link-underline-opacity-0">About</Link>
            </p>
            <p>
              <Link className="text-white link-underline link-underline-opacity-0">Shop</Link>
            </p>
            <p>
              <Link className="text-white link-underline link-underline-opacity-0">Contucts</Link>
            </p>
            
          </div>
         

          <hr className="w-100 clearfix d-md-none" />

         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <Link className="text-white link-underline link-underline-opacity-0">Your Account</Link>
            </p>
            <p>
              <Link className="text-white link-underline link-underline-opacity-0">My Account</Link>
            </p>
            <p>
              <Link className="text-white link-underline link-underline-opacity-0">View Cart</Link>
            </p>
            <p>
              <Link className="text-white link-underline link-underline-opacity-0">My Wishlist</Link>
            </p>
            <p>
              <Link className="text-white link-underline link-underline-opacity-0">order stutus</Link>
            </p>
          </div>

         
          <hr className="w-100 clearfix d-md-none" />

         
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> Bangladesh, NY 10012</p>
            <p><i className="fas fa-envelope mr-3"></i> amazon@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
         
        </div>
       
      </section>
    

      <hr className="my-3"/>

     
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
         
          <div className="col-md-7 col-lg-8 text-center text-md-start">
           
            <div className="p-3 text-white">
              © 2020 Copyright:
              <Link className="text-white" href="https://mdbootstrap.com/"
                 >Amazon</Link>
            </div>
           
          </div>
         

         
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            
            <Link
               className="btn icon btn-outline-light btn-floating m-1"
              
               role="button"
               ><span className="icon"><BsFacebook></BsFacebook></span></Link>

          
            <Link
               className="btn icon btn-outline-light btn-floating m-1"
              
               role="button"
               ><span className="icon"><BsWhatsapp></BsWhatsapp></span>
              </Link>

           
            <Link
               className="btn icon btn-outline-light btn-floating m-1"
              
               role="button"
               >
               <span className=""> <BsTwitter></BsTwitter></span>
               </Link>

           
            <Link
               className="btn icon btn-outline-light btn-floating m-1"
              
               role="button"
               >
               <span className="icon"> <BsLinkedin></BsLinkedin></span>
               </Link>
          </div>
         
        </div>
      </section>
      
    </div>
   
  </footer>
  
</div>
    );
};

export default Footer;