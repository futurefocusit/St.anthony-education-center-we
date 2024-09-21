import React from "react";
import Image, { StaticImageData } from "next/image";
import image1 from "../../assets/cyyy.jpg";
import shape from "../../assets/shape12.png";
import profile from '../../assets/profile (1).png'
import status from '../../assets/status.png'

interface cardProps{
  imageSrc: StaticImageData;
  uploadDate:string;
  projectName:string;
  statusText:string;
  profileName:string;
  summary:string;
  testimonial:string;
  releaseDate: string;
}

const Card: React.FC<cardProps> =({imageSrc,uploadDate,projectName,statusText,profileName,summary,testimonial,releaseDate})=>{
  return (
    <div className="bg-white flex flex-col items-center md:items-start lg:items-start md:flex-row px-20 mb-12 pt-2">
      <div className="flex flex-col">
      <div className="bg-slate-300 min-w-[380px] h-[320px] md:mt-[35px] md:h-[320px] md:max-w-[400px] lg:max-w-[450px] overflow-hidden rounded-lg shadow-xl relative flex-shrink-0">
        <Image
          src={imageSrc}
          alt="cyberimage"
          width={450}
          className=" md:h-full md:w-full w-full h-full object-cover cursor-pointer transition-all duration-300 hover:opacity-60 clip-custom-shape"
        />
        
      </div>

      <div className="flex gap-2 mt-[20px] md:left-4 md:flex md:mt-[20px]">
          <Image src={shape} alt="shape image" width={5}/>
          <p className="text-[10px] font-light text-gray-600 italic mt-2 md:text-[14px] cursor-pointer">
            Uploaded on:{" "} <span className="font-bold text-[#1abc9c] transition-all duration-300 ease-in-out hover:text-white">{uploadDate}</span>
          </p>
        </div>
        </div>
      <div className="pt-4 flex flex-col items-center md:items-start md:pl-6 min-w-[300px]">
      <h1 className="font-merriweather mt-3 font-bold text-[20px] md:text-[40px] text-[#1B396E]">{projectName}</h1>
        <div className="relative flex flex-row cursor-pointer mt-2 md:mt-5 transition-all duration-300 ease-in-out group">
        <Image src={status} alt="loading status" width={30} className="mt-2"/>
        <p className="text-black font-semibold mt-2 md:mt-3 pl-2 hover:text-[#1abc9c]">{statusText}</p>

        <div className="absolute md:min-w-64 top-full left-0 mt-1 ml-2 px-4 py-2 bg-gray-200 text-gray-600 text-[12px] font-roboto rounded shadow-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none z-20">
          <p>{releaseDate}</p>
          </div>
        </div>

        <div className="relative flex flex-row cursor-pointer mt-2 md:mt-5 transition-all duration-300 ease-in-out group">
          <Image src={profile} alt="profile logo" width={30} className="mt-2" />
          <p className="mt-3 ml-2 hover:text-[#1abc9c]">{profileName}</p>

          <div className="absolute md:min-w-96 top-full left-0 mt-1 ml-2 px-4 py-2 bg-gray-200 text-gray-600 text-[12px] font-roboto rounded shadow-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none">
          <p>{testimonial}</p>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col items-center md:items-start">
          <h1 className="font-roboto text-2xl font-bold pb-6 md:pb-6">Project Summary</h1>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
};

const cardList: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <Card
        imageSrc={image1}
        uploadDate={"12, January, 2024"}
        projectName={"Project One"}
        statusText={"Completed"}
        profileName={"John Doe"} 
        summary={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        testimonial={
          "Working with EdgeReach Tech was a smooth and positive experience. Their clear communication and commitment to deadlines ensured the project stayed on track and delivered within budget."
        }
        releaseDate={"Started: 01/01/2024 - End: 10/01/2024"}
      />

      <Card imageSrc={image1} 
      uploadDate={"17, September, 2024"} 
      projectName={"Project Two"} 
      statusText={"Ongoing"} 
      profileName={"Mucyo Blaise"} 
      summary={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Ut enim ad minim   consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      } 
      testimonial={
        "Working with EdgeReach Tech was a smooth and positive experience. Their clear communication and commitment to deadlines ensured the project stayed on track and delivered within budget."
      }      
      releaseDate={"Started: 01/01/2024 - End: 10/01/2024"}
      />
      <Card
        imageSrc={image1}
        uploadDate={"12, March, 2024"}
        projectName={"Project Three"}
        statusText={"Completed"}
        profileName={"Rwigara Rodrique"} 
        summary={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        testimonial={
          "Working with EdgeReach Tech was a smooth and positive experience. Their clear communication and commitment to deadlines ensured the project stayed on track and delivered within budget."
        }
        releaseDate={"Started: 01/01/2024 - End: 10/01/2024"}
      />
      <Card
        imageSrc={image1}
        uploadDate={"12, March, 2024"}
        projectName={"Project Four"}
        statusText={"Completed"}
        profileName={"Rwigara Rodrique"} 
        summary={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        testimonial={
          "Working with EdgeReach Tech was a smooth and positive experience. Their clear communication and commitment to deadlines ensured the project stayed on track and delivered within budget."
        }
        releaseDate={"Started: 01/01/2024 - End: 10/01/2024"}
      />
      <Card
        imageSrc={image1}
        uploadDate={"12, March, 2024"}
        projectName={"Project Five"}
        statusText={"Completed"}
        profileName={"Rwigara Rodrique"} 
        summary={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        testimonial={
          "Working with EdgeReach Tech was a smooth and positive experience. Their clear communication and commitment to deadlines ensured the project stayed on track and delivered within budget."
        }
        releaseDate={"Started: 01/01/2024 - End: 10/01/2024"}
      />
    </div>
  );
};

export default cardList;
