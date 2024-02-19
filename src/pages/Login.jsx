import Container from "../ui/Container";
import LoginForm from "../ui/LoginForm";

function Login() {
  return (
    <div className="relative min-h-dvh min-w-full bg-background3 bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="flex flex-col items-center py-40">
          <h2 className="text-stone-200">Log in to your account</h2>

          <LoginForm />
        </div>
      </Container>
    </div>
  );
}

export default Login;
