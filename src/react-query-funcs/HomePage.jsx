import { useProducts } from "./queries";
import { useCreateProduct, useUpdateProduct } from "./mutations";
import Product from "./Product";
import AddTodo from "./AddTodo";

function HomePage() {
  const {
    isPending,
    error,
    data: products,
    errorUpdateCount,
    fetchStatus,
    status,
    isFetching,
  } = useProducts();
  const createProduct = useCreateProduct();
  const updateProduct = useUpdateProduct();

  if (isPending) {
    return <span>loading ...</span>;
  }

  if (error) {
    return <span>{`An error has occured: ${error.message}`}</span>;
  }

  console.log(errorUpdateCount);
  console.log(`fetch status ---> ${fetchStatus}`);
  console.log(`status ---> ${status}`);
  console.log(`isFetching ---> ${isFetching}`);

  const handleCreate = () => {
    const newProduct = {
      title: "Yellow Jacket",
      description:
        "This yellow designer and durable jacket may launch between September, November",
      price: 1099,
      discountPercentage: 10.0,
      rating: 4.57,
      stock: 83,
      brand: "Gucci",
      category: "clothes",
      thumbnail:
        "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/6/1.png",
        "https://cdn.dummyjson.com/product-images/6/2.jpg",
        "https://cdn.dummyjson.com/product-images/6/3.png",
        "https://cdn.dummyjson.com/product-images/6/4.jpg",
      ],
    };

    const response = createProduct.mutate(newProduct);
    console.log(response);
  };

  const handleUpdate = () => {
    const updatedProduct = {
      title: "Yellow Jacket Upated",
      description:
        "This yellow designer and durable jacket may launch between September, November",
      price: 1099,
      discountPercentage: 10.0,
      rating: 4.57,
      stock: 83,
      brand: "Gucci",
      category: "clothes",
      thumbnail:
        "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/6/1.png",
        "https://cdn.dummyjson.com/product-images/6/2.jpg",
        "https://cdn.dummyjson.com/product-images/6/3.png",
        "https://cdn.dummyjson.com/product-images/6/4.jpg",
      ],
    };
    const response = createProduct.mutate(updatedProduct);
    console.log(response);
  };

  return (
    <>
      <section className="flex items-center justify-center gap-5">
        <button
          onClick={handleCreate}
          className=" ring-1  rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200  hover:text-muted hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
          type="button"
        >
          Create Todo
        </button>
        <button
          onClick={handleUpdate}
          className=" ring-1  rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200  hover:text-muted hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
          type="button"
        >
          Update Todo
        </button>
      </section>
      <section className="my-5">
        <AddTodo />
      </section>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product) => (
          <Product product={product} key={product.title} />
        ))}
      </section>
    </>
  );
}

export default HomePage;
