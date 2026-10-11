import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { PageTransition } from './Motion';
import FloatingWhatsApp from './FloatingWhatsApp';
import GoToTop from './GoToTop';
// import ChatAgent from './ChatAgent';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  const defaultTitle = 'Kingdom Spices Herbs — Pure Organic Herbs, Spices & Seeds Exporter';
  const defaultDescription = 'Kingdom Spices Herbs is a trusted global exporter of pure organic medicinal herbs, spices, legumes, and seeds cultivated with care for international markets.';

  return (
    <>
      <Head>
        <title>{title ? `${title} | Kingdom Spices Herbs` : defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/logo/favicon.png" />
      </Head>
      <div className="min-h-screen flex flex-col font-sans bg-white text-[#181818] selection:bg-[#5B8C51] selection:text-white dark:bg-[#0d110d] dark:text-[#edf2ea]">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <GoToTop />
        {/* <ChatAgent /> */}
      </div>
    </>
  );
};

export default Layout;
