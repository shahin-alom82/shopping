import Image from "next/image";
import Container from "./Container";
import { logo } from "@/assets";
import { FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { GoDotFill } from "react-icons/go";
import { MdOutlineAddLocationAlt, MdOutlineAttachEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
      return (
            <div className="bg-lightBg ">
                  <Container className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 items-center justify-between py-14 border-b border-gray-400">
                        <div>
                              <Link href={"/"}>
                                    <Image className="lg:w-40 lg:h-10" src={logo} alt="Logo"></Image>

                              </Link>                              <h1 className="mt-6 text-gray-800">We are a team of designers and <br /> developers that create high quality <br /> WordPress</h1>
                              <div className="flex items-center gap-4 mt-6">
                                    <div className="border-2 shadow-md border-bannercyan py-2 px-2 text-gray-800 hover:text-white hover:bg-bannercyan cursor-pointer duration-300">
                                          <FaFacebookF size={20} />
                                    </div>
                                    <div className="border-2 shadow-md border-bannercyan py-2 px-2 text-gray-800 hover:text-white hover:bg-bannercyan cursor-pointer duration-300">
                                          <FaTwitter size={20} />
                                    </div>
                                    <div className="border-2 shadow-md border-bannercyan py-2 px-2 text-gray-800 hover:text-white hover:bg-bannercyan cursor-pointer duration-300">
                                          <FaLinkedinIn size={20} />
                                    </div>
                                    <div className="border-2 shadow-md border-bannercyan py-2 px-2 text-gray-800 hover:text-white hover:bg-bannercyan cursor-pointer duration-300">
                                          <SiInstagram size={20} />
                                    </div>
                              </div>
                        </div>
                        <div className="lg:ml-8">
                              <h1 className="text-[22px] font-medium">My Account</h1>
                              <div className="mt-6 space-y-4 text-gray-700">
                                    <p
                                          className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80"
                                    >
                                          <GoDotFill size={8} />
                                          Shipping</p>

                                    <p
                                          className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80"
                                    >
                                          <GoDotFill size={8} />
                                          Wishlist
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80"
                                    >
                                          <GoDotFill size={8} />
                                          My Account
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80"
                                    >
                                          <GoDotFill size={8} />
                                          Order History
                                    </p>
                              </div>
                        </div>
                        <div className="lg:ml-8">
                              <h1 className="text-[22px] font-medium">Information</h1>
                              <div className="mt-6 space-y-4 text-gray-700">
                                    <p
                                          className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80"
                                    >
                                          <GoDotFill size={8} /> Our Story
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80"
                                    >
                                          <GoDotFill size={8} /> Terms & Conditions
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80"
                                    >
                                          <GoDotFill size={8} /> Latest News
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80"
                                    >
                                          <GoDotFill size={8} />
                                          Contact Us
                                    </p>
                              </div>

                        </div>
                        <div>
                              <h1 className="text-[22px] font-medium">Talk To Us</h1>
                              <div className="mt-6 space-y-3">
                                    {/* <h1></h1> */}
                                    <p className="text-gray-700">Got Questions? Call us</p>
                                    <p className="text-xl font-medium">+670 413 90 762</p>
                                    <p className="text-gray-700 flex items-center gap-3">
                                          <MdOutlineAttachEmail size={20} />
                                          shahinalom3511371@gmail.com</p>
                                    <p className="text-gray-700 flex items-center gap-3">
                                          <MdOutlineAddLocationAlt size={20} />
                                          79 Sleepy. Jamaica, New York 1432</p>
                              </div>
                        </div>
                  </Container>
                  <Container className="lg:flex md:flex-row  items-center justify-between py-6">
                        <p className="text-gray-800">© 2024 All Rights Reserved | E-Commerce Shopping</p>
                        <div className="flex items-center gap-2 text-cyan-500">

                              <FaCcStripe size={40} />
                              <FaCcVisa size={40} />
                              <FaCcMastercard size={40} />
                              <FaCcPaypal size={40} />

                        </div>
                  </Container>
            </div>
      );
};

export default Footer;