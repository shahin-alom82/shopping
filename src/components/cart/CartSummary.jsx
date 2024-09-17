import React from 'react';

const CartSummary = () => {
      return (
            <div className='lg:py-10 py-4 lg:w-[600px] mx-auto'>
                  <div>
                        <h2 className="text-3xl font-medium text-gray-900 mt-3">
                              Order summary
                        </h2>
                        <div className="mt-10 space-y-4">
                              <div className="flex items-center justify-between">
                                    <p className=" text-gray-700">Subtotal</p>
                                    <p className="font-medium text-green-600">00</p>
                              </div>

                              <div className="flex items-center justify-between border-t-2 border-gray-200 pt-4">
                                    <p className=" font-medium text-gray-700">
                                          Total Discount
                                    </p>
                                    <p className=" font-medium text-green-600">00</p>
                              </div>
                              <div className="flex items-center justify-between border-t-2 border-gray-200 pt-4">
                                    <p className=" font-medium text-gray-700">
                                          Payable total
                                    </p>
                                    <p className=" font-medium text-green-600">00</p>
                              </div>

                              <div className="w-full h-24 ">
                                    <button
                                          className={
                                                "bg-transparent border-2  border-gray-500 text-black rounded-lg w-full py-2 text-xl  hover:text-gray-400 duration-300 my-2"
                                          }
                                    >
                                          Payment
                                    </button>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default CartSummary;