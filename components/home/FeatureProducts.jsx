import ProductCard from "../products/ProductCard";
import SectionTitle from "../shared/others/SectionTitle";

const FeatureProducts = () => {
    return (
        <section className="mt-10 wrapper flex flex-col gap-6">
            <SectionTitle title='FEATURE PRODUCTS' />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
};

export default FeatureProducts;