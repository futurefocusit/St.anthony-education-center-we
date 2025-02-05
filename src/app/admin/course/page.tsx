"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import withAdminAuth from "@/components/withAdminAuth";
import { BASE_URL } from "@/context/api";
import Modal from "@/components/Modal";

interface Service {
  _id: string;
  image: string; // Icon name
  category: string;
  courses: string[];
}

const CoursePage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/course`);
      setServices(response.data);
      setError(null); // Clear error if fetch is successful
    } catch (error) {
      console.error("Error fetching services", error);
      setError("Failed to fetch services. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const formData = new FormData(e.currentTarget);
    const serviceData = {
      category: formData.get("title") as string,
      image: formData.get("image") as string,
      courses: (formData.get("subservices") as string)
        .split(",")
        .map((s) => s.trim()),
    };
    

    try {
      if (editingService) {
        await axios.put(
          `${BASE_URL}/course/${editingService._id}`,
          serviceData
        );
        setSuccessMessage("Service updated successfully!");
      } else {
        await axios.post(`${BASE_URL}/course`, serviceData);
        setSuccessMessage("Service added successfully!");
      }
      fetchServices();
      setIsModalOpen(false);
      setEditingService(null);
      
    } catch (error) {
      console.error("Error saving service", error);
      setError("Failed to save service. Please try again.");
    }
  };

  

  const handleEdit = (service: Service) => {
    setEditingService(service);
  
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      try {
        await axios.delete(`${BASE_URL}/course/${id}`);
        setSuccessMessage("Service deleted successfully!");
        fetchServices();
      } catch (error) {
        console.error("Error deleting service", error);
        setError("Failed to delete service. Please try again.");
      }
    }
  };

 

  return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Courses</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="
              bg-blue-500
             text-white px-4 py-2 rounded "
          >
            New Category
          </button>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            {error}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <div className="text-2xl">
                 <img src={service.image } alt="image" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mt-4">
                  {service.category}
                </h3>
                <ul className="mt-2">
                  {service.courses.map((course, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      - {course}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex justify-between">
                  <button
                    
                    onClick={() => handleEdit(service)}
                    className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md ${
                      "text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    }`}
                  >
                    Update
                  </button>
                  <button
                    
                    onClick={() => handleDelete(service._id)}
                    className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md ${
                      
                         "text-red-700 bg-red-100 hover:bg-red-200"
                    }`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingService(null);
           
          }}
        >
          <h2 className="text-xl font-bold mb-4">
            {editingService ? "Update" : "Add"} 
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              defaultValue={editingService?.category || ""}
              required
              placeholder="category Title"
              className="mb-2 w-full px-3 py-2 border rounded"
            />
            <textarea
              name="subservices"
              defaultValue={editingService?.courses.join(", ") || ""}
              required
              placeholder="courses (comma-separated)"
              className="mb-2 w-full px-3 py-2 border rounded"
              rows={4}
            />
            <input
              type="text"
              name="image"
              value={editingService?.image}
              required
              placeholder="image"
              className="mb-2 w-full px-3 py-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded"
            >
              {editingService ? "Update" : "Add"} 
            </button>
          </form>
        </Modal>
      </div>
  );
};

export default withAdminAuth(CoursePage);