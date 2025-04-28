import { AppModal } from "@/shared/components/AppModal";
import Image from 'next/image';
import Link from 'next/link';
import { IPropsAppModalDemo } from "./types";

export const AppModalDemo = ({open, handleClose, utmTags} :IPropsAppModalDemo) => {
    return (
        <AppModal
            className='flex justify-center items-center'
            isOpen={open}
            closeHandler={handleClose}
        >
            <div className='form w-full !max-w-full !h-full'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <div className='mb-6'>
                        <Image 
                            src="/images/icon/telegram-bot.jpg"
                            width={80} 
                            height={80} 
                            alt="Telegram Bot" 
                            className="rounded-full"
                        />
                    </div>
                    <div className="form-title mb-4">Получите демо-доступ через Telegram</div>
                    <div className="form-desc max-w-[500px] mb-8">
                        Для получения демо-доступа к сервису MarketDB, пожалуйста, перейдите в нашего Telegram бота и отправьте команду{' '}
                        <span className="font-bold text-orange-500">/demo</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4">
                        <a 
                            href="https://t.me/MarketDBAnalyticsBot" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn--orange flex items-center gap-2"
                        >
                            <Image 
                                src="/images/icon/telegram.svg" 
                                width={24} 
                                height={24} 
                                alt="Telegram" 
                            />
                            Перейти в бота
                        </a>
                        
                        <div className="text-sm text-gray-600">
                            Нажимая на кнопку, вы соглашаетесь с нашей{' '}
                            <Link href="/privacy" className="underline">
                                политикой конфиденциальности
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AppModal>
    );
};
