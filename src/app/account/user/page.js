"use client";
import TitlePage from "@/components/UI/TitlePage";
import React, { useState, useEffect } from "react";
import { getUser } from "@/services/api/user.api";
import { CookiesProvider, useCookies } from 'react-cookie'
import jwt from "jsonwebtoken";

import Link from "next/link";
import Button from "@/components/UI/Button";

const UserBackOffice = () => {
    const [usersList, setUsersList] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    const token = cookies.userToken;
    const userTokenData = jwt.decode(token);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                let response = await getUser(userTokenData.id);
                console.log(response)

                if (response) {
                    setUser(response.results);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        // if (params.id) {
            fetchUser();
        // }
    }, []);


    if (user === null) return <div></div>;

    return (
        <div className="container mx-auto bg-gray-100">
            <TitlePage title="Profil Utilisateur" />
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                    {user && (
                        <div className="min-h-screen">
                        <div className="mb-8">
                        <div>
                            <div>
                                <p>Identifiant du client : {user._id}</p>
                                <p>Nom : {user.lastname}</p>
                                <p>Prénom : {user.firstname}</p>
                                <p>Email : {user.mail}</p>
                            </div>
                            <br />
                            <div className="inline-flex space-x-4 content-around">
                                <Link href={`/account/home`}>
                                    <Button
                                        title="Retour"
                                        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                    />
                                </Link>
                                <Link href={`/account/user/${user._id}`}>
                                    <Button
                                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                                        title="Modifier"
                                    />
                                </Link>
                            </div>
                        </div>
                    
                    <br />
                </div>
            </div>
            )}
        </div>
    );
};

export default UserBackOffice;
