import Image from "next/image";
import logo from "@/assets/logo.png";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import getImageUrl from "@/utils/getImageUrl";

const Footer = ({ settings }) => {

    return (
        <footer className="bg-[#212129]">
            <section className="border-b border-white py-10">
                <div className="wrapper flex flex-col md:flex-row gap-10 justify-between">
                    <div className="flex flex-col gap-4 w-full md:w-[50%] xl:w-[45%]">
                        <Image
                            src={getImageUrl(settings?.logo)}
                            width={80}
                            height={200}
                            alt="logo"
                            className="w-24"
                        />
                        <p className="text-text-muted-50 text-[15px]">{settings?.short_description}</p>
                        <h3 className="text-white text-xl font-bold">Follow Us</h3>
                        <div className="flex gap-1">
                            <Link href='' className="w-[30px] h-[30px] rounded-full bg-[#38538D] text-white flex justify-center items-center">
                                <Facebook size={18} strokeWidth={1.5} />
                            </Link>
                            <Link href='' className="w-[30px] h-[30px] rounded-full bg-[#030304] text-white flex justify-center items-center">
                                <Facebook size={18} strokeWidth={1.5} />
                            </Link>
                            <Link href='' className="w-[30px] h-[30px] rounded-full bg-[#AD3096] text-white flex justify-center items-center">
                                <Instagram size={18} strokeWidth={1.5} />
                            </Link>
                            <Link href='' className="w-[30px] h-[30px] rounded-full bg-[#38538D] text-white flex justify-center items-center">
                                <Facebook size={18} strokeWidth={1.5} />
                            </Link>
                            <Link href='' className="w-[30px] h-[30px] rounded-full bg-[#38538D] text-white flex justify-center items-center">
                                <Facebook size={18} strokeWidth={1.5} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-[40%] lg:w-[30%]">
                        <h3 className="text-white font-bold text-sm">Subscribe to our newsletter for regular updates about Offers, Coupons & more</h3>
                        <input type="email" className="focus:outline-none px-3 py-2 text-sm rounded-md" placeholder="Enter Your Email" />
                        <button className="bg-primary rounded-md text-sm font-semibold text-white p-3 hover:bg-primary-muted">SUBMIT</button>
                        <h3 className="text-white text-center text-sm">We value your privacy and will never send irrelevant information</h3>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[22px] font-bold text-text-muted-50">USEFUL LINKS</h3>
                        <div className="flex flex-col gap-3">
                            <Link className="text-white" href='/about-us'>Gift & Combo</Link>
                            <Link className="text-white" href=''>Fashon & Lifestyle</Link>
                            <Link className="text-white" href=''>Home Appliances</Link>
                            <Link className="text-white" href=''>Trimmer & Gromming Kits</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[22px] font-bold text-text-muted-50">USEFUL LINKS</h3>
                        <div className="flex flex-col gap-3">
                            <Link className="text-white" href=''>Gift & Combo</Link>
                            <Link className="text-white" href=''>Fashon & Lifestyle</Link>
                            <Link className="text-white" href=''>Home Appliances</Link>
                            <Link className="text-white" href=''>Trimmer & Gromming Kits</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[22px] font-bold text-text-muted-50">USEFUL LINKS</h3>
                        <div className="flex flex-col gap-3">
                            <Link className="text-white" href=''>Gift & Combo</Link>
                            <Link className="text-white" href=''>Fashon & Lifestyle</Link>
                            <Link className="text-white" href=''>Home Appliances</Link>
                            <Link className="text-white" href=''>Trimmer & Gromming Kits</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[22px] font-bold text-text-muted-50">USEFUL LINKS</h3>
                        <div className="flex flex-col gap-3">
                            <Link className="text-white" href=''>Gift & Combo</Link>
                            <Link className="text-white" href=''>Fashon & Lifestyle</Link>
                            <Link className="text-white" href=''>Home Appliances</Link>
                            <Link className="text-white" href=''>Trimmer & Gromming Kits</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-6 bg-[#17171F]">
                <div className="wrapper text-text-muted-25">© 2025 | Jitben | All Rights Reserved.</div>
            </section>
        </footer>
    );
};

export default Footer;