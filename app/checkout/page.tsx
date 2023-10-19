import Container from "@/src/components/Container";
import FormWrap from "@/src/components/FormWrap";
import CheckoutClient from "./CheckoutClient";

const Checkout = () => {
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <CheckoutClient />
        </FormWrap>
      </Container>
    </div>
  );
};

export default Checkout;
