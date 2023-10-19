import getCurrentUser from "@/src/actions/getCurrentUser";
import Container from "@/src/components/Container";
import FormWrap from "@/src/components/FormWrap";
import LoginForm from "@/src/components/forms/LoginForm";

const Login = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Login;
