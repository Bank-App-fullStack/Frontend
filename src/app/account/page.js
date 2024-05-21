'use client';
import React, { useEffect, useState } from "react";
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import { login } from "@/services/api/auth.api.js";
import { useRouter } from 'next/navigation'
import { CookiesProvider, useCookies } from 'react-cookie'

const Login = () => {
  const [mail, setmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const router = useRouter(); 
  const [cookies, setCookie, removeCookie] = useCookies(['userToken'])
  
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      setCookie('userToken', token, { path: '/' })
      router.push("/account/home");

    } else {
      setLoggedIn(false);
      removeCookie('userToken', { path: '/' })
    }
  }, [token, router]);


  const fetchUser = async () => {
    try {
      setError(null); // Réinitialiser l'erreur avant de tenter la connexion
      const response = await login({ mail, password });
      console.log('Login successful:', response);

      if (response.code === 200) {
        setToken(response.token);
        return;
      } 
      setError(response.message);

    } catch (error) {
      setError(error);
      console.error(error);
    }
  };
  
  const submitLogin = (e) => {
    e.preventDefault();
    fetchUser();
  };

  return (
    <div className="container mx-auto bg-gray-100">
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96 xl:w-1/3">
                <h2 className="text-2xl font-bold mb-6">Connexion</h2> 
                <form onSubmit={submitLogin}>
                    <Input label={'Email'} name={'mail'} value={mail} placeholder={'Email'} type={'email'} onChange={(e) => setmail(e.target.value)} /> 
                    <br/>
                    <Input label={'Mot de passe'} name={'password'} value={password} placeholder={'Password'} type={'password'} onChange={(e) => setPassword(e.target.value)} />
                    <br/>
                    <a className="text-blue-500" href="register">Mot de passe oublié</a>
                    <br />
                    {
                      error && ( 
                        <div className="flex justify-center">
                          <p className="text-red-500 font-bold">{error}</p>
                        </div>
                      )
                    }
                    <br/>
                    <div className="flex justify-end">
                      <Button type={'submit'} title={'Connexion'}/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;
