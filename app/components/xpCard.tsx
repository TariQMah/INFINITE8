"use client";
import Image from "next/image";
import vector1 from "@/app/assets/images/Vector.png";
import vector2 from "@/app/assets/images/Vector-1.png";
import vector3 from "@/app/assets/images/Vector-2.png";
import { cn } from "@/lib/utils";
interface XPCardInterface {
  image: any;
  title: string;
  className?: string;
}
const XPCard: React.FC<XPCardInterface> = ({ image, title, className }) => {
  return (
    <div className="awardBox relative w-[146px] h-40">
      <Image
        src={vector1}
        className="relative z-10 shadow-2xl"
        width={146}
        height={100}
        alt=""
      />
      <Image
        src={image}
        className={cn("absolute top-8 left-6 z-10  ", className)}
        width={100}
        height={100}
        alt=""
      />
      <Image
        src={vector2}
        className="absolute z-10 left-[2px] top-7"
        height={6}
        width={5}
        alt=""
      />

      <Image src={vector3} className="relative -mt-5 z-10" alt="" />
      <h4 className="text-left text-black pl-4 z-20 relative -mt-6 font-bold">
        {title}
      </h4>
    </div>
  );
};

export default XPCard;
