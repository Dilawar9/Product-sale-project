import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import image from '../image/main.jpg'
// import '../login/style.css'
import logo from '../image/Logo.svg'


function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigator = useNavigate();

    const onSubmit = () => {
        if (name === "" || email === "" || password === "")
        {
            alert("Please Enter Data")
        } else{
            axios.post("http://localhost:4001/user/signup", {
                name: name,
                email: email,
                password: password
            }).then((res) => {
                console.log(res.data);
                if (res.data.status == "success") {
                    localStorage.setItem("token", res.data.token);
                    navigator("/")
                } else {
                    alert("not logged in")
                }
            })
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        
    }

    return (
        <>
            <section className="">
                <div className="login-wrapper bg-img">
                    <div className='login-content'>
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <img
                                className="w-[200px] h-[200px] mb-[-50px]"
                                src={logo}
                                alt="logo"
                            />
                            <div className="w-full  md:mt-0 sm:max-w-md xl:p-0">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Register
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="input1 border text-gray-900 sm:text-sm rounded w-full p-2.5"
                                                placeholder="name@company.com"
                                                required=""
                                                onChange={(e) => { setName(e.target.value) }}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Your email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="input1 border text-gray-900 sm:text-sm rounded w-full p-2.5"
                                                placeholder="name@company.com"
                                                required=""
                                                onChange={(e) => { setEmail(e.target.value) }}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                className="input1 border text-gray-900 sm:text-sm rounded w-full p-2.5"
                                                required=""
                                                onChange={(e) => { setPassword(e.target.value) }}
                                            />
                                        </div>
                                        {/* <div>
                                            <label
                                                htmlFor="confirm-password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Confirm password
                                            </label>
                                            <input
                                                type="confirm-password"
                                                name="confirm-password"
                                                id="confirm-password"
                                                placeholder="••••••••"
                                                className="input1 border text-gray-900 sm:text-sm rounded w-full p-2.5"
                                                required=""
                                            />
                                        </div> */}
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="terms"
                                                    aria-describedby="terms"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                    required=""
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="terms"
                                                    className="font-light text-gray-500 dark:text-gray-300"
                                                >
                                                    I accept the{" "}
                                                    <a
                                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                        href="#"
                                                    >
                                                        Terms and Conditions
                                                    </a>
                                                </label>
                                            </div>
                                        </div>
                                        <button
                                            type="submit" onClick={onSubmit}
                                            className="w-full bg-[#FF9F43] input1 border hover:border-[#FF9F43] hover:text-[#FF9F43] hover:bg-white text-white sm:text-sm rounded p-2.5"
                                        >
                                            Sign Up
                                        </button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account?{" "}
                                            <a
                                                href="/login"
                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            >
                                                Sign In Instead
                                            </a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Signup