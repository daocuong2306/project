import { addComments, getComments } from '@/actions/comments';
import { loginUser } from '@/actions/user';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
type Props = {}

const Comments = (props: Props) => {
    const { slug } = useParams();
    const dispatch = useAppDispatch()
    const { comments } = useAppSelector((state: any) => state.comments);
    const { user } = useAppSelector((state: any) => state.user)

    useEffect(() => {
        dispatch(loginUser());
        dispatch(getComments());
    }, [])
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const { content } = data
        const comment = { content, productSlug: slug, userId: 1, date: date }
        dispatch(addComments(comment))

    }
    console.log(comments);
    
    const comment = comments.filter((item: any) => item.productSlug == slug)
    return (
        <section className="bg-white gray:bg-gray-900 py-8 lg:py-16">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 gray:text-white">Discussion (20)</h2>
                </div>


                <label htmlFor="OrderNotes" className="sr-only">Order notes</label>

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="overflow-hidden">
                        <textarea
                            id="OrderNotes"
                            className="w-full resize-none  px-0 align-top sm:text-sm"
                            placeholder="Enter any additional order notes..."
                            {...register("content")}
                        ></textarea>

                        <div className="flex items-center justify-end gap-2 py-3">
                            <button
                                className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                            >
                                Clear
                            </button>

                            <button
                                type="submit"
                                className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </form>
                {comment?.map((item: any) => {
                    const dataUser = user.find((data: any) => data.id == item.userId);
                    return <article className="p-6 mb-6 text-base bg-white rounded-lg gray:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 gray:text-white"><img
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src={dataUser.image}
                                    alt="Michael Gough"></img>
                                    {dataUser.name}
                                </p>
                                <p className="text-sm text-gray-600 gray:text-gray-400"><time dateTime="2022-02-08"
                                    title="February 8th, 2022">{item.date}</time></p>
                            </div>
                            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 gray:bg-gray-900 gray:hover:bg-gray-700 gray:focus:ring-gray-600"
                                type="button">
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                    </path>
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>
                            <div id="dropdownComment1"
                                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow gray:bg-gray-700 gray:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 gray:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 gray:hover:bg-gray-600 gray:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 gray:hover:bg-gray-600 gray:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 gray:hover:bg-gray-600 gray:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="text-gray-500 gray:text-gray-400">{item.content}</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <button type="button"
                                className="flex items-center text-sm text-gray-500 hover:underline gray:text-gray-400">
                                <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                Reply
                            </button>
                        </div>
                    </article>
                })}

            </div>
        </section>
    )
}

export default Comments