/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export const validationToken = async (): Promise<any> => {
  // Verificar que el token exista en localStorage
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  if (!token) {
    return { error: "No token found" }; // Mensaje claro si no hay token
  }

  // Validar que la URL de la API esté configurada
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("API URL is not defined in environment variables");
    return { error: "API URL is not defined" };
  }

  try {
    // Solicitud al servidor para validar el token
    const response = await axios.get(`${apiUrl}/auth/me`, {
      headers: {
        Authorization: `${token}`, // Asegurar el formato estándar del token
      },
    });
    return response.data;
  } catch (error: any) {
    // Manejo robusto de errores
    if (axios.isAxiosError(error)) {
      return {
        error: true,
        message: error.response?.data,
        status: error.response?.status || 500,
      };
    }
    return { error: true, message: "Unexpected error occurred", status: 500 };
  }
};
