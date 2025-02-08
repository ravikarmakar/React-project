import { FaUserCircle } from "react-icons/fa";

type UserCardProps = {
  person: {
    name: string;
    following: boolean;
  };
};

const UserCard = ({ person }: UserCardProps) => {
  return (
    <div className="flex justify-between items-center">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{person.name}</span>
      </section>

      <button
        className={`px-4 py-1 text-sm rounded-full ${
          person.following ? "bg-black text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {person.following ? "following" : "follow"}
      </button>
    </div>
  );
};

export default UserCard;
