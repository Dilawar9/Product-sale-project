import React from 'react'
import { useState, useEffect } from 'react'

function Sales() {

  const [customer, setCustomer] = useState('')
  const [productid, setProductid] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [total,setTotal]=useState(0)
  const [discount,setDiscount]=useState("")
  const [orderstatus,setOrderstatus]=useState("")


  const hamdelbtn = () => {
    if (customer == '' || price == '' || productid == '' || quantity == '' || total=='' || discount==''|| orderstatus=='') {
      alert('Empty Field')
    } else {

      axios.post('http://localhost:4001/orders/create', {
        customer: customer,
        price: price,
        quantity: quantity,
        productid: productid,
        total:total,
        discount:discount,
        orderstatus:orderstatus

      })
        .then(function (response) {
          console.log(response.data)
          if (response.data.status == true) {
            // navigate('/')
          }
        })
        .catch(function (error) {
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
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User ID</label>
              <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
              <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
              <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product ID</label>
              <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total</label>
              <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount</label>
              <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Order Status</label>
              <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <button label="submit" className='bg-blue-600 p-3 rounded-xl mt-3' onClick={hamdelbtn}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Sales