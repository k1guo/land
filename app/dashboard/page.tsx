import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Dashboard from "../../components/Dashboard";

interface PageProps{
    params:{
        fileid:string
    }
}
const Page = async({params}:PageProps) => {
    
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user||!user.id) redirect('/auth-callback?.origin=dashboard')


    return ( 
        <Dashboard />
    );
}
 
export default Page;