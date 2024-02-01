"use client";

import { AppAccordionGroup } from "@/shared/components/AppAccordionGroup";

export const Faq = () => {
    const formattedAccordion = [
        {
            content: `Мы собираем данные с 6 главных маркетплейсов России 4 раза в сутки. Ежедневно следим за изменениями на площадках, чтобы при необходимости быстро менять алгоритмы парсинга. Все это помогает предоставлять нашим клиентам максимально точные данные.`,
            id: 1,
            name: "Плохо идут продажи, поэтому сомневаюсь в покупке"
        },
        {
            content: `Мы собираем данные с 6 главных маркетплейсов России 4 раза в сутки. Ежедневно следим за изменениями на площадках, чтобы при необходимости быстро менять алгоритмы парсинга. Все это помогает предоставлять нашим клиентам максимально точные данные.`,
            id: 2,
            name: "Ваши аналитические данные точны?"
        },
        {
            content: `Мы собираем данные с 6 главных маркетплейсов России 4 раза в сутки. Ежедневно следим за изменениями на площадках, чтобы при необходимости быстро менять алгоритмы парсинга. Все это помогает предоставлять нашим клиентам максимально точные данные.`,
            id: 3,
            name: "Ваши аналитические данные точны?"
        },
    ];
    return (
        <div className="py-[125px] bg-[#061C3D] max-md:py-[50px]">
            <div className="container">
                <div className="mb-[72px]">
                    <div className="text-white mb-[32px] text-center text-[56px] leading-[60px] tracking-[-1.12px] font-bold max-md:text-[28px] max-md:leading-[28.8px]">Часто задаваемые вопросы</div>
                    <div className="text-[#B4BBC5] text-[18px] leading-[26px] font-normal text-center w-full max-w-[750px] m-auto max-md:text-[16px] max-md:leading-[24px]">Собрали список часто задаваемых вопросов и разместили ответы на них. Если вы не нашли ответ на свой вопрос, воспользуйтесь формой обратной связи!</div>
                </div>
                <div>
                <AppAccordionGroup
                    items={formattedAccordion || []}
                    isFirstOpen={false}
                    accordionContentSlot={(item) => (
                        <div dangerouslySetInnerHTML={{ __html: item?.content || [] }} />
                    )}
                />
                </div>
            </div>
        </div>
    );
};