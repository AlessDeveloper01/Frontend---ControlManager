/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { Suspense, useEffect } from "react";
import Preloader from "@/src/components/Global/Preloader";
import React from "react";
import { validationToken } from "@/src/helpers";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/store/auth/store";

const Topbar = React.lazy(() => import('@/src/layouts/TopBar'))
const LeftSideBar = React.lazy(() => import('@/src/layouts/LeftSideBar'))
const Footer = React.lazy(() => import('@/src/layouts/Footer'))

const loading = () => <div />

const validationAccountPersonal = async (router: ReturnType<typeof useRouter>, setUser: (data: any) => void) => {
    const data = await validationToken();
    if(data.errors && data.errors.length > 0) {
        router.push('/auth/login');
    }

    setUser(data);
}

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
    }) {
    const data = useAuth((state) => state.user);
    const setUser = useAuth((state) => state.setUser);
    const router = useRouter();
    useEffect(() => {
        validationAccountPersonal(router, setUser);

        const handlePopState = () => {
            validationAccountPersonal(router, setUser);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [router, setUser]);

    return (
    <>
            <Suspense fallback={loading()}>
                <div className="flex wrapper">
                    {
                        <Suspense fallback={loading()}>
                            <LeftSideBar hideUserProfile={true} isCondensed={true} isLight={false} data={data} />
                        </Suspense>
                    }

                    <div className="page-content">
                        <Suspense fallback={loading()}>
                            <Topbar />
                        </Suspense>

                        <main className="p-6 overflow-x-hidden">
                            <Suspense fallback={<Preloader />}>{children}</Suspense>
                        </main>

                        <Footer />
                    </div>
                </div>
            </Suspense>
        </>
  );
}