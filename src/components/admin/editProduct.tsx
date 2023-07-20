import { edit, getById } from '@/api/products';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react"
const EditProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    //lấy dữ liệu từ reducer
    const { products } = useSelector((state: any) => state.products)
    //tạo 1 biến navigate 
    const url = useNavigate()
    const { register, handleSubmit } = useForm();


console.log(products);

    useEffect(() => {
        const getProductAPI = async (id: any) => {
            try {
                const { data } = await getById(id)
                dispatch({type:"admin/fetch_productById",payload:data})
            } catch (error) { }
        }

        getProductAPI(id)

    }, [])
    const editProductApi = async (d: any) => {
        try {
            const product = await edit(id, d)
            dispatch({ type: "admin/update_product", payload: product })
        } catch (error) { }
    }
    const onHandleSubmit = (d: any) => {

        editProductApi(d)
        url("/products")
    }
    return (

        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4" onSubmit={handleSubmit(onHandleSubmit)}>
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="name"
                                    defaultValue={products.name}
                                    {...register("name")}
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="name">Price</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="number"
                                    id="price"
                                    defaultValue={products.price}
                                    {...register("price")}
                                />
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"

                                >
                                    Update Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditProduct