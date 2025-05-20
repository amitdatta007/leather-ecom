import { getBrands, getCategories } from "@/actions/products";
import Banner from "@/components/home/Banner";
import Campaign from "@/components/home/campaign";
import FeatureCategories from "@/components/home/featureCategories";
import FeatureProducts from "@/components/home/FeatureProducts";
import ProductByCategories from "@/components/home/productByCategories";
import SecondaryBanner from "@/components/home/secondaryBanner";
import Services from "@/components/home/services";
import ShowProductsInSlide from "@/components/home/ShowProductsInSlide";
import TopBrands from "@/components/home/topBrands";

const HomePage = async () => {

    const [categories, brands] = await Promise.all([
        getCategories(),
        getBrands(),
    ]);

    return (
        <main className="bg-[#FFFCF4] mt-[185px]">
            <Banner />
            <Services />
            <Campaign />
            <FeatureProducts />
            <FeatureCategories categories={categories?.data} />
            <SecondaryBanner />
            <ShowProductsInSlide />
            <ShowProductsInSlide />
            <ShowProductsInSlide />
            <ProductByCategories />
            <TopBrands brands={brands?.data} />
        </main>
    );
};

export default HomePage;