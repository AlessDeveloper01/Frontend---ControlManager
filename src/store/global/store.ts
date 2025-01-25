
import { JSX } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type GlobalStore = {
    errors: [];
    setErrors: (errors: []) => void;
    sucess: [];
    setSucess: (sucess: []) => void;
    modal: ({
        element: JSX.Element | null;
        status: boolean;
    });
    setModal: (modal: ({
        element: JSX.Element | null;
        status: boolean;
    })) => void;
    theme: string;
    setTheme: (theme: string) => void;
    toast: ({ type: 'error' | 'success', message: string, status: boolean });
    setToast: (toast: ({ type: 'error' | 'success', message: string, status: boolean })) => void;
}

export const useGlobal = create<GlobalStore>()(devtools((set) => ({
    errors: [] as [],
    sucess: [] as [],
    setErrors: (errors: []) => set({ errors }),
    setSucess: (sucess: []) => set({ sucess }),
    modal: {
        element: null as JSX.Element | null,
        status: false
    },
    setModal: (modal: { element: JSX.Element | null; status: boolean }) => set({ modal }),
    theme: '',
    setTheme: (theme: string) => set({ theme }),
    toast: {
        type: 'error' as 'error' | 'success',
        message: '',
        status: false
    },
    setToast: (toast: { type: 'error' | 'success'; message: string; status: boolean }) => set({ toast })
})));