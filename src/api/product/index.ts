import axios, { AxiosError } from "axios";
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

export const createProduct = async (name: string, price: number, categoryId: number, ingredients: { id: number }[]) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/create`, {
            name,
            price,
            categoryId,
            ingredients
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })

        return response.data;
    } catch (error) {
        if(error instanceof AxiosError) {
            return error.response!.data;
        } else {
            console.error(error);
        }
    }
}

export const getAllProducts = async (status: string = 'false', page: number = 1, name: string = '') => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/list?status=${status}&page=${page}&name=${name}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })

        return response.data;
    } catch (error) {
        if(error instanceof AxiosError) {
            return error.response!.data;
        } else {
            console.error(error);
        }
    }
}

export const getProductById = async (id: number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/list/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })

        return response.data;
    } catch (error) {
        if(error instanceof AxiosError) {
            return error.response!.data;
        } else {
            console.error(error);
        }
    }
}

export const deleteProduct = async (id: number) => {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/product/delete/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })

        return response.data;
    } catch (error) {
        if(error instanceof AxiosError) {
            return error.response!.data;
        } else {
            console.error(error);
        }
    }
}

export const updateProduct = async (id: number, name: string, price: number, categoryId: number, ingredients: { id: number }[], status: boolean) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/product/update/${id}`, {
            name,
            price,
            categoryId,
            ingredients,
            active: status
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })

        return response.data;
    } catch (error) {
        if(error instanceof AxiosError) {
            return error.response!.data;
        } else {
            console.error(error);
        }
    }
}

export const getProductsFindByName = async (name: string) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/category//get-products/${name}`
        );

        return response.data;
    } catch (error) {
        if(error instanceof AxiosError) {
            return error.response!.data;
        } else {
            console.error(error);
        }
    }
 }