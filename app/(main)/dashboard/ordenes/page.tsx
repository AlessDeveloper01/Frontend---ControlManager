import PageBreadcrumb from '@/src/components/Global/PageBreadcrumb'
import TableOrders from '@/src/components/orders/TableOrders'
import Link from 'next/link'
import React from 'react'

const OrdenesPage = () => {
  return (
    <>
      <PageBreadcrumb title="Ordenes" subName="Dashboard" />
      <div className='flex justify-between flex-col md:flex-row gap-4'>
        <Link
          href='/menu/postres'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase'
        >
          Crear orden
        </Link>
        <Link
          href='/dashboard/ventas'
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded uppercase'
        >
          Ordenes Finalizadas
        </Link>
      </div>

      <TableOrders />
    </>
  )
}

export default OrdenesPage
