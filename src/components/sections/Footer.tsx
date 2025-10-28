"use client";
import Logo from "../ui/Logo";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";

export default function Footer() {
  const pages: string[] = [
    "Features",
    "Premium",
    "Kita Recipes",
    "Kita Cookbook",
    "Articles",
    "About Us",
    "Foods",
    "Support",
    "Log in",
    "Join For Free",
  ];

  const pages2: string[] = [
    "Support Center",
    "Community",
    "Terms Of Service",
    "Privacy Policy",
    "Contact",
    "System Status",
  ];

  return (
    <div className="mt-10">
      <div className="border-y-1 border-y-slate-300 py-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="text-center text-xs font-medium text-gray-600">
          Check out our fake links
        </p>

        <div className="grid grid-cols-2 mt-10 px-10">
          <ul className="p-2 font-bold ">
            {pages.map((page) => (
              <p className="mb-3" key={page}>
                {" "}
                {page}
              </p>
            ))}
          </ul>
          <ul className="p-2 text-gray-600">
            {pages2.map((page) => (
              <p className="mb-3" key={page}>
                {" "}
                {page}
              </p>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 px-7">
        <div>
          <ul className="flex gap-6 justify-center ">
            <div className="p-3 w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-200">
              <Image
                src={"/footer-icons/facebook-app-symbol.png"}
                alt="social icon"
                width={500}
                height={500}
              />
            </div>
            <div className="p-3 w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-200">
              <Image
                src={"/footer-icons/instagram.png"}
                alt="social icon"
                width={500}
                height={500}
              />
            </div>
            <div className="p-3 w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-200">
              <Image
                src={"/footer-icons/pinterest-logo.png"}
                alt="social icon"
                width={500}
                height={500}
              />
            </div>
            <div className="p-3 w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-200">
              <Image
                className="mt-[4px]"
                src={"/footer-icons/youtube.png"}
                alt="social icon"
                width={500}
                height={500}
              />
            </div>
          </ul>

          <p className={`mt-8 text-center text-md ${montserrat.className}`}>
            2025 Random Apps LLC. All Rights Reserved
          </p>

          <p className="text-center mt-3 text-xs pb-10 leading-normal text-gray-600 italic">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            numquam tempore rem eius corrupti est pariatur omnis minima, vel
            culpa nostrum aliquam itaque deleniti explicabo!
          </p>
        </div>
      </div>
    </div>
  );
}
