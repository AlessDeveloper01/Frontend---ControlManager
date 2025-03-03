'use client';

{/* CAJA, PERSONAL, PRODUCTOS, CATEGORIAS */}

import ModalCloseCaja from '@/src/components/caja/ModalClose'
import PageBreadcrumb from '@/src/components/Global/PageBreadcrumb'
import { useGlobal } from '@/src/store/global/store'
import dynamic from 'next/dynamic'

const CajaPage = () => {
  
  const modal = useGlobal(state => state.modal)
  const setModal = useGlobal(state => state.setModal);
  
    const Table = dynamic(() => import('@/src/components/box/TableBox'), { ssr: false })

  return (
    <>
      <PageBreadcrumb title="Caja" subName='Dashboard' />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase mb-5" onClick={() => setModal({ status: true, element: <ModalCloseCaja />})}>
        Cerrar caja
    </button>

    {
        modal.status && modal.element
    }

    <Table />
    </>
  )
}

export default CajaPage
