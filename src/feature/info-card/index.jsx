import Image from "next/image";
import Link from "next/link";

export const InfoCard = ({ features }) => {
  return (
    <ul className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] md:gap-[30px] justify-center">
      {features.map((info, index) => (
        <li key={index + info.title} className="flex justify-center">
          <Link
            href={info.image_redirect_url}
            className="flex flex-col p-[11px] md:p-[20px] dark:bg-green-charleston bg-white-smoke rounded-[16px] w-full  pb-[15px] md:pb-[28px] h-auto"
          >
            <div className="w-[25px] md:w-[50px] h-[25px] md:h-[50px] rounded-[8px] md:rounded-[12px] bg-platinum dark:bg-[#FFFFFF1A] flex justify-center items-center mb-[10px] md:mb-[20px]">
              <div className="relative w-[16px] md:w-[24px] h-[16px] md:h-[24px]">
                <Image
                  src={info.icon}
                  alt={info.title}
                  layout="fill"
                  className="dark:invert dark:brightness-0"
                />
              </div>
            </div>

            <h2 className="text-md md:text-xxxl font-bold text-jet dark:text-white">
              {info.title}
            </h2>
            <p className="text-sm md:text-lg text-start text-jet dark:text-white opacity-60 font-normal">
              {info.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
