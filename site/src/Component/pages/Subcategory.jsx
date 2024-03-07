import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
function Subcategory() {

    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('');
    const [categories, setCategories] = useState([]);


    const hamdelbtn = () => {


        if (subcategory == '') {
            alert('Pleas Enter Data')
        } else {

            axios.post(`http://localhost:4001/category/subcategory/${category}`, {
                subcategory: subcategory
            })
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status === "success") {
                        setCategory("");
                        setSubcategory("")
                        // navigate('/')
                    }
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                })
        }

    }


    useEffect(() => {
        axios.get("http://localhost:4001/category/getall").then((res) => {
            setCategories(res.data.categories)
        })
    }, []);

    return (
        <>
            <div className='m-9'>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className="mb-3">
                        <h1 className='mb-3 text-center font-bold text-3xl '>Create Sub-Category</h1>
                        <div>
                            <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">main-Category</label>
                            <select id="state" value={category} onChange={(e) => setCategory(e.target.value)} className='w-full' >
                                <option>select</option>
                                {
                                    categories.map((cat) => {
                                        return <option value={cat._id} key={cat._id}>{cat.maincategory}</option>
                                    })
                                }

                            </select>
                        </div>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub-Category</label>
                            <input type="text" value={subcategory} onChange={(e) => { setSubcategory(e.target.value) }} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                    <button label="submit" className='bg-blue-600 p-3 rounded-xl mt-3' onClick={hamdelbtn}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Subcategory;