import Image from "next/image";
import { montserrat } from "@/lib/fonts";

interface FeatureCardProps {
  imageName: string;
  title: string;
  description: string;
  iconBg: string;
}

export default function FeatureCard({
  imageName,
  title,
  description,
  iconBg,
}: FeatureCardProps) {
  return (
    <div className="p-7 text-center border-stone-200 border-1 rounded-xl">
      <div className={`w-16 p-4.5 ${iconBg} rounded-full mx-auto `}>
        <Image
          src={`/${imageName}`}
          alt="Arrow image"
          width={512}
          height={512}
        />
      </div>

      <p className="mt-8 font-bold text-lg">{title}</p>

      <p className={`mt-9 text-stone-600 ${montserrat.className}`}>
        {description}
      </p>

      <button className="flex items-center mx-auto mt-8 gap-2">
        <p className="text-sky-700">Learn More</p>
        <Image
          className="w-5 "
          src="/arrow-right.png"
          alt="Arrow image"
          width={512}
          height={512}
        />
      </button>
    </div>
  );
}
