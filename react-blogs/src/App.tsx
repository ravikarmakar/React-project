import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./component/Navigation";
import PeopleToFollow from "./component/PeopleToFollow";
import TopicList from "./component/TopicList";
import TrendsList from "./component/TrendsList";
import Modal from "./component/Modal";
import { useState } from "react";
import { Blog } from "./types";
import BlogForm from "./component/BlogForm";
import ArticleList from "./component/ArticleList";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBolg = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Navigation />

      <div className="flex justify-center">
        <section className="mx-auto p-6">
          <div>
            <button
              onClick={openModalForNewBolg}
              className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 mb-4 rounded cursor-pointer"
            >
              Add New Blog <IoMdAddCircle className="ml-[0.5rem]" />
            </button>

            {/* Artical List  */}
            <ArticleList onEdit={openModalForEdit} />

            {isModalOpen && (
              <Modal onClose={() => setIsModalOpen(false)}>
                <BlogForm
                  onClose={() => setIsModalOpen(false)}
                  existingBlog={editingBlog}
                />
              </Modal>
            )}
          </div>
        </section>

        {/* main area */}

        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendsList />
          <TopicList />
        </div>
      </div>
    </div>
  );
};

export default App;
