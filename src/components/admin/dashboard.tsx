import { getAll,remove } from '@/api/products'
import React from 'react'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
const Dashboard = () => {
    const dispatch = useDispatch()

    const { products } = useSelector((state: any) => state.products)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await getAll()
                dispatch({ type: "admin/fetch_product", payload: data })

            } catch (error) {

            }
        }
        getProduct()
    }, [])

    const removeProduct=async(id:any)=>{
        try {
           const {data} =await remove(id)
            dispatch({ type: "admin/delete_product", payload: data })
        } catch (error) {
            
        }
    }
    console.log(products);

    return (

        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Action
                        </th>

                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-center">
                    {products.map((product: any) => {
                        return <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {product?.name}
                            </td>
                            <div className=''>
                                <Link to={`/edit/${product.id}`}><button className='bg-green-500 text-white p-[10px]'>Edit</button></Link>
                                <button className='bg-red-500 text-white p-[10px]' onClick={()=>removeProduct(product.id)}>Delete</button>
                            </div>
                        </tr>

                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Dashboard