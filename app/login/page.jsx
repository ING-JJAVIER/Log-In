import Link from "next/link";

function Login() {
    return (
        <div className='flex justify-center align-middle content-center py-64'>
            <div className='flex flex-col justify-center border rounded-2xl shadow h-96 w-80 gap-4 px-10 bg-slate-300'>
                <h2 className='text-center text-black font-bold'>Login</h2>
                <input className='h-8 border rounded-md shadow px-4 text-xs' type="email" placeholder='Ingrese email' />
                <input className='h-8 border rounded-md shadow px-4 text-xs' type="password" placeholder='Ingrese password' />
                <Link href="/dashboard">
                    <button type="button" className='h-12 w-full border rounded-md shadow text-blue-700 bg-slate-400'>Ingresar</button>
                </Link>

            </div>
        </div>
    )
}

export default Login
