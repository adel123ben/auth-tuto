
interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayoute = ({
    children,
}: AuthLayoutProps) => {
    return ( 
        <div className="h-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
            {children}
        </div>
     );
}
 
export default AuthLayoute;