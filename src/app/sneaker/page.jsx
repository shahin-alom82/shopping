import Container from "@/components/Container";
import ProductCarts from "@/components/ProductCarts";
import { fetchData } from "@/data";
const SneakerPage = async () => {
      const endPoint = "https://shoppingapi.vercel.app/shopping";
      const product = await fetchData(endPoint);
      const filterData = product.filter((item) => item.category === "Men's Sneaker");
      return (
            <Container className={"py-4"}>
                  <h1 className="lg:text-4xl text-xl font-semibold text-gray-800 tracking-wide">All Trending Sneakers Collection</h1>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-4 lg:w-[1250px] mt-8">
                        {filterData.map((item) => (
                              <ProductCarts key={item.id} product={item} />
                        ))}
                  </div>
            </Container>
      );
};

export default SneakerPage;