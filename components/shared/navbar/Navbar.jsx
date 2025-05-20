'use client'

import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import MobileBottomNav from "./MobileBottomNav";

import logo from "@/assets/logop.png"
import { Heart } from "lucide-react";
import DesktopSearch from "./DesktopSearch";
import Cart from "./Cart";
import Categories from "./Categories";
import { useAuth } from "@/components/providers/AuthProvider";
import getImageUrl from "@/utils/getImageUrl";



const Navbar = ({ settings, categories }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { authData } = useAuth();


    return (
        <>
            <nav className="border-b border-border fixed w-full  z-[99] top-0 shadow bg-white">
                <div className="wrapper">
                    <div className="hidden lg:flex py-2 justify-end">
                        {
                            authData?.user?.email ? <Link href='/my-account' className="text-sm text-text-muted-100">Hello, {authData?.user?.name}</Link> : <button className="text-sm text-text-muted-100">Login / Register</button>
                        }
                    </div>

                    <div className="py-6 flex justify-between items-center gap-6">
                        <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} logo={logo} categories={categories} />
                        <Link href='/' className="block h-6 md:h-8 xl:h-10">
                            <Image
                                src={getImageUrl(settings?.logo)}
                                width={80}
                                height={200}
                                alt="logo"
                                className="h-full w-auto"
                            />
                        </Link>
                        <DesktopSearch />
                        <div className="hidden lg:flex gap-4 items-center ">
                            {
                                authData?.user?.email ? <Link href='/my-account' className="text-[13px] font-bold hover:text-text-muted-50">MY ACCOUNT</Link> : <Link href='/login' className="text-[13px] font-bold hover:text-text-muted-50">LOGIN / REGISTER</Link>
                            }
                            
                            <Link href='/wishlist' className="-mt-1 hover:text-text-muted-50 relative">
                                <Heart strokeWidth={1.5} size={24} />
                                <span className="absolute -top-1 -right-1/3 rounded-full flex justify-center items-center w-4 h-4 text-xs  bg-primary  text-white">0</span>
                            </Link>
                        </div>

                        <Cart />
                    </div>
                    <div className='w-full '>
                        <div className='w-full h-full flex items-center relative border-t'>
                            <Categories categories={categories} />
                            
                            {/* <NavCart /> */}
                        </div>
                    </div>

                </div>
            </nav>

            <MobileBottomNav />
        </>
    );
};

export default Navbar;