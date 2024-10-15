import Link from "next/link";

export default function Aside() {
    return (
        <aside className="h-screen w-1/4 bg-gradient-to-r from-cyan-900 to-red-200">
            <h2 className="text-white text-2xl flex justify-center font-bold pt-6">Menu</h2>
            <ul className="text-white text-2xl">
                <Link href="/">
                    <li className="text-white text-xl ms-8 hover:bg-gray-400 rounded-xl w-32 p-2">Home</li>
                </Link>
                <Link href="/users">
                    <li className="text-white text-xl ms-8 hover:bg-gray-400 p-2 rounded-xl w-32">Users</li>
                </Link>
                <Link href="/login">
                    <li className="text-white text-sm ms-8 mt-96 hover:bg-gray-400 p-2 rounded-xl w-32">Cerrar Sesion</li>
                </Link>
            </ul>
        </aside>
    );
}