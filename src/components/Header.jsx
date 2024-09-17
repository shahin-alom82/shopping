"use client"
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import { logo } from "@/assets";
import { signIn, signOut, useSession } from "next-auth/react"

const Header = () => {
      const [searchValue, setSearchValue] = useState("");
      const { data: session } = useSession()

      return (
            <div className="border-b-2 border-blue-600 pb-4 sticky z-50 px-10 overflow-hidden bg-white opacity-85">
                  <div className="flex justify-between items-center mt-4 ">
                        <Link href="/">
                              <Image className="lg:h-12 lg:w-48" src={logo} alt="logo" />
                        </Link>
                        <div className="flex relative">
                              <input
                                    type="text"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder="Search Products Here..."
                                    className="py-2 px-6 border-t-2 border-b-2 border-l-2 border-gray-400 relative w-[700px] outline-none pr-10"
                                    aria-label="Search Products"
                              />
                              <button className="py-3 px-4 bg-blue-600  text-white" aria-label="Search Button">
                                    <FaSearch size={20} />
                              </button>

                              {searchValue && (
                                    <RxCross2
                                          size={20}
                                          onClick={() => setSearchValue("")}
                                          className="absolute right-[68px] text-gray-500 cursor-pointer hover:text-red-500 duration-500 top-[12px]"
                                          aria-label="Clear Search"
                                    />
                              )}
                        </div>
                        <div className="flex items-center gap-10">



                              {/* user */}
                              {
                                    session?.user ?
                                          <div className="flex items-center gap-2 cursor-pointer">
                                                <div className="py-2 px-2 text-gray-500 rounded-full">
                                                      {/* <CiUser size={25} /> */}
                                                      <Image className="rounded-full h-8 w-8" src={session?.user?.image} alt="use image" height={200} width={200} />
                                                </div>
                                                <div>
                                                      <p>Hello, <span>

                                                            {session?.user.name}</span></p>
                                                      <p onClick={() => signOut()} className="font-medium text-[14px] text-green-600">Sign Out</p>
                                                </div>
                                          </div>
                                          :
                                          <div onClick={() => signIn()} className="flex items-center gap-4 cursor-pointer">
                                                <div className="border border-gray-500 py-2 px-2 text-gray-500 rounded-full">
                                                      <CiUser size={25} />
                                                </div>
                                                <div>
                                                      <p>Hello, Guest</p>
                                                      <p className="font-medium">Login / Register</p>
                                                </div>
                                          </div>

                              }



                              <div className="flex items-center gap-6">
                                    <Link href="/favorite" className="relative">
                                          <GrFavorite className="text-gray-600" size={30} />
                                          <span className="absolute -top-3 -right-2 bg-themeColor px-[6px] py-[2px] text-white text-xs rounded-full">0</span>
                                    </Link>
                                    <Link href="/cart" className="relative">
                                          <FiShoppingBag className="text-gray-600" size={30} />
                                          <span className="absolute -top-3 -right-2 bg-themeColor px-[6px] py-[2px] text-white text-xs rounded-full">
                                                0
                                          </span>
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Header;