import getCurrentUser from "@/src/actions/getCurrentUser";
import Container from "@/src/components/Container";
import CartClient from "@/src/components/cart/CartClient";

const Cart = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="pt-8">
      <Container>
        <CartClient currentUser={currentUser} />
      </Container>
    </div>
  );
};

export default Cart;
