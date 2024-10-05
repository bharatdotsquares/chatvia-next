'use client'
import { CxInput } from '@/components/shared/CxInput'
import { FormikProvider, useFormik } from 'formik'
import Link from 'next/link'

function Login() {
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
        <>
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
                                    By registering you agree to the Chatvia{' '}
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
            <div className="mt-5 text-center">
                <p>
                    Don't have an account ?{' '}
                    <Link href="/register" className="fw-medium text-primary">
                        {' '}
                        Signup now{' '}
                    </Link>{' '}
                </p>
            </div>
        </>
    )
}

export default Login
