import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import google from '../../assets/icons/google.svg'
import facebook from '../../assets/icons/Facebook_f_logo_(2019).svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const SignUp = () => {
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)
    const handelSignUp = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        createUser(email, password)
        event.target.reset()
        navigate("/")

    }
    return (
        <div className="hero w-5/6 mx-auto min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row lg:justify-between gap-8">
                <div className="text-center lg:text-left lg:mx-14">
                    <img src={loginImg} alt=''></img>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold mt-8">Signup now!</h1>
                    <form onSubmit={handelSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white bg-orange-500 hover:bg-orange-600 ">Signup</button>
                        </div>
                    </form>
                    <div className='mb-6'>
                        <p>Or Sign Up with</p>
                        <div className='my-6'>
                            <button>
                                <img className='w-10 h-10 mr-4 rounded-full' src={google} alt=''></img>
                            </button>
                            <button>
                                <img className='w-10 h-10 ml-4 rounded-full' src={facebook} alt=''></img>
                            </button>
                        </div>
                        <small className=' font-medium mt-2'>Already have an account? <Link to="/login"><span className='text-orange-500'>Login</span></Link></small>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;