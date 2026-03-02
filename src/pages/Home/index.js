import Hero from "../../components/home/hero";
import RecentProducts from "../../components/home/recentProducts";
import Information from "../../components/home/information";
import ProductCategories from "../../components/home/ProductCategories";
import SaleProducts from "../../components/home/saleProducts";
import TopBrand from "../../components/home/topBrand";
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