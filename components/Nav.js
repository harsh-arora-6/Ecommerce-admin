'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"

const ACTIVE = 'bg-white text-blue-900 px-2 py-1 rounded-l-md';
const INACTIVE = 'px-2 py-1 rounded-l-md';

export default function Nav(){
    const pathName = usePathname()

    return <aside className="flex flex-col p-4 gap-2 text-white -mr-4">
            <Link href="/" className={pathName === '/' ? ACTIVE:INACTIVE}>Ecommerce Admin</Link>
            <Link href="/dashboard" className={pathName.startsWith('/dashboard') ? ACTIVE:INACTIVE}>Dashboard</Link>
            <Link href="/products" className={pathName.startsWith('/products') ? ACTIVE:INACTIVE}>Products</Link>
            <button onClick={() => signOut()} className={`${INACTIVE} w-full`}>Sign Out</button>
        </aside>    
}