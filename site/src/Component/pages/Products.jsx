import React from 'react'
import { useState, useEffect } from 'react'
// import {useNavigate} from  'react-router-dom'
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import axios from 'axios'


function Products() {

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  // const navigate = useNavigate()
  const [quantity, setQuantity] = useState('')
  // const toast = useRef(null);
  const [price, setPrice] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/category/getall").then((res) => {
      setCategories(res.data.categories);
    })
  }, [])

  const hamdelbtn = () => {
    if (name == '' || category == '' || image == '' || description == '' || quantity == '' || price == '') {
      alert('Please Enter Data')
    } else {

      axios.post('http://localhost:4001/product/create', {
        name: name,
        description: description,
        category: category,
        quantity: quantity,
        price: price,
        image: image,
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

        .then( (res)=> {
          console.log(res.data)
          if (res.data.status == "success") {
            alert("Product Add Successfully")
            // navigate('/')
          }
        })
        .catch( (error)=> {
          // handle error
          console.log(error);
        })
    }

  }
  return (
    <>
      <div className='m-8'>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <div className="grid gap-6 mb-6 md:grid-cols-1 m-5">
            <h1 className='text-center font-bold text-3xl'>Product Create</h1>
            <div>
              <label for="name" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gategory</label>
              <select id="state"  onChange={(e) => { setCategory(e.target.value) }} className='w-full' >
                {
                  categories.map((cat) => {
                    return <option key={cat._id} value={cat.category}>{cat.category}</option>
                  })
                }

              </select>
            </div>
            <div>
              <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
              <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}  id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
              <input type="text" id="small-input" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
              <input type="text" id="small-input" value={price} onChange={(e)=>{setPrice(e.target.value)}}  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <input type="text" id="small-input" value={description} onChange={(e)=>{setDescription(e.target.value)}}  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <button type="submit" onClick={hamdelbtn} className=" m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Products;