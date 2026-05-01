import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  Edit3,
  Eye,
  Trash2,
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Swal from "sweetalert2";
import { Editor } from "@tinymce/tinymce-react";
import parse from "html-react-parser";
import moment from "moment";
import { fetchPosts, createPost, updatePost, deletePost } from "../../API/blog";

export default function ManageBlog() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(
    () => localStorage.getItem("cms-auth") === "true",
  );
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    _id: "",
    id: "",
    title: "",
    category: "News",
    content: "",
    image: "",
    tags: "",
  });

  useEffect(() => {
    if (!authenticated) {
      navigate("/cms/login", { replace: true });
    }
  }, [authenticated, navigate]);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const postsData = await fetchPosts();
        setPosts(postsData.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const isEditing = modalMode === "edit";

  const resetForm = () => {
    setForm({
      _id: "",
      id: "",
      title: "",
      category: "News",
      content: "",
      imageUrl: "",
      tags: "",
    });
  };

  const openModal = (mode, post = null) => {
    setModalMode(mode);
    setSelectedPost(post);
    if (mode === "create") {
      resetForm();
    } else if (mode === "edit" && post) {
      setForm({
        ...post,
        _id: post._id || post.id || "",
        imageUrl: post.imageUrl || "",
        tags: post.tags ? post.tags.join(", ") : "",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    resetForm();
    setModalMode("create");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setFile(file);
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm((current) => ({ ...current, imageUrl: reader.result || "" }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.content || !form.tags) {
      Swal.fire("Incomplete", "Please fill in all fields.", "warning");
      return;
    }
    try {
      const formattedPost = {
        ...form,
        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      };
      const formData = new FormData();
      formData.append("title", formattedPost.title);
      formData.append("category", formattedPost.category);
      formData.append("content", formattedPost.content);
      formData.append("tags", formattedPost.tags);
      formData.append("image", file);
      if (isEditing) {
        setPosts((current) =>
          current.map((post) =>
            post._id === form._id ? { ...post, ...formattedPost } : post,
          ),
        );
        Swal.fire("Updated!", "Blog post updated successfully.", "success");
      } else {
        console.log(formData.get("image"));
        const res = await createPost(formData);
        const createdPost = res.data?.data ?? res.data;
        setPosts((current) => [createdPost, ...current]);
        console.log("Post created:", createdPost);
        Swal.fire("Created!", "Blog post created successfully.", "success");
      }
    } catch (error) {
      console.error("Error saving post:", error);
      Swal.fire("Error!", "An error occurred while saving the post.", "error");
    }

    closeModal();
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete this post?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });
    if (confirm.isConfirmed) {
      try {
        await deletePost(id);
        setPosts((current) => current.filter((post) => post._id !== id));
        Swal.fire("Deleted!", "The post has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting post:", error);
        Swal.fire(
          "Error!",
          "An error occurred while deleting the post.",
          "error",
        );
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("cms-auth");
    setAuthenticated(false);
    navigate("/", { replace: true });
  };

  // Pagination calculations
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">
              CMS Dashboard
            </p>
            <h1 className="text-4xl font-bold text-[#00356B]">
              Manage Blog Posts
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openModal("create")}
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
            >
              <Plus className="w-4 h-4" />
              Create Post
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white p-8 shadow-lg"
        >
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-gray-600 mt-2">
                Posts are displayed below. Use the actions to view, edit, or
                delete.
              </p>
            </div>
            <div className="rounded-2xl bg-blue-50 px-4 py-2 text-blue-800">
              Total posts: <span className="font-semibold">{posts.length}</span>
            </div>
          </div>

          <div className="overflow-x-auto hidden md:block">
            <table className="min-w-full table-fixed divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Title
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Category
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 hidden md:table-cell">
                    Date
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {currentPosts.map((post) => (
                  <tr key={post._id}>
                    <td className="px-4 py-4 align-top max-w-[22rem] break-words">
                      <div
                        onClick={() => openModal("view", post)}
                        className="font-semibold text-gray-900 hover:cursor-pointer hover:text-[#00356B] transition"
                      >
                        {post.title}
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top text-gray-600">
                      {post.category}
                    </td>
                    <td className="px-4 py-4 align-top text-gray-600 hidden md:table-cell">
                      {moment(post.createdAt).format("MMMM Do YYYY")}
                    </td>
                    <td className="px-4 py-4 align-top whitespace-nowrap">
                      <div className="flex flex-nowrap gap-2">
                        <button
                          onClick={() => openModal("view", post)}
                          className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                        <button
                          onClick={() => openModal("edit", post)}
                          className="inline-flex items-center gap-2 rounded-2xl border border-[#00356B] bg-[#00356B] px-3 py-2 text-sm font-semibold text-white hover:bg-[#002a55] transition"
                        >
                          <Edit3 className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="inline-flex items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 hover:bg-red-100 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {posts.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No posts yet. Click "Create Post" to add the first entry.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="block md:hidden space-y-4">
            {currentPosts.map((post) => (
              <div
                key={post._id}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold text-gray-900 text-lg leading-tight break-words hover:cursor-pointer hover:text-[#00356B] transition"
                      onClick={() => openModal("view", post)}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 break-words">
                      {post.category} • {post.author} •{" "}
                      {moment(post.createdAt).format("MMM D, YYYY")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4 sm:flex-row">
                  <button
                    onClick={() => openModal("view", post)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition sm:flex-1 justify-center"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button
                    onClick={() => openModal("edit", post)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-[#00356B] bg-[#00356B] px-3 py-2 text-sm font-semibold text-white hover:bg-[#002a55] transition flex-1 justify-center"
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="inline-flex items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 hover:bg-red-100 transition sm:flex-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {posts.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No posts yet. Click "Create Post" to add the first entry.
              </div>
            )}
          </div>

          {posts.length > 0 && (
            <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold">{indexOfFirstPost + 1}</span> to{" "}
                <span className="font-semibold">
                  {Math.min(indexOfLastPost, posts.length)}
                </span>{" "}
                of <span className="font-semibold">{posts.length}</span> posts
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`min-w-10 rounded-2xl px-3 py-2 text-sm font-semibold transition ${
                          currentPage === pageNumber
                            ? "bg-[#00356B] text-white"
                            : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    ),
                  )}
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-[95vw] sm:max-w-xl rounded-[2rem] bg-white p-4 sm:p-5 shadow-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm  "></p>
                <h2 className="mt-2 text-2xl font-bold uppercase  text-[#00356B] tracking-[0.1em]">
                  {modalMode === "create" && "Create New Post"}
                  {modalMode === "edit" && "Edit Post"}
                  {modalMode === "view" && "View Post"}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalMode === "view" ? (
              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-50 p-4 overflow-x-auto">
                  <p className="text-sm font-semibold text-[#00356B]">
                    {selectedPost?.category}
                  </p>
                  {selectedPost?.imageUrl && (
                    <img
                      src={selectedPost.imageUrl}
                      alt={selectedPost.title}
                      className="mt-4 h-52 w-full rounded-3xl object-cover"
                    />
                  )}
                  <div className="mt-4 text-gray-700 whitespace-pre-line break-words max-w-full">
                    {parse(selectedPost?.content)}
                  </div>
                  {selectedPost?.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Author</p>
                    <p className="mt-2 font-semibold text-gray-900">
                      {selectedPost?.author}
                    </p>
                  </div>
                  <div className="rounded-3xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Published</p>
                    <p className="mt-2 font-semibold text-gray-900">
                      {moment(selectedPost?.createdAt).format("MMMM Do YYYY")}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Title
                  </label>
                  <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-[#00356B] focus:outline-none"
                    placeholder="Enter your blog title"
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-[#00356B] focus:outline-none"
                    >
                      <option>News</option>
                      <option>Education</option>
                      <option>Research</option>
                      <option>Events</option>
                      <option>Alumni</option>
                      <option>Campus Life</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Post image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#00356B] focus:outline-none"
                    />
                    {form.imageUrl && (
                      <img
                        src={form.imageUrl}
                        alt="Blog preview"
                        className="mt-3 h-32 w-full rounded-3xl object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Tags
                    </label>
                    <input
                      name="tags"
                      value={form.tags}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-[#00356B] focus:outline-none"
                      placeholder="Add comma-separated tags"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Content
                  </label>
                  <Editor
                    key={form._id || "new"}
                    tinymceScriptSrc="/tinymce/tinymce.min.js"
                    licenseKey="gpl"
                    onInit={(_evt, editor) => (editorRef.current = editor)}
                    initialValue={
                      form.content || "Type or Paste blog post here ..."
                    }
                    init={{
                      height: 300,
                      menubar: true,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "preview",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                    onEditorChange={(content) =>
                      setForm({
                        ...form,
                        content: content,
                      })
                    }
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
                  >
                    {isEditing ? "Update Post" : "Create Post"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
