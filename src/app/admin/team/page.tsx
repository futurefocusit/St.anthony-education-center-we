'use client'
import { Team } from "@/types/types";
import React, { useState, useEffect } from "react";


const TeamAdmin: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<Team[]>([]);
  const [currentMember, setCurrentMember] = useState<Partial<Team>>({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    const response = await fetch("/api/team");
    const data = await response.json();
    setTeamMembers(data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isEditing ? `/api/team/${currentMember._id}` : "/api/team";
    const method = isEditing ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentMember),
    });

    fetchTeamMembers();
    setCurrentMember({});
    setIsEditing(false);
  };

  const handleEdit = (member: Team) => {
    setCurrentMember(member);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/team/${id}`, { method: "DELETE" });
    fetchTeamMembers();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Team</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="name"
          value={currentMember.name || ""}
          onChange={handleInputChange}
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="role"
          value={currentMember.role || ""}
          onChange={handleInputChange}
          placeholder="Role"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="image"
          value={currentMember.image || ""}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="linkedInProfile"
          value={currentMember.linkedInProfile || ""}
          onChange={handleInputChange}
          placeholder="LinkedIn Profile"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="instagramProfile"
          value={currentMember.instagramProfile || ""}
          onChange={handleInputChange}
          placeholder="Instagram Profile"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="twiterProfile"
          value={currentMember.twiterProfile || ""}
          onChange={handleInputChange}
          placeholder="Twitter Profile"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Update Team Member" : "Add Team Member"}
        </button>
      </form>

      <div>
        {teamMembers.map((member) => (
          <div key={member._id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p>{member.role}</p>
            <button
              onClick={() => handleEdit(member)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(member._id)}
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

export default TeamAdmin;
