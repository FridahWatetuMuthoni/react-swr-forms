import { useProjects } from "./queries";
import Product from "./Product";
import { useState } from "react";
import Pagination from "./Pagination";

function Projects() {
  const [page, setPage] = useState(3);
  const { error, isPending, data, isPlaceholderData, isFetching } =
    useProjects(page);

  if (isPending) {
    return <span>loading ...</span>;
  }

  if (error) {
    return <span>{`An error has occured: ${error.message}`}</span>;
  }
  console.log(data);
  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {data.products.map((product) => (
          <Product product={product} key={product.title} />
        ))}
      </section>
      <section className="w-full">
        <Pagination page={page} total={data.total} setPage={setPage} />
      </section>
    </>
  );
}

export default Projects;
