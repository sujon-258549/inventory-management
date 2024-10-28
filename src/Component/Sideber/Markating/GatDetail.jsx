import { useLoaderData } from "react-router-dom"



const GatDetail = () => {
    const { _id, email, number, name ,message,date} = useLoaderData()
  
    console.log( _id, email, number, name)
    return (
        <div>
            <div className="w-[90%] mx-auto md:w-[80%] min-h-80   duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
                <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
                <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
                <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
                <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
                <div className="z-10 flex flex-col justify-evenly space-y-3 w-full h-full">
                <span className="text-md text-neutral-400">Date: {date.slice(0,10)}</span>
                    <span className="text-2xl font-bold">Name: {name}</span>
                    <span className="text-lg">Email: {email}</span>
                    <span className="text-lg">Number: {number}</span>
                    <span className="text-md text-neutral-400">Details: {message}</span>

                </div>
            </div>
        </div>
    )
}

export default GatDetail
