import LogoBox from "@/src/components/Global/LogoBox";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TableSelectPage = () => {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 mx-auto bg-gray-50 p-6 dark:bg-gray-900 rounded-lg relative overflow-y-auto min-h-screen h-[calc(100vh-20px)] overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-6 flex flex-col rounded-lg shadow-md">
                    <LogoBox />
                    <h1 className="uppercase text-gray-800 dark:text-white font-black text-2xl text-center my-5">
                        Restaurante La Perla
                    </h1>
                    <Image
                        src="/image.png"
                        alt="Restaurante La Perla"
                        width={300}
                        height={200}
                        className="mx-auto"
                    />
                    <p className="text-gray-700 dark:text-gray-300 text-xl my-auto font-medium text-center">
                        Selecciona una mesa para comenzar a tomar tus{" "}
                        <span className="text-indigo-600 font-bold">Ordenes</span>
                    </p>
                </div>
                <div className="overflow-y-auto h-[calc(100vh-30px)] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                  {Array.from({ length: 60 }, (_, i) => (
                    <Link key={i} href={`/menu/mesa/${i + 1}/category/postres`} className="relative bg-indigo-500 dark:bg-indigo-600 border border-indigo-700 text-white text-center px-4 py-6 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <div className="absolute top-2 left-2 w-4 h-4 bg-green-500 rounded-full"></div>
                    Mesa: <span className="text-white">{i + 1}</span>
                    </Link>
                  ))}
                  </div>
                </div>
            </section>
        </>
    );
};

export default TableSelectPage;
