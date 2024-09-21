'use client'
import { Blog } from "@/types/types";
import React, { useState, useEffect } from "react";

const BlogsAdmin: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentBlog, setCurrentBlog] = useState<Partial<Blog>>({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await fetch("/api/blogs");
    const data = await response.json();
    setBlogs(data);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCurrentBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isEditing ? `/api/blogs/${currentBlog._id}` : "/api/blogs";
    const method = isEditing ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentBlog),
    });

    fetchBlogs();
    setCurrentBlog({});
    setIsEditing(false);
  };

  const handleEdit = (blog: Blog) => {
    setCurrentBlog(blog);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    fetchBlogs();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Blogs</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="title"
          value={currentBlog.title || ""}
          onChange={handleInputChange}
          placeholder="Blog Title"
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          name="content"
          value={currentBlog.content || ""}
          onChange={handleInputChange}
          placeholder="Blog Content"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="image"
          value={currentBlog.image || ""}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Update Blog" : "Create Blog"}
        </button>
      </form>

      <div>
        {blogs.map((blog) => (
          <div key={blog._id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p>{blog.content.substring(0, 100)}...</p>
            <button
              onClick={() => handleEdit(blog)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(blog._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsAdmin;
