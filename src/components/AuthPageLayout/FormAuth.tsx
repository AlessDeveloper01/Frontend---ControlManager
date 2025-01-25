import React from 'react'
import FormInput from '../FormInput'
import { useAuth } from '@/src/store/auth/store'
import axios from 'axios'
import { useGlobal } from '@/src/store/global/store'
import { ErrorSchema } from '@/src/Objects'
import { redirect } from 'next/navigation'

interface ILoginFunction {
  email: string;
  password: string;
  setErrors: (errors: []) => void
}

async function login({email, password, setErrors}: ILoginFunction) {

  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`
  try {
    const response = await axios.post(url, {
      email, password
    });
    return response.data
  } catch (error: any) {
    setErrors(error.response.data.errors)
  }
}

const FormAuth = () => {
  const setErrors = useGlobal(state => state.setErrors);
  const errors = useGlobal(state => state.errors);
  const setSucess = useGlobal(state => state.setSucess as (success: { msg: string }[]) => void);
  const sucess = useGlobal(state => state.sucess);

  const email = useAuth(state => state.email)
  const password = useAuth(state => state.password)
  const setEmail = useAuth(state => state.setEmail)
  const setPassword = useAuth(state => state.setPassword)

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await login({email, password, setErrors});
    if (!data) {
      setTimeout(() => {
        setErrors([]);
      }, 1000);
      return;
    }
    localStorage.setItem('token', `Bearer ${data.token}`);
    setErrors([]);
    setSucess([{ msg: 'Iniciando tu sesion' }]);
    setEmail('');
    setPassword('');
    setTimeout(() => {
      setSucess([]);
      redirect('/dashboard');
    }, 2000);
  }

  const parsedErrors = ErrorSchema.safeParse(errors);

  return (
    <form className="space-y-6" onSubmit={submit}>
      {
        parsedErrors.success && parsedErrors.data && parsedErrors.data.length > 0 && (
          <div className="mb-6">
							{parsedErrors.data.map((error, index) => (
								<div key={index} className={`bg-danger/10 text-danger border border-danger/20 text-sm rounded-md py-3 px-5 mb-2`}>
								<div className="flex items-center gap-1.5">
									<i className={`ri-close-circle-line text-base`}></i>
									<p className="text-sm">
										Error: <span className="font-bold text-xs">{error.msg}</span>
									</p>
								</div>
							</div>
							))}
          </div>
        )
      }

      {
        sucess && sucess.length > 0 && (
          <div className="bg-success/10 text-success border border-success/20 text-sm rounded-md py-3 px-5 mb-2">
            <div className="flex items-center gap-1.5">
              <i className={`ri-check-line text-base`}></i>
              <p className="text-sm">
                Exito: <span className="font-bold text-xs">{sucess?.length ? sucess[0].msg : ''}</span>
              </p>
            </div>
          </div>
        )
      }

        <FormInput label="Correo Electrónico" type="email" name="username" className="form-input" placeholder="Ingresalo aca!" containerClass="mb-6 space-y-2" labelClassName="font-semibold text-gray-500" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <FormInput label="Contraseña" type="text" name="password" placeholder="Ingresa aca!" className="form-input rounded-e-none" containerClass="mb-6 space-y-2" labelClassName="font-semibold text-gray-500" labelContainerClassName="flex justify-between items-center mb-2" value={password} 
        onChange={(e) => setPassword(e.target.value)}/>

        <div className="text-center my-10">
            <button className="btn bg-primary text-white" type="submit">
                Iniciar Sesión
            </button>
        </div>
    </form>
  )
}

export default FormAuth