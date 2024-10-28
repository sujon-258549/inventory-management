import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="min-h-screen">
            <div className="mx-auto flex justify-center">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center mx-auto pb-10 gap-6 max-w-md text-center">
                <p className="text-2xl md:text-3xl ">
                    Sorry, we couldn't find this page.
                </p>
                <Link to={'/'}
                    href="#"
                    className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
                >
                    Back to home
                </Link>
            </div>
        </div>
    )
}

export default Error
