
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
            <header className="border-b-2 border-gray-300 pb-4 sticky z-50 top-0 bg-white shadow-md">
                  <div className="flex justify-between items-center px-4 lg:px-14 p-4">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                              <Image className="h-8 w-48 lg:h-12" src={logo} alt="logo" />
                        </Link>

                        {/* Search Bar*/}
                        <div className="hidden md:flex relative mx-4">
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


                        {/* User Profile, Favorite, Cart */}
                        <div className="hidden md:flex items-center gap-10">
                              {/* User */}
                              {session?.user ? (
                                    <div className="flex items-center gap-4 cursor-pointer">
                                          <Image className="rounded-full h-10 w-10" src={session?.user?.image} alt="user image" height={32} width={32} />
                                          <div>
                                                <p><span>{session?.user.name}</span></p>
                                                <p className="text-sm font-medium text-green-600 cursor-pointer">{session?.user?.email}</p>
                                          </div>

                                          <div onClick={() => signOut()} className="border-2 border-green-600 text-gray-500 hover:text-red-500 items-center text-center justify-center flex p-[2px] px-2">
                                                <button>Log out</button>
                                          </div>
                                    </div>
                              ) : (
                                    <div onClick={() => signIn()} className="flex items-center gap-6 cursor-pointer">
                                          <span className="border border-gray-600 py-1 px-1 rounded-full">
                                                <CiUser size={25} className="text-gray-500" />
                                          </span>
                                          <div>
                                                <p className="text-[18px] font-medium">Hello, Guest</p>
                                                <p className="text-sm font-medium">Login / Register</p>
                                          </div>
                                    </div>
                              )}

                              {/* Favorite & Cart */}


                              <Link href="/cart" className="relative">
                                    <FiShoppingBag size={30} className="text-gray-500" />
                                    <span className="absolute -top-6 -right-2 rounded-full px-[6px] text-[18px] text-green-600 font-semibold py-[2px]">
                                          {cart.length > 0 ? cart.length : "0"}

                                    </span>
                              </Link>

                        </div>

                        {/* Hamburger Menu for mobile */}
                        <div className="md:hidden">
                              {isMobileMenuOpen ? (
                                    <FaTimes className="text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
                              ) : (
                                    <FaBars className="text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
                              )}
                        </div>
                  </div>

                  {/* Mobile menu - Toggle visibility */}
                  {isMobileMenuOpen && (
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
                        </div>
                  )}
            </header>
      );
};

export default Header;









