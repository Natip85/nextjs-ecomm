import Container from "@/src/components/Container";
import FormWrap from "@/src/components/FormWrap";
import AddProductForm from "./AddProductForm";
import getCurrentUser from "@/src/actions/getCurrentUser";
import NullData from "@/src/components/NullData";

const AddProducts = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops Access Denied" />;
  }
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProducts;
