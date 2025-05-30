import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({children}) => {
    const session = await auth();

    if(!session?.user){
        redirect('/login')
    }

    return (
        <>
            {children}
        </>
    );
};

export default ProtectedLayout;