import Container from "@/src/components/Container";
import ProductDetails from "@/src/components/products/ProductDetails";
import ListRating from "@/src/components/ListRating";
import getProductById from "@/src/actions/getProductById";
import NullData from "@/src/components/NullData";
import getCurrentUser from "@/src/actions/getCurrentUser";
import AddRating from "./AddRating";

interface IParams {
  productId?: string;
}
const Product = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);
  const user = await getCurrentUser();
  if (!product) {
    return <NullData title="Product does not exist" />;
  }
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user} />
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
