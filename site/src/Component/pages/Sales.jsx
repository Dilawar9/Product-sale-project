import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Sales() {

  const [customer, setCustomer] = useState('')
  const [products, setProducts] = useState([])
  // const [selectedProduct, setSelectedProduct] = useState(null)

  // Fetch all products when the    
  const [productid, setProductid] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState("")
  const [salestatus, setSalestatus] = useState("")

  useEffect(() => {
    axios.get("http://127.0.0.1:4001/product/getall").then((res) => {
      setProducts(res.data.product);
      console.log(res.data.product);
      return;
    })
  }, [])



  const hamdelbtn = () => {
    if (customer == '' || price == '' || productid == '' || quantity == '' || total == '' || discount == '' || salestatus == '') {
      alert('Please Enter Data')
    } else {

      axios.post('http://localhost:4001/sale/create', {
        customer: customer,
        price: price,
        quantity: quantity,
        productid: productid,
        total: total,
        discount: discount,
        order_status: salestatus

      })
        .then((res) => {
          console.log(res.data)
          if (res.data.status == "success") {
            alert("Sale Create Successfully")
            // navigate('/')
          }
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    }

  }
  return (
    <>
      <div className=' m-9'>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <div className="formgrid grid">
            <h1 className='mb-3 p-3 text-center font-bold text-3xl'>Sales Create</h1>
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer Name</label>
              <input type="text" value={customer} onChange={(e) => { setCustomer(e.target.value) }} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <label for="name" className="block mt-3 text-sm font-medium text-gray-900 dark:text-white">Product ID</label>
            <select value={productid} className='w-full p-2' onChange={(e) => { setProductid(e.target.value) }}>
              <option >select</option>
              {
                products.map((product) => {
                  return <option key={product._id} value={product._id}>{product.name}</option>
                })
              }
            </select>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
              <input type="text" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pice</label>
              <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount</label>
              <input type="text" value={discount} onChange={(e) => { setDiscount(e.target.value) }} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total</label>
              <input type="text" value={total} onChange={(e) => { setTotal(e.target.value) }} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sale Status</label>
              <input type="text" value={salestatus} onChange={(e) => { setSalestatus(e.target.value) }} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <button label="submit" className='bg-blue-600 p-3 rounded-xl mt-3' onClick={hamdelbtn}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Sales