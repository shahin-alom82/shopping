"use client"
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import PriceFormate from "../PriceFormate";
import { IoClose } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { cartDelete, decrease, increase } from "@/redux/shoppingSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";


const CartProducts = () => {
      const { cart } = useSelector((state) => state.shopping);
      console.log("cart", cart)
      const dispatch = useDispatch()
      const { data: session } = useSession();



      const handlePlus = (id) => {
            dispatch(increase(id));
            toast.success("Quantity increased successfully!");
      };

      const handleMinus = (id, quantity) => {
            if (quantity > 1) {
                  dispatch(decrease(id));
                  toast.success("Quantity decreased successfully!");
            }
      };


      // State to manage totals
      const [totalPrice, setTotalPrice] = useState(0);
      const [totalDiscount, setTotalDiscount] = useState(0);
      const [payableTotal, setPayableTotal] = useState(0);

      useEffect(() => {
            let priceSum = 0;
            let discountSum = 0;
            cart.map((product) => {
                  const subtotal = product.oldprice * product.quantity;
                  const discount = (product.oldprice - product.price) * product.quantity;

                  priceSum += subtotal;
                  discountSum += discount;
            });

            setTotalPrice(priceSum);
            setTotalDiscount(discountSum);
            setPayableTotal(priceSum - discountSum);
      }, [cart]);



      // payment
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

      const handleCheakOut = async () => {
            const stripe = await stripePromise;
            const response = await fetch("/api/checkout", {
                  method: "POST",
                  headers: {
                        "Content-type": "application/json"
                  },
                  body: JSON.stringify({
                        item: cart,
                        // email: session.user.email,
                  })
            })
            const data = await response.json();
            if (response.ok) {
                  stripe?.redirectToCheckout({ sessionId: data.id });
            }
            else {
                  throw new Error("Failed to create Stripe Payment");
            }
      }






      return (
            <div className="lg:py-10 lg:px-10 py-4">
                  <Container>
                        {
                              cart.length ?
                                    <div>
                                          <h1 className="lg:text-3xl text-2xl text-gray-700 tracking-wide font-semibold">Your Shopping Cart</h1>


                                          <div className="overflow-x-auto mt-10 border-t-2 border-l-2 border-r-2 border-gray-300">
                                                <table className="min-w-full">
                                                      <thead className="">
                                                            <tr className="text-xl font-medium border-b-2 text-blue-700 border-gray-300">
                                                                  <th className="px-4 py-2 text-left">Remove</th>
                                                                  <th className="px-4 py-2 text-left">Image</th>
                                                                  <th className="px-4 py-2 text-left">Name</th>
                                                                  <th className="px-4 py-2 text-left">Category</th>
                                                                  <th className="px-4 py-2 text-left">Quantity</th>
                                                                  <th className="px-4 py-2 text-left">Old Price</th>
                                                                  <th className="px-4 py-2 text-left">New Price</th>
                                                                  <th className="px-4 py-2 text-left">Sub Total</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            {cart.map((item) => (
                                                                  <tr className="border-b-2 border-gray-300" key={item.id}>
                                                                        <td className="px-4 py-2">
                                                                              <IoClose
                                                                                    onClick={() => {
                                                                                          dispatch(cartDelete(item.id));
                                                                                          toast.success(`${item?.name?.substring(0, 10) || 'Product'} deleted successfully!`);
                                                                                    }}
                                                                                    className="text-gray-700 cursor-pointer"
                                                                                    size={25}
                                                                              />
                                                                        </td>

                                                                        <td className="px-4 py-2">
                                                                              <Link href={{ pathname: `/product/${item.id}`, query: { id: item.id } }}>
                                                                                    <Image className="h-24 w-32" src={item?.img} alt="img" height={400} width={400} />
                                                                              </Link>
                                                                        </td>

                                                                        <td className="px-4 py-2">{item?.name ? item.name.slice(0, 13) : 'Unknown Product'}</td>
                                                                        <td className="px-4 py-2">{item?.category || 'Unknown Category'}</td>

                                                                        <td className="px-4 py-2">
                                                                              <div className="flex items-center gap-6">
                                                                                    <span onClick={() => handleMinus(item.id, item.quantity)} className="bg-gray-300 rounded-full p-1 px-1 text-gray-700">
                                                                                          <FiMinus size={20} className="cursor-pointer" />
                                                                                    </span>
                                                                                    <span>{item.quantity}</span>
                                                                                    <span onClick={() => handlePlus(item.id)} className="bg-gray-300 rounded-full p-1 px-1 text-gray-700">
                                                                                          <FiPlus size={20} className="cursor-pointer" />
                                                                                    </span>
                                                                              </div>
                                                                        </td>

                                                                        <td className="px-4 py-2 line-through">
                                                                              <PriceFormate amount={item.oldprice} />
                                                                        </td>

                                                                        <td className="px-4 py-2">
                                                                              <PriceFormate amount={item.price} />
                                                                        </td>

                                                                        <td className="px-4 py-2">
                                                                              <PriceFormate amount={item.price * item.quantity} />
                                                                        </td>
                                                                  </tr>
                                                            ))}
                                                      </tbody>

                                                </table>
                                          </div>




                                          {/* Cart Summary Start*/}

                                          <div className="px-4 lg:px-0">
                                                <div className="lg:py-10 py-4 lg:w-[600px] w-full mx-auto">
                                                      <div>
                                                            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mt-3 text-center lg:text-left">
                                                                  Order summary
                                                            </h2>
                                                            <div className="mt-8 lg:mt-10 space-y-4">
                                                                  <div className="flex items-center justify-between">
                                                                        <p className="text-sm lg:text-base text-gray-700">Subtotal</p>
                                                                        <p className="font-medium text-green-600">
                                                                              <PriceFormate amount={totalPrice} />
                                                                        </p>
                                                                  </div>

                                                                  <div className="flex items-center justify-between border-t-2 border-gray-200 pt-4">
                                                                        <p className="text-sm lg:text-base font-medium text-gray-700">
                                                                              Total Discount
                                                                        </p>
                                                                        <p className="font-medium text-green-600">
                                                                              <PriceFormate amount={totalDiscount} />
                                                                        </p>
                                                                  </div>

                                                                  <div className="flex items-center justify-between border-t-2 border-gray-200 pt-4">
                                                                        <p className="text-sm lg:text-base font-medium text-gray-700">
                                                                              Payable Total
                                                                        </p>
                                                                        <p className="font-medium text-green-600">
                                                                              <PriceFormate amount={payableTotal} />
                                                                        </p>
                                                                  </div>

                                                                  <div className="w-full h-24">
                                                                        <button
                                                                              onClick={handleCheakOut}
                                                                              className="bg-transparent border-2 border-blue-500 text-black rounded-lg w-full py-2 text-base lg:text-xl hover:text-gray-400 duration-300 my-2"
                                                                        >
                                                                              Payment
                                                                        </button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Cart Summary End*/}



                                    </div>
                                    :
                                    <div className="lg:mx-56 mt-14 shadow-lg shadow-gray-400">
                                          <div className="text-center py-10 bg-gray-100">
                                                <h1 className="lg:text-4xl text-gray-700 text-2xl tracking-wide font-semibold">No Product Available</h1>
                                                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque fugiat rem. Consectetur officia <br /> atque iusto dignissimos quasi molestiae perspiciatis animi, eveniet <br /> ratione magni, cupiditate qui veritatis officiis, numquam nulla.</p>
                                                <Link href={"/"}>
                                                      <button className="bg-blue-500 text-white py-2 px-4 mt-5">Go To Shopping</button>
                                                </Link>
                                          </div>
                                    </div>
                        }
                  </Container>
            </div>
      );
};

export default CartProducts;