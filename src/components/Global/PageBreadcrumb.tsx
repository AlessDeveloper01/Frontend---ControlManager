'use client'

import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface PageTitleProps {
	subName?: string
	title: string
	addedChild?: ReactNode
}

const PageBreadcrumb = ({ subName, title, addedChild }: PageTitleProps) => {
	const breadcrumbItems = ['LowSolutions', subName, title]
	return (
		<>
			<Head>
				<title>{title} | LowSolutions Systems</title>
			</Head>
			{subName && (
				<div className="flex justify-between items-center mb-6">
					<div className="flex gap-4">
						<h4 className="text-slate-900 dark:text-slate-200 text-lg font-medium">{title}</h4>
						{addedChild}
					</div>
					<div className="md:flex hidden items-center gap-2.5 font-semibold">
						{(breadcrumbItems || []).map((item, idx) => (
							<div className="flex items-center gap-2" key={idx}>
								{idx != 0 && <i className="ri-arrow-right-s-line text-base text-slate-400 rtl:rotate-180" />}
								<Link href="/dashboard" className="text-sm font-medium text-slate-700 dark:text-slate-400">
									{item}
								</Link>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default PageBreadcrumb
