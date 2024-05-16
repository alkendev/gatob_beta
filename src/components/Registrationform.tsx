'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Link from 'next/link'

interface FormInputs {
  firstName: string
  lastName: string
  email: string
  password: string
}

const RegistrationForm: React.FC = () => {
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Регистрация</h2>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-8">
            <div>
              <label
                htmlFor="firstName"
                className="sr-only"
              >
                First Name
              </label>
              <input
                {...register('firstName', { required: true })}
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Имя"
              />
              {errors.firstName && <span className="text-red-500">First name is required</span>}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="sr-only"
              >
                Last Name
              </label>
              <input
                {...register('lastName', { required: true })}
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Фамилия"
              />
              {errors.lastName && <span className="text-red-500">Last name is required</span>}
            </div>
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
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Пароль"
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="w-1/2 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Зарегистрироваться
            </button>
            <Link
              href="/login"
              className="w-1/2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
            >
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
