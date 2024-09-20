'use client'
import { Project } from "@/types/types";
import React, { useState, useEffect } from "react";


const ProjectsAdmin: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Partial<Project>>({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await fetch("/api/projects");
    const data = await response.json();
    setProjects(data);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCurrentProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isEditing
      ? `/api/projects/${currentProject._id}`
      : "/api/projects";
    const method = isEditing ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentProject),
    });

    fetchProjects();
    setCurrentProject({});
    setIsEditing(false);
  };

  const handleEdit = (project: Project) => {
    setCurrentProject(project);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    fetchProjects();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Projects</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="title"
          value={currentProject.title || ""}
          onChange={handleInputChange}
          placeholder="Project Title"
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          name="description"
          value={currentProject.content || ""}
          onChange={handleInputChange}
          placeholder="Project Description"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="image"
          value={currentProject.image || ""}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Update Project" : "Create Project"}
        </button>
      </form>

      <div>
        {projects.map((project) => (
          <div key={project._id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p>{project.content.substring(0, 100)}...</p>
            <button
              onClick={() => handleEdit(project)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(project._id)}
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

export default ProjectsAdmin;
