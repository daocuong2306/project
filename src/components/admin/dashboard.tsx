import { getProduct, removeProduct } from '@/actions/product'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useEffect } from "react"
import { Link } from 'react-router-dom'
const Dashboard = () => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((state: any) => state.products);
    useEffect(() => {
        dispatch(getProduct());
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Price
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-center">
                    {products?.map((product: any) => {
                        return <tr key={product.id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {product?.name}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {product?.price}
                            </td>
                            <td> <div className=''>
                                <Link to={`/edit/${product.id}`}><button className='bg-green-500 text-white p-[10px]'>Edit</button></Link>
                                <button className='bg-red-500 text-white p-[10px]' onClick={() => removeProduct(product.id)}>Delete</button>
                            </div></td>
                        </tr>

                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Dashboard