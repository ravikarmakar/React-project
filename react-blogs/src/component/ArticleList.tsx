import { useBlogs } from "../shared/BlogContext";
import { Blog } from "../types";
import ArticleListCard from "./ArticleListCard";

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {
  const { blogs, deleteBlog } = useBlogs();

  return (
    <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <ArticleListCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
        />
      ))}
    </div>
  );
};

export default ArticleList;
