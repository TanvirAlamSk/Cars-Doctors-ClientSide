import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { FaCcMastercard } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BuyProduct = () => {
    const { user } = useContext(AuthContext)
    const countries = ["Dhaka", "Khulna", "Barishal", "Sylhet"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("Chattogram");
    const item = useLoaderData()

    const notifyOrder = () => {
        toast.success("Product Order Confirm", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };

    const handelOrder = (event) => {
        const from = event.target
        event.preventDefault()
        const email = from.email.value
        const phone = from.phone.value
        const mmyy = from.mmyy.value
        const cvc = from.cvc.value
        const card = from.card.value
        const area = country
        const zipcode = from.zip.value
        const price = (parseInt(item?.price) / 200)
        const name = item?.name
        const image = item?.image

        const orderItem = {
            email,
            phone,
            mmyy,
            cvc,
            card,
            area,
            zipcode,
            price,
            name,
            image
        }


        fetch(`https://cars-doctor-server-side.vercel.app/product/${user?._id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderItem)
        }).then((responce) => responce.json())
            .then((data) => {
                if (data.acknowledged) {
                    notifyOrder()
                }
            })
        from.reset()
    }


    return (
        <div className="flex justify-center items-center">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <form onSubmit={handelOrder} className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex justify-start flex-col items-start space-y-2">
                        <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order</p>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                            <div className="flex flex-col justify-start items-start w-full space-y-4">
                                <p className="text-xl md:text-2xl leading-normal text-gray-800">{item?.name}</p>
                                <p className="text-base font-semibold leading-none text-gray-600">Price: ${(parseInt(item?.price) / 200)}</p>
                            </div>
                            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                <img src={item?.image} alt="headphones" />
                            </div>
                        </div>

                        <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                            <button className="border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                                <div>
                                    <FaCcMastercard></FaCcMastercard>
                                </div>
                                <div>
                                    <p className="text-base leading-4">Pay</p>
                                </div>
                            </button>

                            <div className="flex flex-row justify-center items-center mt-6">
                                <hr className="border w-full" />
                                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">or pay with card</p>
                                <hr className="border w-full" />
                            </div>

                            <div className="mt-8">
                                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" name="email" required type="email" readOnly defaultValue={user?.email} placeholder="Email" />
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" required type="number" name='phone' placeholder="0000 1234 6549 15151" />
                                </div>
                                <div className="flex-row flex">
                                    <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" required type="text" name='mmyy' placeholder="MM/YY" />

                                    <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" required type="text" name='cvc' placeholder="CVC" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" required type="text" name='card' placeholder="Name on card" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Country or region</label>
                            <div className="mt-2 flex-col">
                                <div className="relative">
                                    <option className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" required type="text" name="area">
                                        {country}
                                    </option>
                                    <svg onClick={() => setMenu(!menu)} className={"transform  cursor-pointer absolute top-4 right-4 " + (menu ? "rotate-180" : "")} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className={"mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " + (menu ? "block" : "hidden")}>
                                        {countries.map((country) => (
                                            <option key={country} className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2" onClick={changeText} defaultValue={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </div>
                                </div>
                                <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" required type="text" name="zip" placeholder="ZIP" />
                            </div>

                            <button type='submit' className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                                <div>
                                    <div className="text-base leading-4">Pay ${(parseInt(item?.price) / 200)}</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BuyProduct;