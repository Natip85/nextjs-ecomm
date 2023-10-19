import Container from "@/src/components/Container";
import OrdersClient from "./OrderClient";
import getCurrentUser from "@/src/actions/getCurrentUser";
import getOrdersByUserId from "@/src/actions/getOrdersByUserId";
import NullData from "@/src/components/NullData";

const Orders = async () => {
  const user = await getCurrentUser();
  if (!user) {
    return <NullData title="Oops! Access denied." />;
  }

  const orders = await getOrdersByUserId(user.id);
  if (!orders) {
    return <NullData title="No orders yet." />;
  }
  return (
    <div className="pt-8">
      <Container>
        <OrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
