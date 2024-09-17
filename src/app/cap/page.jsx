import Container from "@/components/Container";
import ProductCarts from "@/components/ProductCarts";
import { fetchData } from "@/data";
const CapPage = async () => {
      const endPoint = "https://shopping-data-r4cq.vercel.app/shopping";
      const product = await fetchData(endPoint);
      const filterData = product.filter((item) => item.category === "Cap");
      return (
            <Container className={"py-4"}>
                  <h1 className="lg:text-4xl text-xl font-semibold text-gray-800 tracking-wide">All Trending Cap Collection</h1>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-4 lg:w-[1250px] mt-8">
                        {filterData.map((item) => (
                              <ProductCarts key={item.id} product={item} />
                        ))}
                  </div>
            </Container>
      );
};

export default CapPage;