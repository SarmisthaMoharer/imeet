import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">{children}</main> {/* Adjust pt-16 based on your navbar height */}
    </>
  );
};

export default Layout;