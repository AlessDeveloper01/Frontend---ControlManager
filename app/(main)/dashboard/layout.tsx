'use client'
import { Suspense, useEffect } from "react";
import Preloader from "@/src/components/Global/Preloader";
import React from "react";
import { validationToken } from "@/src/helpers";
import { redirect } from "next/navigation";

const Topbar = React.lazy(() => import('@/src/layouts/TopBar'))
const LeftSideBar = React.lazy(() => import('@/src/layouts/LeftSideBar'))
const Footer = React.lazy(() => import('@/src/layouts/Footer'))

const loading = () => <div />

const validationAccountPersonal = async () => {
	const data = await validationToken();
	if(data.errors && data.errors.length > 0) {
		redirect('/auth/login');
	}
}

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
	useEffect(() => {
		validationAccountPersonal();
	}, []);
  return (
    <>
            <Suspense fallback={loading()}>
				<div className="flex wrapper">
					{
						<Suspense fallback={loading()}>
							<LeftSideBar hideUserProfile={true} isCondensed={true} isLight={false} />
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