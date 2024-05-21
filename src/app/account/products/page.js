"use client";

import TitlePage from "@/components/UI/TitlePage";
import { useEffect, useState } from "react";
import ProductTable from "@/components/UI/Table";
import useFetch from "@/hooks/useFetch";

const ProductBackOffice = () => {
    const { fetchData, data, error, loading, typeofError } = useFetch({
        url: "/products",
        method: "GET",
        body: null,
        token: null,
    });

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        if (data) {
            setProductsList(data.data.products);
        }
    }, [data]);

    const confirmDelete = (itemId) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
            handleDeleteProduct(itemId);
        }
    };
    

    

    

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto bg-gray-100">
            <TitlePage title="Liste des produits" />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!data && (
                <div>
                    <p>Type of Error: {typeofError}</p>
                </div>
            )}
            <div className="min-h-screen">
                <div className="mb-8">
                    <ProductTable
                        data={data}
                        type="product"
                        handleDelete={(id) => confirmDelete(id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductBackOffice;
