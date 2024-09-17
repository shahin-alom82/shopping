import Image from "next/image";
import PriceFormate from "./PriceFormate";
import { IoIosStar, IoMdCheckmark } from "react-icons/io";
import Link from "next/link";

const ProductCarts = ({ product }) => {
      return (
            <div>
                  <div className="relative hover:shadow-md hover:shadow-gray-400 lg:w-[300px] duration-300">
                        <Link href={{ pathname: `/product/${product?.id}`, query: { id: product?.id } }}>
                              <div className="border-b-2 border-blue-300 lg:w-[300px] cursor-pointer">
                                    <Image
                                          src={product.img}
                                          alt="img"
                                          width={400}
                                          height={400}
                                          className="lg:w-[300px] lg:h-52"
                                    />
                              </div>
                        </Link>
                        <div className="bg-[#eceef0] lg:w-[300px] lg:px-4 px-3 py-3">
                              <h1 className="lg:text-xl text-[14px] font-medium h-8 ">
                                    {product?.name?.slice(0, 18)}
                              </h1>
                              <div className="mb-3">
                                    {
                                          product?.stock ?
                                                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                                                      <div className="flex items-start gap-2">
                                                            <IoMdCheckmark className="text-green-500 mt-1" />
                                                            <h1>In stock</h1>
                                                      </div>
                                                      <div>
                                                            <PriceFormate className={"text-green-500 font-medium"} amount={product.price} />
                                                      </div>
                                                </div>
                                                :
                                                <div>
                                                      <h1>no available</h1>
                                                </div>
                                    }
                              </div>


                              <div className="flex items-center text-yellow-500 absolute top-2 right-3">
                                    {Array.from({ length: product.ratings }, (_, index) => (
                                          <IoIosStar key={index} className="text-yellow-400" />
                                    ))}
                              </div>
                              <div className="flex items-center mb-4">
                                    <p className="text-gray-800">Seller: {product.seller}</p>
                              </div>

                              <div>
                                    <button className="w-full bg-blue-500 text-white py-1 rounded-full mb-1 font-medium">Add To Cart</button>
                              </div>

                        </div>
                  </div>
            </div >
      );
};

export default ProductCarts;