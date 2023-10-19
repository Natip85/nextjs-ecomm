import Container from "@/src/components/Container";
import NullData from "@/src/components/NullData";
import OrderDetails from "./OrderDetails";
import getOrderById from "@/src/actions/getOrderById";

interface IParams {
  orderId?: string;
}

const Order = async ({ params }: { params: IParams }) => {
  const order = await getOrderById(params);

  if (!order) {
    return <NullData title="Oops! Order with the given id does not exist." />;
  }

  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default Order;
