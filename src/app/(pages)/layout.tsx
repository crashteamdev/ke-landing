import Footer from "@/shared/components/footer";
import Header from "@/shared/components/header";

const BlogLayout = ({children}: {children: React.ReactNode}) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header className="!static bg-[#1a1a1a]" />
          <div className="container flex-[1]">
            {children}
          </div>
        <Footer />
      </div>
    )
}

export default BlogLayout;