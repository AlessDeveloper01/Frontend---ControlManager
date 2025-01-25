'use client'

import TableBox from '@/src/components/box/TableBox'
import ModalCloseCaja from '@/src/components/caja/ModalClose'
import PageBreadcrumb from '@/src/components/Global/PageBreadcrumb'
import { useGlobal } from '@/src/store/global/store'

const CajaPage = () => {

    const modal = useGlobal(state => state.modal)
    const setModal = useGlobal(state => state.setModal);

  return (
    <>
      <PageBreadcrumb title="Caja" subName='Dashboard' />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase mb-5" onClick={() => setModal({ status: true, element: <ModalCloseCaja />})}>
        Cerrar caja
    </button>

    {
        modal.status && modal.element
    }

    <TableBox />
    </>
  )
}

export default CajaPage
