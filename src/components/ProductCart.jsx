import Container from "./Container";
import { fetchData } from "@/data";
import ProductCarts from "./ProductCarts";

const ProductCart = async () => {
      const endPoind = "https://shoppingapi.vercel.app/shopping"
      const product = await fetchData(endPoind)

      return (
            <div className="lg:py-10 py-4">
                  <Container>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-4">
                              {
                                    product.map((item, index) => <ProductCarts key={index} product={item} />)
                              }

                        </div>
                  </Container>
            </div>
      );
};

export default ProductCart;
