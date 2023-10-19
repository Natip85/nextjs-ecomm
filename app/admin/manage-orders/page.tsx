import Container from "@/src/components/Container";
import getCurrentUser from "@/src/actions/getCurrentUser";
import NullData from "@/src/components/NullData";
import getOrders from "@/src/actions/getOrders";
import ManageOrdersClient from "./ManageOrdersClient";

const ManageOrders = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops Access Denied" />;
  }
  return (
    <div className="pt-8">
      <Container>
        <ManageOrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrders;
