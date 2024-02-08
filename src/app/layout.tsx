import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/shared/style/style.scss";
import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import Metrics from './metrics';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Аналитика маркетплейса KazanExpress / Магнит Маркет',
  description: 'Анализ продаж конкурентов и поиск прибыльных товаров на маркетплейсах. Находите прибыльные товары и ниши на KazanExpress/Магнит Маркет',
  keywords: "kazanexpress, KE, ke, KazanExpress, доставка за 1 день, аналитика KazanExpress, Аналитика KazanExpress, KazanExpress Аналитика, Магнит Маркет, Магнит KazanExpress, Магнит, Магнит-Маркет Magnit Market, Magnit-Market, Магнит-маркет аналитика, Магнит маркет аналитика, магнит аналитика, wb аналитика, ozon аналитика, marketdb, аналитика магнит маркет",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://marketdb.ru/" />
        <meta property="og:site_name" content="Marketdb" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Аналитика маркетплейса KazanExpress / Магнит Маркет" />
        <meta property="og:description" content="Анализ продаж конкурентов и поиск прибыльных товаров на маркетплейсах. Находите прибыльные товары и ниши на KazanExpress/Магнит Маркет"></meta>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Metrics />
      </body>
    </html>
  )
}
