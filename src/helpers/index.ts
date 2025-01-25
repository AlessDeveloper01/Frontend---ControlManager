import axios from "axios";

export const validationToken = async () => {

    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
            headers: {
                Authorization: token
            }
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};