import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get<Product>(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error to fetch single Product Data", error);
      });
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-5 w-[60%]">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2 bg-black text-gray-400 hover:text-gray-300 cursor-pointer rounded"
      >
        Back
      </button>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-[50%] h-auto mb-5"
      />
      <h1 className="text-2xl mb-4 text-gray-300 font-bold">{product.title}</h1>
      <p className="mb-4 text-gray-500 w-[70%]">{product.description}</p>
      <div className="flex">
        <p>Price: ${product.price}</p>
        <p className="ml-10">Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductPage;
