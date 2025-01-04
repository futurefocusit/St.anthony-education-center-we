"use client";
import { API_BASE_URL } from "@/api/api";
import withAdminAuth from "@/components/withAdminAuth";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Incident {
  id: number;
  name: string;
  email: string;
  location: number; 
  message: string;
  type: "incident" | "message"; 
  createdAt: string;
  status: "read" | "unread"; 
}

const IncidentRegistrationPage: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [filteredIncidents, setFilteredIncidents] = useState<Incident[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all"); 

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/message`); 
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
        incidents.filter((incident) => incident.type === activeTab)
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
  }, {} as Record<string, Incident[]>);

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
              activeTab === "incident"
                ? "border-blue-500 font-bold"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("incident")}
          >
            Incidents
          </button>
          <button
            className={`p-2 border-b-2 ${
              activeTab === "message"
                ? "border-blue-500 font-bold"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("message")}
          >
            Messages
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
              <th className="border-b border-gray-300 p-4">Type</th>
        
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
                    <td className="border-b border-gray-300 p-4">
                      {incident.message}
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      {incident.type}
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
