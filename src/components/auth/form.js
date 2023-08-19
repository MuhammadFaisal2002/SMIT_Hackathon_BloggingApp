import Link from "next/link";
import { useRef } from "react";
import { global } from "styled-jsx/css";

export default function Form({ signin, onFormSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const REpasswordRef = useRef();

  const onSubmitHandler = (e) => {
    alert(emailRef.current.value)
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const rePasword = REpasswordRef.current.value;
    if (password !== rePasword) {
      throw new Error ("Wrong Password")
    }
    else {
    e.preventDefault();
    onFormSubmit(firstname, lastname, email, password, rePasword); }
  };

  return (
    <>
      <div className="navi">
        <span className="content">personal Blogging app</span>
        <span className="login">
          <Link
            href="/auth/login"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Log in
          </Link>
        </span>
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {"Signup for new account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmitHandler}>
          <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="firstname"
                  minLength={3}
                  placeholder="firstname"
                   ref={firstnameRef}
                  autoComplete="current-firstname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
          

              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  minLength={1}
                  maxLength={20}
                  type="lastname"
                  placeholder="lastname"
                   ref={lastnameRef}
                  autoComplete="current-lastname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            
            
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  ref={emailRef}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            

            
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  placeholder="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
              <div className="mt-2">
                <input
                  id="re_password"
                  name="re_password"
                  type="password"
                  placeholder="re-password"
                  ref={REpasswordRef}
                  
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            {/* <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href={"/auth/signup"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {"Do not have an account? Signup"}
                </Link>
              </div>
            </div> */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {"SignUp"}
              </button>
            </div>
          </form>
         
        </div>
      </div>

    </>
  );

}
