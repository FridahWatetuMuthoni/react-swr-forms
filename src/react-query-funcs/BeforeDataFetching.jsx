import axios from "axios";
import { useEffect, useState } from "react";

function BeforeDataFetching() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      const data = response.data;
      if (response.status === 200) {
        setProducts(data.products);
      }
    };
    fetchProducts();
  }, []);
  console.log(products);
  return <div>BeforeDataFetching</div>;
}

export default BeforeDataFetching;
