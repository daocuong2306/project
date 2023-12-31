import { addCart } from '@/actions/cart'
import { getProduct } from '@/actions/product'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useEffect, useState } from "react"
import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup';

const schema = yup.object().shape({
    inputField: yup.string().required('This field is required'),
});
const Product = () => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((state: any) => state.products);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { control, handleSubmit, watch } = useForm();
    const { min }: any = watch(['min']);
    const { max }: any = watch(['max']);

    // Hàm xử lý khi người dùng gửi form
    const onSubmit = (data: any) => {
        let d = 0;
        if (Number(data.min) > Number(data.max)) {
            d = data.min;
            data.min = data.max;
            data.max = d;
        }
        if (data.min > data.max) {
            setFilteredProducts(products)
        } else {
            const filterProduct = products.filter((item: any) => item?.price >= data.min && item?.price <= data.max)
            console.log(filterProduct);
            setFilteredProducts(filterProduct);
        }
    };
    console.log(filteredProducts);

    useEffect(() => {
        dispatch(getProduct());
    }, [])

    const onHandleSubmit = (id: any) => {
        dispatch(addCart(id));
    }

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Product Collection
                    </h2>
                    <p className="mt-4 max-w-md text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                        natus?
                    </p>
                </header>
                <div className="mt-8 block lg:hidden">
                    <button
                        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                    >
                        <span className="text-sm font-medium"> Filters & Sorting </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-4 w-4 rtl:rotate-180"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                    <div className="hidden space-y-4 lg:block">
                        <div>
                            <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">
                                Sort By
                            </label>

                            <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
                                <option>Sort By</option>
                                <option value="Title, DESC">Title, DESC</option>
                                <option value="Title, ASC">Title, ASC</option>
                                <option value="Price, DESC">Price, DESC</option>
                                <option value="Price, ASC">Price, ASC</option>
                            </select>
                        </div>

                        <div>
                            <p className="block text-xs font-medium text-gray-700">Filters</p>

                            <div className="mt-1 space-y-2">
                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Availability </span>

                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div className="border-t border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700"> 0 Selected </span>

                                            <button
                                                type="button"
                                                className="text-sm text-gray-900 underline underline-offset-4"
                                            >
                                                Reset
                                            </button>
                                        </header>

                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label
                                                    htmlFor="FilterInStock"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterInStock"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        In Stock (5+)
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterPreOrder"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPreOrder"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Pre Order (3+)
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterOutOfStock"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOutOfStock"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Out of Stock (10+)
                                                    </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>

                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Price </span>

                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div className="border-t border-gray-200 bg-white">

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className='flex'>
                                                <div className='w-[40%]'>
                                                    <Controller
                                                        name="min"
                                                        control={control}
                                                        defaultValue="0"
                                                        render={({ field }) => (
                                                            <div>
                                                                <input
                                                                    className='w-full'
                                                                    placeholder='Min price'
                                                                    type="text"
                                                                    {...field}
                                                                />
                                                            </div>
                                                        )}
                                                    />
                                                </div>
                                                <div className='w-[20%]'></div>
                                                <div className='w-[40%]'>
                                                    <Controller
                                                        name="max"
                                                        control={control}
                                                        defaultValue="0"
                                                        render={({ field }) => (
                                                            <div>
                                                                <input
                                                                    className='w-full'
                                                                    placeholder='Max price'
                                                                    type="text"
                                                                    {...field}
                                                                />
                                                            </div>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                            <button type="submit" className='p-[5px] bg-green-500'>Filter</button>

                                        </form>
                                    </div>
                                </details>

                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Colors </span>

                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div className="border-t border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700"> 0 Selected </span>

                                            <button
                                                type="button"
                                                className="text-sm text-gray-900 underline underline-offset-4"
                                            >
                                                Reset
                                            </button>
                                        </header>

                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label
                                                    htmlFor="FilterRed"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterRed"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Red
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterBlue"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterBlue"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Blue
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterGreen"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterGreen"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Green
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterOrange"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOrange"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Orange
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterPurple"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPurple"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Purple
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterTeal"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterTeal"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Teal
                                                    </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProducts.length > 0 // Use filteredProducts here instead of products
                                ? filteredProducts.map((product: any) => {
                                    return <li key={product.id}>
                                        <Link to={`/details/${product.slug}`} className="group block overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt=""
                                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                            />
                                            <div className="relative bg-white pt-3">
                                                <h3
                                                    className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                                >
                                                    {product.name}
                                                </h3>

                                                <p className="mt-2">
                                                    <span className="sr-only"> Regular Price </span>

                                                    <span className="tracking-wider text-gray-900"> {product.price} $ </span>
                                                </p>

                                            </div>

                                        </Link>
                                        <a
                                            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                        >
                                            <span
                                                className="absolute inset-0 border border-red-600 group-active:border-red-500"
                                            ></span>
                                            <span
                                                className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                                onClick={() => onHandleSubmit(product.id)}
                                            >
                                                Add to cart
                                            </span>
                                        </a>
                                    </li>
                                })
                                : products?.map((product: any) => {
                                    return <li key={product.id}>
                                        <Link to={`/details/${product.slug}`} className="group block overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt=""
                                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                            />
                                            <div className="relative bg-white pt-3">
                                                <h3
                                                    className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                                >
                                                    {product.name}
                                                </h3>

                                                <p className="mt-2">
                                                    <span className="sr-only"> Regular Price </span>

                                                    <span className="tracking-wider text-gray-900"> {product.price} $ </span>
                                                </p>

                                            </div>
                                        </Link>
                                        <a
                                            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                        >
                                            <span
                                                className="absolute inset-0 border border-red-600 group-active:border-red-500"
                                            ></span>
                                            <span
                                                className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                                onClick={() => onHandleSubmit(product.id)}
                                            >
                                                Add to cart
                                            </span>
                                        </a>
                                    </li>
                                })}


                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product