import Header from "./header";
import Footer from "./footer";

interface IProps {
    children: React.ReactNode;

}

const Layout = ({
    children,
}: IProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

Layout.defaultProps = {

};

export default Layout;
