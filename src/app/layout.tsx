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
  title: 'Аналитика маркетплейса Магнит Маркет',
  description: 'Анализ продаж конкурентов и поиск прибыльных товаров на маркетплейсах. Находите прибыльные товары и ниши на KazanExpress/Магнит Маркет',
  keywords: "kazanexpress, KE, ke, KazanExpress, доставка за 1 день, аналитика KazanExpress, Аналитика KazanExpress, KazanExpress Аналитика, Магнит Маркет, Магнит KazanExpress, Магнит, Магнит-Маркет Magnit Market, Magnit-Market, Магнит-маркет аналитика, Магнит маркет аналитика, магнит аналитика, wb аналитика, ozon аналитика, marketdb, аналитика магнит маркет",
  openGraph: {
    locale: "ru_RU",
    url: "https://marketdb.pro/",
    siteName: "MarketDB",
    type: "website",
    title: "Аналитика маркетплейса Магнит Маркет",
    description: "Анализ продаж конкурентов и поиск прибыльных товаров на маркетплейсах. Находите прибыльные товары и ниши на Магнит Маркет.",
    images: [
      {
        url: "https://marketdb.pro/images/inform.png",
        width: 1200,
        height: 630,
        alt: "Аналитика Магнит Маркет",
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
    <body className={roboto.className}>
      <Providers>
        <>
          {children}
          <Metrics />
        </>
      </Providers>
    </body>
  )
}
