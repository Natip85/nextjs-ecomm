import getCurrentUser from "@/src/actions/getCurrentUser";
import Container from "@/src/components/Container";
import FormWrap from "@/src/components/FormWrap";
import RegisterForm from "@/src/components/forms/RegisterForm";

const Register = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <FormWrap>
        <RegisterForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Register;
