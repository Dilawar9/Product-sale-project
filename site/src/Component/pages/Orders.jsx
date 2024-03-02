import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
function Orders() {
  const [userid, setUserid] = useState('')
  const [total, setTotal] = useState('')
  const [status, setStatus] = useState('')
  const [user, setUser] = useState([]);
  

  useEffect(() => {
    axios.get("http://127.0.0.1:4001/user/login").then((res) => {
      // setUser(res.data.ObjectID);
      console.log(res.data.email);
    })
  }, [])

  const hamdelbtn = () => {
    if (total == '' || status == '') {
      alert('Please Enter Data')
    } else {

      axios.post('http://localhost:4001/shop/place-order', {
        userid: userid,
        total: total,
        status: status
      })
        .then( (res)=> {
          console.log(res.data)
          if (res.data.status == "OK") {
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
      <div className=' m-9'>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <div className="mb-3">
            <h1 className='mb-3 text-center font-bold text-3xl '>Create Order</h1>
            <div>
              <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User ID</label>
              <select id="state" value={userid}  onChange={(e) => { setUserid(e.target.value) }} className='w-full' >
                {
                  user.map((cat) => {
                    return <option key={cat._id} value={cat._id}>{cat._id}</option>
                  })
                }
              </select>
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total</label>
              <input type="text" id="small-input" value={total} onChange={(e)=>{setTotal(e.target.value)}} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className='mb-3'>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
              <input type="text" id="small-input"  value={status} onChange={(e)=>{setStatus(e.target.value)}} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          <button label="submit" className='bg-blue-600 p-3 rounded-xl mt-3' onClick={hamdelbtn}>Add TO Card</button>
        </form>
      </div>
    </>
  )
}

export default Orders;