import AboutScreen from "../components/about";
import AboutServicesScreen from "../components/aboutServicesScreen";
import DeveloperScreen from "../components/developerForm";
import FeaturesScreen from "../components/featuresScreen";
import MainScreen from "../components/mainScreen";
import Posts from "../components/postsScreen";
import PresentationSlider from "../components/presentation";
import ServicesScreen from "../components/services";
import SubsScreen from "../components/subsScreen";
import Layout from "../layouts";

const HomePage = () => {
    return (
        <Layout>
            <MainScreen />
            {/* <CompanySlider /> */}
            <PresentationSlider />
            <ServicesScreen />
            <AboutServicesScreen />
            <AboutScreen />

            <FeaturesScreen />

            <SubsScreen />
            <Posts />
            {/* <DeveloperScreen /> */}
        </Layout>
    )
}

export default HomePage;