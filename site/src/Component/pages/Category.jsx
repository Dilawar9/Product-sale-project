import React from 'react'
import { useState } from 'react'
import axios from "axios"
function Category() {

    const [category, setCategory] = useState('')

    const hamdelbtn = () => {
        if (category == '') {
            alert('Pleas Enter Data')
        } else {

            axios.post("http://localhost:4001/category/create", {
                category: category
            })
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status == "success") {
                        setCategory("");
                        // navigate('/')
                    }
                })
                .catch((error)=> {
                    // handle error
                    console.log(error);
                })
        }

    }

    return (
        <>
            <div className='m-9'>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className="mb-3">
                        <h1 className='mb-3 text-center font-bold text-3xl '>Create Category</h1>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                    <button label="submit" className='bg-blue-600 p-3 rounded-xl mt-3' onClick={hamdelbtn}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Category;