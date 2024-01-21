import Image from "next/image";
import { data } from "./static";
import ArrowNext from "@/shared/components/icons/arrowNext";
import clsx from "clsx";

export const RepricerAbout = () => {
    return (
        <div className="bg-white py-[124px]">
            <div className="container">
                <div className="flex gap-[56px] mb-[72px] items-center">
                    <div className="relative w-[280px] h-[260px]">
                        <Image src="/images/repricer/bg.png" fill  alt="Сервис автоматического изменения цен на маркетплейсах" />
                    </div>
                    <div className="w-full max-w-[616px] text-[#061C3D] text-[56px] font-bold leading-[60px] tracking-[-1.12px]">Сервис автоматического изменения цен</div>
                </div>
                <div className="flex gap-[24px] w-full">
                    {data.map((item, key) => (
                        <div key={key} className={clsx("h-[450px] relative w-full rounded-[16px] p-[32px] flex flex-col gap-[24px]", {
                            "bg-[#F0F5FF]": key == 0,
                            "bg-[#FEEDFA]": key == 1,
                            "bg-[#F5F6F7]": key == 2
                        })}>
                            <div className="">
                                <Image className="" src={`/images/repricer/${item.icon}`} alt={item.title} width={148} height={148} />
                            </div>
                            <div className="flex flex-col gap-[12px]">
                                <div className="text-[#061C3D] text-[24px] font-medium leading-[32px]">{item.title}</div>
                                <div className="text-[#42526B] text-[16px] font-normal leading-[24px]">{item.desc}</div>
                            </div>
                            <a href="/" className="absolute bottom-[32px] rounded-[7px] bg-white h-[48px] text-[#0B63E5] text-[16px] font-bold leading-[48px] gap-[12px] flex items-center w-[278px] justify-center">Пробовать бесплатно <ArrowNext color="#0B63E5" /></a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};