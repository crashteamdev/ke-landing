import { CallToAction } from '@/module/CallToAction'
import { RepricerAbout } from '@/module/RepricerAbout'
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

      <FeaturesScreen />
      <CallToAction />
      <RepricerAbout />
      <SubsScreen />
      <Posts />
      <DeveloperScreen />
    </>
  )
}
