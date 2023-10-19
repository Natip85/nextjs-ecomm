import Container from "@/src/components/Container";
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/src/actions/getProducts";
import getCurrentUser from "@/src/actions/getCurrentUser";
import NullData from "@/src/components/NullData";

const ManageProducts = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops Access Denied" />;
  }
  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
