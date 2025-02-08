import { createContext, useContext, useState } from "react";
import { Blog } from "../types";

interface BlogContextTypes {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextTypes | undefined>(undefined);

const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (blog: Blog) => {
    setBlogs([...blogs, blog]);
  };

  const updateBlog = (updateBlog: Blog) => {
    setBlogs(
      blogs.map((blog) => (blog.id === updateBlog.id ? updateBlog : blog))
    );
  };

  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBlogs = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }

  return context;
};

export default BlogProvider;
