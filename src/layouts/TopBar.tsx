'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { getMenuItems } from '../helpers/menu';
import { validationToken } from '../helpers';
import { UserSchema } from '../Objects';
import { useAuth } from '../store/auth/store';
import { redirect } from 'next/navigation';
import { useGlobal } from '../store/global/store';


function Menu({ onLinkClick }: { onLinkClick: () => void }) {
    const items = getMenuItems();
    return (
        <nav className="bg-white shadow-md p-4 md:p-8 min-h-screen list-none">
            {items.map((item, index) =>
                item.children ? (
                    <li key={index} className="flex items-end">
                        <ul className="list-none">
                            {item.children.map((child, index) => (
                                <li key={index} className="gap-3.5 text-gray-700 hover:text-primary-500 text-2xl sm:text-lg">
                                    {child.url && linkTemplate(child.url, child.icon!, child.label, onLinkClick)}
                                </li>
                            ))}
                        </ul>
                    </li>
                ) :
                item.isTitle ? (
                    <li key={index} className="font-black text-gray-700 uppercase border-b my-4 border-gray-300 sm:text-lg">
                        <p className="text-xl my-4">{item.label}</p>
                    </li>
                ) : (
                    <li key={index} className="flex items-center gap-3.5 text-black hover:text-primary-500 text-2xl sm:text-lg">
                        {item.url && linkTemplate(item.url, item.icon!, item.label, onLinkClick)}
                    </li>
                )
            )}
        </nav>
    );
}

const linkTemplate = (url: string, icon: string, label: string, onClick: () => void) => {
    return (
        <Link href={url} className="flex items-center my-2" onClick={onClick}>
            <i className={icon}></i>
            <span className="ml-2 text-sm font-black text-gray-600 uppercase">{label}</span>
        </Link>
    );
}

async function getAccount() {
    const account = await validationToken();
    const parsedUser = UserSchema.parse(account.user);
    return parsedUser;
}

function leaveAccount() {
    localStorage.removeItem('token');
    redirect('/auth/login');
}

const TopBar = () => {
    const user = useAuth(state => state.user);
    const setUser = useAuth(state => state.setUser);
    const [toggle, setToggle] = useState(false);
    const theme = useGlobal(state => state.theme);
    const setTheme = useGlobal(state => state.setTheme);
    
    const setterMenu = () => {
        setToggle(!toggle);
        if (!toggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        getAccount().then((user) => {
            setUser(user);
        });
    }, []);

  return (
    <header className="app-header flex items-center relative px-4 gap-3.5 justify-between">
    <div
        className={`absolute left-0 top-[70px] flex items-center gap-3.5 lg:hidden z-50 transition-transform duration-300 ${
            toggle ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
    >
        <Menu onLinkClick={setterMenu} />
    </div>
    
    <button id="button-toggle-menu" className="nav-link p-2 lg:hidden" onClick={setterMenu}>
        <span className="sr-only">Menu Toggle Button</span>
        <span className="flex items-center justify-center">
            <i className="ri-menu-2-fill text-2xl"></i>
        </span>
    </button>
    
    <div className="flex">
        <div className="flex flex-wrap items-end gap-3">
            <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                    <div className="ms-3">
                        <h3 className="text-xs lg:text-md font-semibold text-gray-800 dark:text-white">Usuario: <span className="text-primary font-bold">{user.name}</span></h3>
                        <p className="text-xs lg:text-md font-semibold text-gray-800 dark:text-white">Correo: <span className="text-primary font-bold">{user.email}</span></p>
                        <p className="text-xs lg:text-md font-semibold text-gray-800 dark:text-white">Rol: <span className="text-primary font-bold">{user.permission}</span></p>
                    </div>
                    <div className="flex ml-5">
                        <button className="px-1 py-0 lg:px-2 lg:py-1 bg-danger text-white rounded-md hover:bg-danger/60 transition-all duration-300 flex gap-2 items-center" onClick={leaveAccount}>
                            <i className="ri-user-received-2-fill text-2xl"></i>{' '} Salir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="md:flex hidden ms-auto">
        <button
            className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-md dark:bg-gray-800"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {
                theme === 'dark' ? (
                    <i className="ri-sun-line text-2xl text-yellow-500"></i>
                ) : (
                    <i className="ri-moon-line text-2xl text-gray-800"></i>
                )
            }
        </button>
    </div>
</header>
  )
}

export default TopBar
