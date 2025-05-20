import policy from '@/assets/policy.png';
import Image from 'next/image';

const PoliciesOverview = () => {
    return (
        <section className="my-10 wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="shadow py-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg">
                <Image alt='' src={policy} className='w-14 h-14' />
                <p className='text-lg font-semibold text-center'>Terms & Conditions</p>
            </div>
            <div className="shadow py-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg">
                <Image alt='' src={policy} className='w-14 h-14' />
                <p className='text-lg font-semibold text-center'>Terms & Conditions</p>
            </div>
            <div className="shadow py-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg">
                <Image alt='' src={policy} className='w-14 h-14' />
                <p className='text-lg font-semibold text-center'>Terms & Conditions</p>
            </div>
            <div className="shadow py-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg">
                <Image alt='' src={policy} className='w-14 h-14' />
                <p className='text-lg font-semibold text-center'>Terms & Conditions</p>
            </div>
        </section>
    );
};

export default PoliciesOverview;