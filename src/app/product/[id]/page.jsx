import Container from "@/components/Container";
import PriceFormate from "@/components/PriceFormate";
import { fetchData } from "@/data";
import Image from "next/image";
import { IoIosStar, IoMdCheckmark } from "react-icons/io";


const page = async ({ params }) => {
      const { id } = params;
      const endPoind = `https://shoppingapi.vercel.app/shopping`;
      const data = await fetchData(endPoind);
      const product = data.find((item) => item.id == id);

      return (
            <div className="py-8">
                  <Container>
                        <h1 className="lg:text-4xl text-2xl font-medium text-gray-800 tracking-wide">Single Product</h1>
                        <div className="mt-10 flex flex-col lg:flex-row">
                              <Image src={product?.img} alt="img" className="h-80 w-[450px]" height={400} width={400} />
                              <div className="bg-[#eceef0] lg:w-2/3 lg:px-0 px-4">
                                    <h1 className="mt-6 lg:text-2xl text-xl font-medium text-gray-800">{product?.name}</h1>
                                    <PriceFormate className={"text-xl text-green-500 mt-2"} amount={product?.price} />
                                    <p className="text-xl text-gray-700 mt-2">Seller: {product.seller}</p>
                                    <h1 className="text-xl text-gray-700 mt-2">Category : {product?.category}</h1>

                                    <div className="">
                                          {product?.stock ? (
                                                <div className="flex lg:items-center gap-2 text-xl mt-2">
                                                      <IoMdCheckmark className="text-green-600 lg:mt-1 mt-1" />
                                                      <h1 className="font-medium text-gray-700">In stock</h1>
                                                </div>
                                          ) : (
                                                <div>
                                                      <h1>No available</h1>
                                                </div>
                                          )}
                                    </div>

                                    {/* Ratings Section */}
                                    <div className="flex items-center text-yellow-500 mt-4">
                                          {Array.from({ length: Math.floor(product?.ratings || 0) }, (_, index) => (
                                                <IoIosStar key={index} className="text-yellow-400" />
                                          ))}
                                    </div>

                                    <div className="mt-6 lg:mb-0 mb-4">
                                          <button className="lg:w-44 w-full bg-blue-500 text-white py-2 flex items-center justify-center rounded-full mb-1 font-medium">
                                                Add To Cart
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default page;
