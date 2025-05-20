import AuthForm from "./authForm";
import LoginForm from "./loginForm";

const Login = () => {
    return (
        <main className="bg-[#FFFCF4] py-10 mt-[185px]">
            <AuthForm  pathName="REGISTER" pathURL='/register'>
                <LoginForm />
            </AuthForm>
        </main>
    );
};

export default Login;