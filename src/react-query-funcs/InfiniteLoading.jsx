import { useMore } from "./queries";
import Product from "./Product";

function InfiniteLoading() {
  const productQuery = useMore();

  console.log(productQuery);

  if (productQuery.isPending) {
    return <span>loading ...</span>;
  }

  if (productQuery.error) {
    return <span>{`An error has occured: ${error.message}`}</span>;
  }
  const products = productQuery.data.pages[0].products;
  console.log(products);

  const handleLoadMore = () => {
    productQuery.fetchNextPage();
  };

  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product) => (
          <Product product={product} key={product.title} />
        ))}
      </section>
      <section className="flex items-center justify-center py-5">
        <button
          onClick={handleLoadMore}
          className=" ring-1  rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200  hover:text-muted hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
          type="button"
          disabled={
            !productQuery.hasNextPage || productQuery.isFetchingNextPage
          }
        >
          {productQuery.isFetchingNextPage
            ? "Loading More ..."
            : productQuery.hasNextPage
            ? "Load More"
            : "No More Data"}
        </button>
      </section>
    </>
  );
}

export default InfiniteLoading;
