"use client";
import TitlePage from "@/components/UI/TitlePage";
// import React, { useEffect, useState } from "react";
// import { CookiesProvider, useCookies } from 'react-cookie'

const Home = () => {
    // const [token, setToken] = useState("");
    // const [cookies] = useCookies(['userToken']);

    // setToken(cookies.userToken)

    // useEffect(() => {
    //     if (token) {
    //         const user = parseJwt(token);
    //     }
    // }, []);

    // const parseJwt = (token) => {
    //     const base64Url = token.split(".")[1];
    //     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    //     const jsonPayload = decodeURIComponent(
    //         atob(base64)
    //             .split("")
    //             .map((c) => {
    //                 return (
    //                     "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
    //                 );
    //             })
    //             .join("")
    //     );
    //     return JSON.parse(jsonPayload);
    // };

    return (
        <div className="container mx-auto bg-gray-100 h-screen">
            <TitlePage title=" Paris PFS Bank" />
            <h2 className="text-2xl">Home Page</h2>
        </div>
    );
};

export default Home;
