import { getProductBySlug } from "@/actions/products";
import SingleProduct from "@/components/products/SingleProduct";

const SingleProductPage = async ({ params }) => {
    const product = await getProductBySlug(params?.slug);



    return (
        <main className="mt-[185px]">
            <SingleProduct product={product?.data} />
        </main>
    );
};

export default SingleProductPage;