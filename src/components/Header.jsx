
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import { logo } from "@/assets";
import { signIn, signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addToUser, removeUser } from "@/redux/shoppingSlice";

const Header = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [searchValue, setSearchValue] = useState("");
      const { data: session } = useSession();

      const dispatch = useDispatch()
      const { cart } = useSelector((state) => state.shopping);
      // User 
      useEffect(() => {
            if (session) {
                  dispatch(addToUser(session.user))
            }
            else {
                  dispatch(removeUser())
            }
      }, [session?.user])

      const navbar = [
            { title: "Home", href: "/" },
            { title: "Mens Sneaker", href: "/sneaker" },
            { title: "Mens Pants", href: "/pents" },
            { title: "Mens Boot", href: "/boot" },
            { title: "Bag", href: "/bag" },
            { title: "Cap", href: "/cap" },
            { title: "Earphones", href: "/earphones" },
            { title: "Bottle", href: "/bottle" },
      ];

      return (
            <header className="sticky z-50 top-0 bg-white shadow-md opacity-85">
                  <div className="flex justify-between items-center px-4 lg:px-14 p-4">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                              <Image className="h-8 lg:w-48 w-28 lg:h-12" src={logo} alt="logo" />
                        </Link>

                        {/* Text Bar */}
                        <div className="hidden md:flex gap-6">
                              {navbar.map((item, index) => (
                                    <Link
                                          key={index}
                                          href={item.href}
                                          className="relative overflow-hidden group text-green-600  font-medium tracking-wide text-[18px] hover:text-blue-600 transition-colors"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                          {item.title}
                                          <span className="w-full h-[1px] bg-blue-800 inline-block absolute bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 group-hover:h-[2px] duration-500 transform origin-left"></span>
                                    </Link>
                              ))}
                        </div>

                        {/* User Profile, Favorite, Cart */}
                        <div className="flex items-center gap-10">
                              {/* User */}
                              {session?.user ? (
                                    <div className="flex items-center gap-4 cursor-pointer">
                                          <Image className="rounded-full lg:h-10 lg:w-10" src={session?.user?.image} alt="user image" height={32} width={32} />
                                          <div className="hidden md:block">
                                                <p><span>{session?.user.name}</span></p>
                                                <p className="text-sm font-semibold text-green-600" onClick={() => signOut()}>Log Out</p>
                                          </div>
                                    </div>
                              ) : (
                                    <div onClick={() => signIn()} className="flex items-center gap-2 cursor-pointer">
                                          <span className="border border-gray-600 py-1 px-1 rounded-full">
                                                <CiUser size={25} className="text-gray-500" />
                                          </span>
                                          <div className="hidden md:block">
                                                <p className="text-[16px] font-medium">Hello, Guest</p>
                                                <p className="text-xs font-medium">Login / Register</p>
                                          </div>
                                    </div>
                              )}

                              {/* Cart */}
                              <Link href="/cart" className="relative">
                                    <FiShoppingBag size={30} className="text-gray-500 lg:mr-0 mr-6" />
                                    <span className="absolute -top-2 lg:-right-2 right-5 rounded-full bg-green-500 px-[6px] text-[12px] text-white font-semibold py-[2px]">
                                          {cart.length > 0 ? cart.length : "0"}
                                    </span>
                              </Link>
                        </div>

                        {/* Hamburger Menu for mobile */}
                        <div className="md:hidden">
                              {isMobileMenuOpen ? (
                                    <FaTimes className="text-2xl cursor-pointer text-gray-600" onClick={() => setIsMobileMenuOpen(false)} />
                              ) : (
                                    <FaBars className="text-2xl cursor-pointer text-gray-600" onClick={() => setIsMobileMenuOpen(true)} />
                              )}
                        </div>
                  </div>

                  {/* Mobile menu - Toggle visibility */}
                  {isMobileMenuOpen && (
                        <div>
                              <div className="md:hidden bg-white p-4 shadow-md">
                                    {navbar.map((item, index) => (
                                          <Link
                                                key={index}
                                                href={item.href}
                                                className="block p-2 text-gray-700 hover:text-blue-600 transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                          >
                                                {item.title}
                                          </Link>
                                    ))}
                                    <h1 onClick={() => signOut()} className="text-green-500 text-sm font-semibold ml-2">Log Out</h1>
                              </div>

                        </div>
                  )}
            </header>

      );
};

export default Header;









