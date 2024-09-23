import axios from "axios";
import React, { useState } from "react";

interface Service {
  name: string;
  description: string;
}

interface ChatbotProps {
  initialMessage?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({
  initialMessage = "How can I assist you today?",
}) => {
  const [message, setMessage] = useState(initialMessage);
  const [chatResponse, setChatResponse] = useState<{
    reply: string;
    recommendedServices: Service[];
  }>({
    reply: "",
    recommendedServices: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post(
      "https://cyberpro-web-bn.onrender.com/chat/",
      {
        message,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.data;
    setChatResponse(data);
    setMessage("");
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            {initialMessage}
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      <div className="rounded border border-gray-300 p-4">
        <h3 className="text-gray-700 font-bold mb-2">Chatbot Response</h3>
        <p className="text-gray-700 mb-4">{chatResponse.reply}</p>
        {chatResponse.recommendedServices.length > 0 && (
          <>
            <h3 className="text-gray-700 font-bold mb-2">
              Recommended Services:
            </h3>
            <ul className="list-disc pl-6">
              {chatResponse.recommendedServices.map((service) => (
                <li key={service.name} className="text-gray-700">
                  <span className="font-bold">{service.name}:</span>{" "}
                  {service.description}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
