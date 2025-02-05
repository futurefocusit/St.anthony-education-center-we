"use client";
import withAdminAuth from "@/components/withAdminAuth";
import { BASE_URL } from "@/context/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Message {
  id: number;
  name: string;
  email: string;
  location: number; 
  message: string;
  createdAt: string;
  status: "read" | "unread"; 
}

const IncidentRegistrationPage: React.FC = () => {
  const [incidents, setIncidents] = useState<Message[]>([]);
  const [filteredIncidents, setFilteredIncidents] = useState<Message[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all"); 

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/message`); 
        if (!response) {
        }

        setIncidents(response.data);
        setFilteredIncidents(response.data); 
      } catch (error) {
        toast.error("Failed to fetch incidents. Check internet connection.");
        throw error;

      }
    };

    fetchIncidents();
  }, []);

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredIncidents(incidents);
    } else {
      setFilteredIncidents(
        incidents.filter((incident) => incident.status === activeTab)
      );
    }
  }, [activeTab, incidents]);

  const groupedIncidents = filteredIncidents.reduce((acc, incident) => {
    const date = new Date(incident.createdAt).toLocaleDateString(); // Format date
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(incident);
    return acc;
  }, {} as Record<string, Message[]>);

  return (
    <div>
      <div className="py-4">
        <div className="flex space-x-4">
          <button
            className={`p-2 border-b-2 ${
              activeTab === "all"
                ? "border-blue-500 font-bold"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`p-2 border-b-2 ${
              activeTab === "read"
                ? "border-blue-500 font-bold"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("read")}
          >
            Read
          </button>
          <button
            className={`p-2 border-b-2 ${
              activeTab === "unread"
                ? "border-blue-500 font-bold"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("unread")}
          >
       Unread
          </button>
        </div>
      </div>
      <div className="overflow-x-auto py-10">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border-b border-gray-300 p-4">Name</th>
              <th className="border-b border-gray-300 p-4">Email</th>
              <th className="border-b border-gray-300 p-4">Location</th>
              <th className="border-b border-gray-300 p-4">Message</th>
              <th className="border-b border-gray-300 p-4">Status</th>
        
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedIncidents).map(([date, incidents]) => (
              <React.Fragment key={date}>
                <tr>
                  <td
                    colSpan={7}
                    className="font-bold text-left p-2 bg-gray-100"
                  >
                    {date}
                  </td>
                </tr>
                {incidents.map((incident) => (
                  <tr key={incident.id}>
                    <td className="border-b border-gray-300 p-4">
                      {incident.name}
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      {incident.email}
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      {incident.location}
                    </td>
                    <td className="border-b max-w text-wrap border-gray-300 p-4">
                      {incident.message}
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      {incident.status}
                    </td>
                    
                  
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withAdminAuth(IncidentRegistrationPage);
