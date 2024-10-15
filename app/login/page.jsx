import Link from "next/link";

export default function Login() {
    return (
        <>
            <div className='flex justify-center align-middle content-center py-64'>

                <div className='flex flex-col justify-center border rounded-2xl shadow h-96 w-80 gap-4 px-10 bg-gradient-to-r from-sky-700 via-cyan-800 to-indigo-800'>

                    <form action="submit" className="w-full">
                        <h2 className='text-center text-black font-bold'>Login</h2>

                        <input id="inUser" className='h-8 border rounded-md shadow px-4 text-xs w-full my-5' type="text" placeholder='User' required />

                        <input className='h-8 border rounded-md shadow px-4 text-xs w-full mb-5' type="password" placeholder='Password' required />

                        <Link href="/dashboard">
                            <button type="submit" className='h-12 w-full border rounded-md shadow text-blue-700 bg-slate-400'>Ingresar</button>
                        </Link>
                    </form>

                </div>

            </div>

        </>
    )
}


