import React from "react";
import Link from "next/link";
import Button from "@/components/UI/Button";
import styles from './styles.css';

const Table = ({ data, type, handleDelete }) => {
    const items = data//?.data;
    console.log(data)

    if (!items || items.length === 0) {
        return <div>Aucune donnée à afficher</div>;
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {type === "bourse" && (
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-s text-white uppercase bg-neutral-900 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                           <th scope="col" className="px-6 py-3">Symbole</th>
                           <th scope="col" className="px-6 py-3">Open</th>
                           <th scope="col" className="px-6 py-3">Description</th>
                           <th scope="col" className="px-6 py-3">split_factor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:bg-gray-800"
                                >
                            
                                </th>
                                <td aria-label="aaaaaa" className="px-6 py-4"></td>
                                <td aria-label="aaaaaa" className="px-6 py-4"></td>
                                <td aria-label="aaaaaa" className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4">
                                    <div className="inline-flex space-x-4">
                                        <Link
                                            href={`/account/bourse/`}
                                        >
                                            <Button
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                title="Modifier"
                                            />
                                        </Link>
                                        
                                    </div>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Table;
