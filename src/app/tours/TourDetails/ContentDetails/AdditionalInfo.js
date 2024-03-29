import React from 'react';
import { FaMoneyBillAlt, FaRegCreditCard, FaChild } from "react-icons/fa";
import { BsInfo } from "react-icons/bs";

const AdditionalInfo = ({ requirements, childrenCategory, exclude, paymentMethods }) => {
    return (
        <div>
            <div className='bg-red-50 py-6 gap-4 px-3 flex items-center justify-start mb-4'>
                <span className='bg-red-400 p-2 rounded-lg'>
                    <BsInfo className='text-xl text-white' />
                </span>
                <h3 className="text-lg font-bold text-red-900">
                    Additional Information
                </h3>
            </div>
            {requirements && (
                <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white mb-4">
                    <h4 className="text-xl font-bold text-gray-700 mb-2">Keperluan yang Perlu Dibawa:</h4>
                    <ul className="list-disc list-inside ml-4">
                        {requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
            {childrenCategory && (
                <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white mb-4">
                    <h4 className="flex items-center text-xl font-bold mb-2">
                        <FaChild className="mr-2" />
                        Kategori Anak-anak:
                    </h4>
                    <p>{childrenCategory}</p>
                </div>
            )}
            {exclude && (
                <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white mb-4">
                    <h4 className="text-xl font-bold text-gray-700 mb-2">Tour Exclude:</h4>
                    <ul className="list-disc list-inside ml-4">
                        {exclude.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
            {paymentMethods && (
                <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white mb-4">
                    <h4 className="text-xl font-bold text-gray-700 mb-2">Metode Pembayaran:</h4>
                    <div className="flex flex-wrap gap-4">
                        {paymentMethods.map((item, index) => (
                            <div key={index} className="flex items-center text-gray-700">
                                {item === "cash" ? (
                                    <span className="flex items-center">
                                        <FaMoneyBillAlt className="mr-2" />
                                        Tunai
                                    </span>
                                ) : (
                                    <span className="flex items-center">
                                        <FaRegCreditCard className="mr-2" />
                                        Kartu Kredit
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdditionalInfo;