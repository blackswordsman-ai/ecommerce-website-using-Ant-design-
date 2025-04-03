import Hero from "../components/home/hero";
import RecentProducts from "../components/home/recentProducts";
import Information from "../components/home/information";
import ProductCatogories from "../components/home/productCatogories";
import SaleProducts from "../components/home/saleProducts";
import TopBrand from "../components/home/topBrand";


function AppHome(){
    return(
        <div className="container">
            <Hero/>
            <RecentProducts/>
            <Information/>
            <ProductCatogories/>
            <SaleProducts/>
            <TopBrand/>
           
            
        </div>
    )
}

export default AppHome;