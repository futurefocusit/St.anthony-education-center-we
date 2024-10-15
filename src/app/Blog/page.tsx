"use client";
import { BASE_URL } from "@/context/api";
import { useAppContext } from "@/context/appContext";
import { Blog } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const BlogPage = () => {
  const { language, theme } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [blog, setBlog] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [, setIsLoadingBlog] = useState(false);

  const fetchData = async (
    endpoint: string,
    //@ts-expect-error error
    setStateFunc: React.Dispatch<React.SetStateAction<>>,
    setLoadingFunc: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoadingFunc(true);
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      setStateFunc(response.data);
      setFilteredBlogs(response.data); // Initialize filtered blogs with all blogs
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    } finally {
      setLoadingFunc(false);
    }
  };

  useEffect(() => {
    fetchData("blog", setBlog, setIsLoadingBlog);
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredBlogs(blog);
    } else {
      const filtered = blog.filter(
        (blogPost) =>
          blogPost.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blogPost.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  }, [searchQuery, blog]);

  return (
    <div className={`${theme === "dark" ? "bg-gray-800 " : "bg-white"} `}>
      <section
        className={`h-fit lg:h-screen pb-10 relative  pt-52 -mb-32 lg:pl-[50px] pl-[5px] space-y-3 lg:space-y-5 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-300"
        }`}
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <hr className="bg-[#F39C12] h-[11px] w-[163px] top-[128px] left-[179px] border-0" />
        <h1 className="font-Merriweather San font-bold text-[32px]">
          {language === "en" ? "Our Blog" : "Notre Blog"}
        </h1>

        <p className="text-[14px] lg:text-[20px] w-full lg:w-[500px] pb-5 lg:pb-20 pr-20 lg:pr-0">
          {language === "en"
            ? "We're excited to share the latest insights, tips, and industry updates with you. Whether you're here for cybersecurity advice, consultancy guidance, or the latest in camera systems, we've got you covered. Stay informed, stay secure, and enjoy exploring our articles!"
            : "Nous sommes ravis de partager avec vous les dernières informations, conseils et mises à jour du secteur. Que vous soyez ici pour des conseils en matière de cybersécurité, des conseils ou les derniers systèmes de caméra, nous avons ce qu'il vous faut. Restez informé, restez en sécurité et profitez de nos articles !"}
        </p>

        <div className="z-30 flex items-center lg:w-[737px] h-10 lg:h-[65px] gap-5 overflow-hidden border rounded-lg border-white bg-[#1B396E]">
          <CiSearch className="w-7 h-7 ml-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === "en"
                ? "WHAT ARE YOU LOOKING FOR?"
                : "QU'EST-CE QUE TU CHERCHES?"
            }
            className="w-full h-full bg-transparent outline-none border-0"
          />
        </div>
      </section>

      {filteredBlogs.length === 0 ? (
        <div
          className={`text-center py-10 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {language === "en"
            ? "No blogs found matching your search."
            : "Aucun blog trouvé correspondant à votre recherche."}
        </div>
      ) : (
        filteredBlogs.map((blog, index) => (
          <section className="pb-10" key={index}>
            <div className="flex items-center flex-col gap-16 space-y-3 lg:flex-row lg:pr-5">
              <div className="left pb-5 pl-5 space-y-3">
                <div className="flex items-center gap-3">
                  <hr
                    style={{
                      width: "7px",
                      height: "84px",
                      backgroundColor: "#1B396E",
                      border: "none",
                    }}
                  />
                  <h1
                    className={`${
                      theme === "dark" ? "text-teal-500 " : "text-[#1B396E]"
                    } text-[20px] lg:text-[40px] font-Merriweather Sans font-bold `}
                  >
                    {blog.title}
                  </h1>
                </div>
                <p
                  className={` ${
                    theme === "dark" ? "text-gray-300 " : "text-black"
                  } text-[16px] font-roboto font-normal`}
                >
                  {blog.content}
                </p>
              </div>
              <div className="flex items-center justify-center py-5">
                <Image
                  src={blog.image}
                  alt=""
                  width={90}
                  height={90}
                  style={{ borderRadius: "10px" }}
                  className="object-cover min-w-[400px] h-[373px]"
                />
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default BlogPage;
