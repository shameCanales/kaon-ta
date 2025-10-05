import Image from "next/image";
import { montserrat } from "@/lib/fonts";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        className="w-8"
        src="/foodlogo.png"
        width="100"
        height="100"
        alt="Food Logo"
      />
      <h3 className={`font-bold text-xl ${montserrat.className}`}>
        Makaon Kita
      </h3>
    </div>
  );
}
