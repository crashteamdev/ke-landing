import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import "@/shared/style/style.scss";
import Metrics from './metrics';
import { Providers } from './providers';

export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'], // указываем нужные вам наборы символов
  weight: ['400', '500', '700'], // указываем веса шрифта, которые вы хотите использовать
});

export const metadata: Metadata = {
  title: 'Аналитика маркетплейсов Магнит Маркет и Uzum',
  description: 'Анализ продаж конкурентов и поиск прибыльных товаров на маркетплейсах. Находите прибыльные товары и ниши на Магнит Маркет и Uzum',
  keywords: "kazanexpress, KE, ke, KazanExpress, доставка за 1 день, аналитика KazanExpress, Аналитика KazanExpress, KazanExpress Аналитика, Магнит Маркет, Магнит KazanExpress, Магнит, Магнит-Маркет Magnit Market, Magnit-Market, Магнит-маркет аналитика, Магнит маркет аналитика, магнит аналитика, wb аналитика, ozon аналитика, marketdb, аналитика магнит маркет, аналитика uzum, аналитика uzum.uz, uzum.uz, uzum, узбекистанский маркетплейс uzum, доставка за 1 день uzum.uz, marketdb uzum, uzum analitycs, Сервис аналитики для продавцов на UZUM, аналитика для Uzum, аналитика для Узум, Узум аналитика, сервис аналитики, внешняя аналитика Узум, аналитика узум,  сервис аналитики uzum, uzum analitika, uzum аналитика, аналитика узум маркет, uzum market analitika, uzum market аналитика, uzum статистика  ",
  openGraph: {
    locale: "ru_RU",
    url: "https://marketdb.pro/",
    siteName: "MarketDB",
    type: "website",
    title: "Аналитика маркетплейсов Магнит Маркет и Uzum",
    description: "Анализ продаж конкурентов и поиск прибыльных товаров на маркетплейсах. Находите прибыльные товары и ниши на Магнит Маркет и Uzum.",
    images: [
      {
        url: "https://marketdb.pro/images/inform.png",
        width: 1200,
        height: 630,
        alt: "Аналитика Магнит Маркет и Uzum",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body className={roboto.className}>
        <Providers>
          <>
            {children}
            <Metrics />
          </>
        </Providers>
      </body>
    </html>
  )
}
