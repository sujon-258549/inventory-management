import { FaFileMedical, FaPhone, FaUserEdit } from "react-icons/fa"
import { MdOutlineDateRange, MdOutlineEmail } from "react-icons/md"
import { useLoaderData } from "react-router-dom"


const Detail = () => {
    const { date, message, subject, number, email, name } = useLoaderData()
    return (
        <div className="pb-10" >
           
            <div className="bg-gray-700 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4" style={{boxShadow:'1px 1px 1px 5px #212121'}}>
                <p className="text-white flex gap-3"> <MdOutlineDateRange className="text-2xl" /> {date.slice(0,10)}</p>
                <div className="flex items-center">
                    <h3 className="text-2xl font-semibold text-white flex-1">{subject}</h3>
                    <div className="bg-gray-900 w-12 h-12 p-1 flex items-center justify-center rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 24 24">
                            <g className="fill-yellow-400">
                                <circle cx={12} cy={12} r={5} />
                                <path
                                    fill="#f2b108"
                                    d="M21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zM5.64 19.36a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zM12 5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm0 17a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zM6.34 7.34a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zm12.02 12.02a1 1 0 0 1-.7-.29l-.66-.71A1 1 0 0 1 18.36 17l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z"
                                    data-original="#f2b108"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
                <p className="text-sm text-gray-200 my-8 leading-relaxed">
                    {message}
                </p>
                <div className="flex flex-wrap justify-between items-center">
                    <div>

                    <h3 className="text-lg text-white flex-1 flex gap-2 md:mt-2"><FaUserEdit className="text-2xl"/> {name}</h3>
                    </div>
                    <div>
                        <h3 className="text-lg text-white flex-1 flex gap-2"><MdOutlineEmail className="text-2xl "/> {number}</h3>
                        <h3 className="text-lg text-white flex-1 flex gap-2 md:mt-2"><FaPhone className="text-2xl rotate-[100deg]"/> {number}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail
