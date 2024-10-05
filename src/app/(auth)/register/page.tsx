'use client'
import { CxInput } from '@/components/shared/CxInput'
import {  FormikProvider, useFormik } from 'formik'
import React from 'react'

function Register() {
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
    })
    return (
        <div className="card">
            <div className="card-body p-4">
                <div className="p-3">
                    <FormikProvider value={formik}>  
                        <form onSubmit={formik.handleSubmit}>
                             <CxInput
                                type="email"
                                className="form-control form-control-lg bg-light-subtle border-light"
                                placeholder="Enter Email"
                                label="Email"
                                name="email"
                                icon="ri-mail-line"
                            />
                            <CxInput
                                className="form-control form-control-lg bg-light-subtle border-light"
                                placeholder="Enter Username"
                                label="Username"
                                name="username"
                                icon="ri-user-2-line"
                            />
                            <CxInput
                                placeholder="Enter Password"
                                label="Password"
                                name="password"
                                icon="ri-lock-2-line"
                            />  

                            <div className="d-grid">
                                <button
                                    className="btn btn-primary waves-effect waves-light"
                                    type="submit"
                                >
                                    Sign up
                                </button>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-muted mb-0">
                                    By registering you agree  {' '}
                                    <a href="#" className="text-primary">
                                        Terms of Use
                                    </a>
                                </p>
                            </div>
                        </form>
                    </FormikProvider> 
                </div>
            </div>
        </div>
    )
}

export default Register
