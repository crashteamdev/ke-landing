import { CallToAction } from '@/module/CallToAction'
import { Faq } from '@/module/Faq'
import { RepricerAbout } from '@/module/RepricerAbout'
import { Reviews } from '@/module/Reviews'
import { SellServices } from '@/module/SellServices'
import AboutScreen from '@/module/about'
import AboutServicesScreen from '@/module/aboutServicesScreen'
import CompanySlider from '@/module/company'
import DeveloperScreen from '@/module/developerForm'
import FeaturesScreen from '@/module/featuresScreen'
import MainScreen from '@/module/mainScreen'
import Posts from '@/module/postsScreen'
import PresentationSlider from '@/module/presentation'
import ServicesScreen from '@/module/services'
import SubsScreen from '@/module/subsScreen'

export default function Home() {
  return (
    <>
      <MainScreen />
      {/* <CompanySlider /> */}
      <PresentationSlider />
      <ServicesScreen />
      <AboutServicesScreen />
      <AboutScreen />
      <SellServices />
      <FeaturesScreen />
      <RepricerAbout />
      <SubsScreen />
      <Reviews />
      <Posts />
      <Faq />
      <DeveloperScreen />
    </>
  )
}
