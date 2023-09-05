import axios from "axios";
import { toast } from "react-toastify";

export const addProducts = async (productsdata,refetch) => {
    console.log(productsdata);


    axios.post(`https://amazon-surver-shammi-riya.vercel.app/add-cart`, productsdata)
        .then(data => {
            refetch()
            data.data && toast('products added succesfully!', {
                
            });
        })
        .catch(err => {

            toast.error(err.message)
        })


}
