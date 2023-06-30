import React, { useState,useEffect } from 'react'
import axios from 'axios'

function Products() {
  const [products,setProducts] = useState([])
  const getProducts =  async () =>{
    await axios.get("https://fakestoreapi.com/products")
    .then(res =>{
      console.log(res);
      setProducts(res.data); 
    }).catch(err =>{
      if(err.status == "400") alert("cant Fetch the data")
    })
  }

  useEffect(() =>{
    getProducts();
  },[])

  
  return (
    <div className="container-xl">
      <div className="my-8">
        <div className="w-4/6 flex items-center justify-between mx-auto bg-btnwhite">
          <div className="w-1/2">
            <h1 className="text-3xl mb-3">Grab Your Favorite Products</h1>
            <a href="javascript:void(0)" className="text-xl text-white">
              <div className="border w-28 px-3 text-center py-2 rounded-xl bg-button text-btnwhite">Buy Now</div>
            </a>
          </div>
          <div className="">
            <img src="./assets/images/Banner_Img.svg" alt="" width="300px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
