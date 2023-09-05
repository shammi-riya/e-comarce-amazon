import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";


const GetCartProducts = () => {

    // const [cartData,setCartData] = useState([])
    // useEffect(()=>{


    //     axios.get('http://localhost:5000/cart')
    //     .then(data => {
    //         setCartData(data?.data)
    //     })
    //     .catch(err => {
    //         toast.error(err.message)
    //     })

    // },[])


    const { data: cartData = [], error, refetch } = useQuery({
        queryKey: ['my-cart'],
        queryFn: async () => {
            try {
                const response = await fetch(`http://localhost:5000/cart`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            } catch (error) {
                console.error('Error fetching cart data:', error);
                throw error; // Rethrow the error to let React Query handle it
            }
        },
    });
    return [cartData,refetch];
};

export default GetCartProducts;