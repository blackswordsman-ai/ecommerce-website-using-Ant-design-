import Hero from "../../components/home/Hero";
import RecentProducts from "../../components/home/RecentProducts";
import Information from "../../components/home/Information";
import ProductCategories from "../../components/home/ProductCategories";
import SaleProducts from "../../components/home/SaleProducts";
import TopBrand from "../../components/home/TopBrand";
import Newsletter from "../../components/home/Newsletter";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <RecentProducts />
      <Information />
      <ProductCategories />
      <SaleProducts />
      <TopBrand />
      <Newsletter />
    </div>
  );
}


export default Home;