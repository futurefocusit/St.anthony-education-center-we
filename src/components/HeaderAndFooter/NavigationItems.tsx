"use client";
import React, { useState } from 'react'
import { NavigationItemsRoutes } from './constant'
import Link from 'next/link'

import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { usePathname } from 'next/navigation';

const NavigationItems = () => {
    const [showMenuItems, setShowMenuItems] = useState(false);

    const pathname = usePathname();
    return (
        <>
            <div className='flex lg:hidden'>
                <button className='text-3xl' onClick={() => setShowMenuItems((prev) => !prev)}><IoMenu /></button>
            </div>
            <div className='hidden lg:flex items-center gap-5 font-bold border-r-[3px] border-blue-500 pr-5'>
                {NavigationItemsRoutes.map((navigation) => {
                    const isActive = pathname === (navigation.path) || pathname.startsWith(`${navigation.path}/`);
                    return (
                        <Link href={navigation.path} key={navigation.path} className={isActive ? "underline underline-offset-8" : ""}>
                            <p>{navigation.label}</p>
                        </Link>
                    )
                })}
                <button className='bg-blue-600 text-white px-2 py-2 cursor-pointer'>Report Incident</button>
            </div>
            {showMenuItems && (
                <div className={'flex lg:hidden absolute bg-black/15 left-0 h-full w-full top-0 transition-all duration-75 ease-linear popup'}>
                    <div className={'bg-white w-fit px-[50px] py-20 h-screen overflow-y-auto flex flex-col gap-8'}>
                        <button className='text-3xl ml-[10rem]' onClick={() => setShowMenuItems((prev) => !prev)}><MdClose /></button>
                        {NavigationItemsRoutes.map((navigation) => {
                            const isActive = pathname === (navigation.path) || pathname.startsWith(`${navigation.path}/`);
                            return (
                                <Link href={navigation.path} key={navigation.path} className={isActive ? "underline underline-offset-8" : ""}>
                                    <p>{navigation.label}</p>
                                </Link>
                            )
                        })}
                        <button className='bg-blue-600 text-white px-2 py-2 cursor-pointer'>Report Incident</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default NavigationItems;