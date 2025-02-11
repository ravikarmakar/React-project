import { Link } from "react-router-dom";

interface BookCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, image, price }) => {
  return (
    <div className="border border-gray-700 bg-gray-700/20 p-4 rounded-lg shadow-2xl">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover mb-2"
        />
        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>
      </Link>
    </div>
  );
};

export default BookCard;
