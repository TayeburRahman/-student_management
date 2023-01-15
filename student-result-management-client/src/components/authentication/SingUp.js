import SchoolIcon from '@mui/icons-material/School';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useRegistrationMutation } from '../../features/auth/authApi';

const SignUp = () => { 
    const navigate = useNavigate();
    const [isCheckBox, setCheckBox] =useState(false) 
    const [registration, {data: userData, isError }]= useRegistrationMutation();
    console.log('user',isError)
    console.log('data',userData)
 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const handelCheckBox =()=>{
        if(isCheckBox === false){
            setCheckBox(true)
        }else{
            setCheckBox(false);
        } 
    }

    const onSubmit = async (data) => { 
        if(data?.password !== data?.confirmPassword){

        }else{
          await registration(data);
        }
    };

    if(userData?.status === 'success'){
        alert(`${userData?.user.email} Registration Success. Switching to Login User`)
        navigate('/login');
    }

    return (
        <Fragment>
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-4 col-lg-5">
                            <div className="card">
                                <div
                                    className="card-header  text-center"
                                    style={{ background: '#F8F9FA' }}
                                >
                                    <Link to="/">
                                        <span>
                                            {/* <img
                                                style={{
                                                    width: '200px',
                                                    height: '60px',
                                                }}
                                                src="images/SKU-Market-Logo.svg"
                                                alt="logo"
                                                height="22"
                                            /> */}
                                            <SchoolIcon style={{color:"#475968", fontSize:"40px"}}/>
                                        </span>
                                    </Link>
                                </div>

                                <div className="card-body ">
                                    <div className="text-center w-85     m-auto">
                                        <h4 className="text-dark-50 text-center mt-0 fw-bold">
                                            Author Sign Up
                                        </h4>
                                        <p className="text-muted" style={{ marginTop: "-5px"}}>
                                          Create a new account, it takes less than a minute.{' '}
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-2 text-left">
                                            <label
                                                htmlFor="displayName"
                                                className="form-label "
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="displayName"
                                                placeholder="Enter your name"
                                                {...register('displayName', {
                                                    required:
                                                        'Name is required',
                                                })}
                                            />
                                        </div>

                                        <div className="mb-2 text-left">
                                            <label
                                                htmlFor="email"
                                                className="form-label"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                id="email"
                                                placeholder="Enter your email"
                                                {...register('email', {
                                                    required:
                                                        'Email is required',
                                                })}
                                            />
                                        </div>

                                        <div className="mb-2 text-left">
                                            <label
                                                htmlFor="password"
                                                className="form-label text-left"
                                            >
                                                Password
                                            </label>
                                            <div className="input-group input-group-merge">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    className="form-control"
                                                    placeholder="Enter your password"
                                                    {...register('password', {
                                                        required:
                                                            'Password is required',
                                                    })}
                                                />
                                                <div
                                                    className="input-group-text"
                                                    data-password="false"
                                                >
                                                    <span className="password-eye"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-2 text-left">
                                            <label
                                                htmlFor="confirmPassword"
                                                className="form-label text-left"
                                            >
                                              Re Password
                                            </label>
                                            <div className="input-group input-group-merge">
                                                <input
                                                    type="password"
                                                    id="confirmPassword"
                                                    className="form-control"
                                                    placeholder="Enter Re password"
                                                    {...register('confirmPassword', {
                                                        required:
                                                            'Password is required',
                                                    })}
                                                />
                                                <div
                                                    className="input-group-text"
                                                    data-password="false"
                                                >
                                                    <span className="password-eye"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            <div className="form-check text-left">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="checkbox-signup"
                                                    onClick={handelCheckBox}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="checkbox-signup"
                                                >
                                                    I accept{' '}
                                                    <a
                                                        href="/"
                                                        className="text-muted"
                                                    >
                                                        Terms and Conditions
                                                    </a>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="mb-22 text-center">
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                                disabled={isCheckBox === true? false: true}
                                                style={{
                                                    background: '#1560FF',
                                                }} 
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="row mt-0">
                                <div className="col-12 text-center">
                                    <p className="text-muted m-1">
                                        Already have account?{' '}
                                        <Link
                                            to="/login"
                                            className="text-muted ms-1"
                                        >
                                            <b>Log In</b>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SignUp;
