import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import image from '../image/main.jpg'
// import '../login/style.css'
import logo from '../image/Logo.svg'


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigator = useNavigate();

    const onSubmit = () => {
        if(email === "" || password === ""){
            alert('Please enter all fields')
        }else{
            axios.post("http://localhost:4001/user/login",{email:email, password:password}).then((res)=>{

            console.log(res.data);
            if(res.data.status == "success") {
                localStorage.setItem("token", res.data.token);
                navigator("/")
                alert("logged in successfuly")
            } else {
                alert("not logged in")
            }
            }).catch(err=>console.log(err))
        }
    }

    return (
        <>
            <section className="">
            <div className="login-wrapper bg-img">
                <div className='login-content'>

                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <img
                                className="w-[200px] h-[200px] my-[-50px]"
                                src={logo}
                                alt="logo"
                            />
                        <div className="w-full  md:mt-0 sm:max-w-md xl:p-0 ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Email Address
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
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    aria-describedby="remember"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-primary-300 "
                                                    required=""
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="remember"
                                                    className="text-gray-500 dark:text-gray-300"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <a
                                            href="#"
                                            className="text-sm font-medium text-[#FF0000] hover:underline dark:text-primary-500"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={onSubmit}
                                        className="w-full bg-[#FF9F43] input1 border hover:border-[#FF9F43] hover:text-[#FF9F43] hover:bg-white text-white sm:text-sm rounded p-2.5"
                                    >
                                        Sign in
                                    </button>
                                    <p className="text-sm font-light text-[#090a0c]">
                                    New on our platform??{" "}
                                        <a
                                            href="/signup"
                                            className="font-medium text-[#FF9F43] hover:underline  "
                                        >
                                            Create an account
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

export default Login;