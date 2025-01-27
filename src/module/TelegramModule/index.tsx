import Image from "next/image"
import Link from "next/link"

export const TelegramModule = () => {
    return (
        <div className="bg-white pt-[120px] pb-10">
            <div className="container">
                <div>
                    <div className="title text-center">Бесплатный Telegram Бот 🤖</div>
                    <div className="desc text-center">Мы разработали бесплатный Telegram Бот для наших клиентов,<br />бот интегрируется с личным кабинетом Магнит Маркет. </div>
                    <Link href="https://t.me/MarketDBAnalyticsBot" target="_blank" className="btn btn--orange block w-full max-w-[195px] mt-4 mx-auto">Воспользоваться</Link>
                </div>
                <div className="grid grid-cols-1">
                    <div>
                        <div className="relative w-full max-w-[400px] h-[700px] mx-auto max-[768px]:max-w-[250px] max-[768px]:h-[550px]">
                            <Image fill alt="Бесплатный Telegram Бот 🤖" src="/images/bottelegram.png" className="object-cover" />
                        </div>
                    </div>
                    {/* <div>
                        <div className="title">Возможности бота</div>
                        <div className="desc">Достаточно авторизовать в боте ваш аккаунт и бот начнет присылать уведомления каждый день!</div>
                        <ul>
                            <li>Уведомления о продажах за вчера</li>
                            <li>Уведомления о за неделю, месяц</li>
                            <li>Уведомления о оставленых отзывах</li>
                            <li>Уведомления о остатках</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
