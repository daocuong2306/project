import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
type Props = {}

const Form = (props: Props) => {
    //tạo ra biến để sử dụng được các chức năng trong reducer
    const dispatch = useDispatch();
    //lấy dữ liệu từ reducer
    const { user } = useSelector((state: any) => state.user)
    //tạo 1 biến navigate 
    const url = useNavigate()
    const { register, handleSubmit } = useForm();
    const callUserApi = async () => {
        try {
            const users = await axios.get("http://localhost:3000/user/");
            dispatch({ type: "user/login", payload: users })
        } catch (error) { }
    }
    const onHandleSubmit = (d: any) => {
        callUserApi()
        const data = user.data
        for (let item of data) {
            if((item.acc===d.acc) && (item.pass==d.password)) {
               url("/signin")
            } else {
                alert("sai tk hoac mk")
            }
        }
       
    }
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="acc" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                {...register("acc")}
                                placeholder="Enter email"

                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                {...register("password")}
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            No account?
                            <a className="underline" href="">Sign up</a>
                        </p>

                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            value="submit"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Form