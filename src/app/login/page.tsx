'use client'
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormInputs {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Вход</h2>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="sr-only"
              >
                Email address
              </label>
              <input
                {...register('email', { required: true })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Почта"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div>
              <label
                htmlFor="password"
                className="sr-only"
              >
                Password
              </label>
              <input
                {...register('password', { required: true })}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Пароль"
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm">
              <Link
                href="recovery"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Забыли пароль?
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Войти
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
