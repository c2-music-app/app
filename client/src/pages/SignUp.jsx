import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSignUp } from '../actions/signUpAction';

export default function SignUp() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm({ name, email, password});
        setErrors(validationErrors);
        dispatch(handleSignUp(  {
            email: email,
            username:name,
            password: password,
          }))



    }


    
  const validateForm = (values) => {
    const errors = {};
  
    if (!values.name.trim()) {
      errors.name = "Name is required";
    }
  
    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else {
      if (!/(?=.*[a-z])/.test(values.password)) {
        errors.password = "Password must include at least one lowercase letter";
      }
      if (!/(?=.*[A-Z])/.test(values.password)) {
        errors.password = "Password must include at least one uppercase letter";
      }
      if (!/(?=.*\d)/.test(values.password)) {
        errors.password = "Password must include at least one digit";
      }
      if (!/(?=.*\W)/.test(values.password)) {
        errors.password = "Password must include at least one special character";
      }
      if (values.password.length < 9) {
        errors.password = "Password must be at least 9 characters long";
      }
    }
  
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    } else if (!/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email domain";
    }
    return errors;
}
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900" style={{backgroundImage: "url(https://t4.ftcdn.net/jpg/02/66/97/53/360_F_266975387_CVK7jWI9dSoL4owOzrw9wSElynS7bgRe.jpg)" , backgroundSize: "cover"}}>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create An Account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                      <input type="text" name="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name" required="" value={name} onChange={(e) => setName(e.target.value)}/>
                      {errors.name && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.name}
                  </p>
                )}
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""  onChange={(e) => setEmail(e.target.value)}/>
                      {errors.email && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.email}
                  </p>
                )}
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""  value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                      {errors.password && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.password}
                  </p>
                )}
                  </div>
                 
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                       have an account ? <Link to="/SignIn" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in </Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

    </>
  )
}
