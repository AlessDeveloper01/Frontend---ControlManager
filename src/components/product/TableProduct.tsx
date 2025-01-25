'use client'

import { getAllProducts } from "@/src/api/product"
import { FormatAmount, FormatDate } from "@/src/helpers/format"
import { FormatBadge } from "@/src/helpers/format-element"
import { useProduct } from "@/src/store/product/store"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const TableProduct = () => {
    const navigation = useRouter()
    const products = useProduct(state => state.products)
    const setProducts = useProduct(state => state.setProducts)
    const page = useProduct(state => state.page)
    const setPage = useProduct(state => state.setPage)
    
    useEffect(() => {
        const getProducts = async () => {
            const response = await getAllProducts("", page, "")
            const { products, totalPages } = response
            setProducts({products, totalPages})
        }
        getProducts()
    }, [page])
    
  return (
    <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full border border-gray-300 dark:border-gray-700">
                                <thead className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-sm font-black text-gray-900 dark:text-gray-100 px-6 py-4 text-left border border-gray-300 dark:border-gray-700 uppercase">
                                            Identificador
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-black text-gray-900 dark:text-gray-100 px-6 py-4 text-left border border-gray-300 dark:border-gray-700 uppercase">
                                            Nombre
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-black text-gray-900 dark:text-gray-100 px-6 py-4 text-left border border-gray-300 dark:border-gray-700 uppercase">
                                            Categoria
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-black text-gray-900 dark:text-gray-100 px-6 py-4 text-left border border-gray-300 dark:border-gray-700 uppercase">
                                            Precio
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-black text-gray-900 dark:text-gray-100 px-6 py-4 text-left border border-gray-300 dark:border-gray-700 uppercase">
                                            N. de ingredientes
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-black text-gray-900 dark:text-gray-100 px-6 py-4 text-left border border-gray-300 dark:border-gray-700 uppercase">
                                            Estado
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-black text-gray-900 dark:text-gray-100 px-6 py-4 text-left border border-gray-300 dark:border-gray-700 uppercase">
                                            Actualización
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-black text-gray-900 dark:text-gray-100 px-6 py-4 text-left border border-gray-300 dark:border-gray-700 uppercase">
                                            Creación
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-black text-gray-900 dark:text-gray-100 px-6 py-4 text-left border border-gray-300 dark:border-gray-700 uppercase">
                                            Visualización
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.products.length > 0 && products.products.map((product, index) => (
                                        <tr key={product.id}
                                        className={`${
                                            index % 2 === 0
                                                ? "bg-white dark:bg-gray-800"
                                                : "bg-gray-100 dark:bg-gray-900"
                                        } border-b dark:border-gray-700`}>
                                            <td
                                                className="text-sm text-gray-900 dark:text-gray-100 px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-700 font-bold">
                                                {product.id}
                                            </td>
                                            <td
                                                className="text-sm text-gray-900 dark:text-gray-100 px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-700">
                                                {product.name}
                                            </td>
                                            <td
                                                className="text-sm text-gray-900 dark:text-gray-100 px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-700">
                                                {product.category.name}
                                            </td>
                                            <td
                                                className="text-sm text-gray-900 dark:text-gray-100 px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-700">
                                                {FormatAmount(product.price)}
                                            </td>
                                            <td
                                                className="text-sm text-gray-900 dark:text-gray-100 px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-700">
                                                {product.ingredients.length}
                                            </td>
                                            <td
                                                className="text-sm text-gray-900 dark:text-gray-100 px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-700">
                                                {FormatBadge(product.status)}
                                            </td>
                                            <td
                                                className="text-sm text-gray-900 dark:text-gray-100 px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-700">
                                                {FormatDate(product.updatedAt)}
                                            </td>
                                            <td
                                                className="text-sm text-gray-900 dark:text-gray-100 px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-700">
                                                {FormatDate(product.createdAt)}
                                            </td>
                                            <td
                                                className="text-sm text-gray-900 dark:text-gray-100 px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-700">
                                                <button
                                                    className="bg-primary text-white px-2 py-1 rounded-md w-full"
                                                    onClick={() => navigation.push(`/dashboard/productos/${product.id}`)}>
                                                    Ver
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: products.totalPages || 0 }, (_, i) => (
                    <button key={i+1} onClick={() => setPage(i+1)}
                        className={`btn bg-primary text-white ${page === i+1 ? 'bg-opacity-50' : ''}`}
                    >{i+1}</button>
                ))}
            </div>
    </>
  )
}

export default TableProduct
