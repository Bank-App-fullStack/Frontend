"use client";
import TitlePage from "@/components/UI/TitlePage";
import React, { useState, useEffect } from "react";
import UserTable from "@/components/UI/Table";
import useFetch from "@/hooks/useFetch";
import { getUser } from "@/services/api/user.api";


import Link from "next/link";
import Button from "@/components/UI/Button";
import { useParams } from "next/navigation";
import Input from "@/components/UI/Input";

const UserBackOffice = () => {
    const [usersList, setUsersList] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                let response = await getUser("66379a62fb30395b4cde238a");
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
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Mzc5YTYyZmIzMDM5NWI0Y2RlMjM4YSIsImFkbWluIjp0cnVlLCJpYXQiOjE3MTYyODczNjEsImV4cCI6MTc0NzgyMzM2MX0.e0Cq9E_WdOmjAyn1nJdDdz7VYBOBTqIhM5EglsDhY-0";

        const handleUpdate = async (id) => {
            try {
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmM1NTJlNzE5ZTYwZTQ0Mjc3ZTI0MyIsImFkbWluIjp0cnVlLCJpYXQiOjE3MTI5MTYwNTYsImV4cCI6MTc0NDQ1MjA1Nn0.dfDN0S_-htGFENo2FhJD3Cj9CKuubl2GYsm_Me5sYDc";
                console.log(token)
                console.log(id)
                console.log(user)
                await fetch(
                    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/update/${id}`,
                    {
                        method: "PUT",
                        cache: "no-store",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            "name": user.name,
                            "surname": user.surname,
                            "email": user.email,
                            "address": user.address,
                            "postalCode": user.postalCode,
                            "town": user.town,
                            "active": user.phone,
                        })
                    }
                );
            } catch (error) {
                console.error("Erreur lors de la modification de l'utilisateur", error);
            }
        };
    
        const handleChange = (e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
        };

console.log(user)
    if (user === null) return <div></div>;

    return (
        <div className="container mx-auto bg-gray-100">
            <TitlePage title="Profil Utilisateur" />
            <div className="min-h-screen">
                <div className="mb-8">
                    {loading && <p>Loading...</p>}
                    {user && (
                        <form onSubmit={handleSubmit}>
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
                                <Link href={`/account/users/${user._id}`}>
                                    <Button
                                        type="submit"
                                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                                        onClick={() =>
                                            handleUpdate(user._id)
                                        }
                                        title="Modifier"
                                    />
                                </Link>
                            </div>
                        </form>
                    )}
                    <br />
                </div>
            </div>
        </div>
    );
};

export default UserBackOffice;
