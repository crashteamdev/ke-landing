import dynamic from 'next/dynamic'

import MainScreen from '@/module/mainScreen'
import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import Posts from '@/module/postsScreen';
import { TelegramModule } from '@/module/TelegramModule';

const SubsScreen = dynamic(() => import('@/module/subsScreen'));
const PresentationSlider = dynamic(() => import('@/module/presentation'));
const ServicesScreen = dynamic(() => import('@/module/services'));
// const Posts = dynamic(() => import('@/module/postsScreen'));
const FeaturesScreen = dynamic(() => import('@/module/featuresScreen'));
const DeveloperScreen = dynamic(() => import('@/module/developerForm'));
const AboutServicesScreen = dynamic(() => import('@/module/aboutServicesScreen'));
const AboutScreen = dynamic(() => import('@/module/about'));
const Reviews = dynamic(() => import('@/module/Reviews'));
const Faq = dynamic(() => import('@/module/Faq'));

export default function Home() {
  return (
    <>
      <Header />
      <MainScreen />
      <TelegramModule />
      <PresentationSlider />
      <ServicesScreen />
      <AboutServicesScreen />
      <AboutScreen />
      <FeaturesScreen />
      <SubsScreen />
      <Reviews />
      <Posts />
      <Faq />
      <DeveloperScreen />
      <Footer />
    </>
  )
}
