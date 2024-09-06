import { auth, signOut } from "@/auth";


const SettingsPage = async () => {
    const session = await auth();
    return ( 
        <div className="text-4xl font-bold">
            {JSON.stringify(session)}
            <form action={async () => {
                "use server";
                await signOut();
            }}>
                <button type="submit">
                    Logout
                </button>
            </form>
        </div>
     );
}
 
export default SettingsPage;