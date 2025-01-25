/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import logo from "@/src/assets/images/logo.png";

import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
    children,
    pageImage,
    title,
    helpText,
    starterClass,
}: Readonly<{
    children: React.ReactNode;
    pageImage?: string;
    title: string;
    helpText?: string;
    bottomLinks?: any;
    isCombineForm?: boolean;
    hasThirdPartyLogin?: boolean;
    starterClass?: boolean;
}>) {
    return (
        <div className="flex items-stretch h-screen bg-cover bg-center relative bg-no-repeat">
            <div className="lg:max-w-[500px] z-10 p-12 relative w-full h-full min-h-[1165px] border-t-[3px] border-primary bg-white">
                <div className="flex flex-col h-full gap-4">
                    <div className="mb-8 text-center lg:text-start">
                        <Link href="/" className="flex justify-center">
                            <Image src={logo} alt="logo" className="h-20 block" />
                        </Link>
                    </div>
                    <div className={`my-4 ${starterClass ? "text-center" : ""}`}>
                        {pageImage && (
                            <Image
                                src={pageImage}
                                alt=""
                                className="rounded-full shadow h-16 mx-auto mt-10"
                            />
                        )}

                        <h4
                            className={`text-lg font-semibold text-light/80 mb-2 ${
                                pageImage ? "mt-6" : ""
                            }`}>
                            {title}
                        </h4>
                        <p className="text-gray-400 mb-9">{helpText}</p>

                        {children}
                    </div>

                    <footer className="text-center justify-center h-14 -mb-12">
                        <p className="text-gray-400">
                            Si no tienes cuenta solicitala a tu administrador
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
