import Image from "next/image";
import serviceLogo from "@/assets/services.png";
import Link from "next/link";

const Services = () => {
    return (
        <section className="wrapper grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo} />
                <p className="md:text-lg font-semibold text-center">Fast Delivery</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo} />
                <p className="md:text-lg font-semibold text-center">Fast Delivery</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo} />
                <p className="md:text-lg font-semibold text-center">Fast Delivery</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo} />
                <p className="md:text-lg font-semibold text-center">Fast Delivery</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo} />
                <p className="md:text-lg font-semibold text-center">Fast Delivery</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo} />
                <p className="md:text-lg font-semibold text-center">Fast Delivery</p>
            </Link>
        </section>
    );
};

export default Services;