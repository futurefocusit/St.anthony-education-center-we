import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import user2 from "../../Images/user2.png";
const page = () => {
  return (
    <div className="w-full h-auto max-md:px-0 bg-[#e9e0e8]  mx-auto pb-2 px-20">
      <section className="flex justify-between items-center  gap-10 max-md:gap-3 max-md:flex-wrap px-3 ">
      <div className="w-[25%] max-md:w-screen pt-10">
        <div className='pl-10'>
        <Image 
        className="rounded-[50%] pt-10 bg-[#d1aeda] "
        src={user2} 
        alt="user1 image"
         width={200}
        height={200} />
        </div>
        <div className="pl-10 max-md:pl-2">
          <h1 className="text-[#2752BF] font-merriweather text-2xl">David</h1>
          <p className="text-[#1ABC9C]">CYBER SECURITY SPECIALIST</p>
          <p className="text-[#1ABC9C]">CYBER SECURITY SPECIALIST</p>
          <p className="text-[#1ABC9C]">CYBER SECURITY SPECIALIST</p>
        </div>
      </div>

      <div className="w-[75%] max-md:w-screen">
        <h1 className="text-[#2752BF] font-merriweather text-2xl">About me</h1>
        <p className='font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minus beatae, incidunt
           amet illo esse tempore labore magni quis voluptate ipsum neque ad numquam iste a laudantium laborum. Voluptate, ullam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minus beatae, incidunt ame
        t illo esse tempore labore magni quis voluptate ipsum neque ad numquam iste a laudantium laborum. Voluptate, ullam?
        </p>
      </div>
      </section>

      <section className='flex justify-start gap-20 items-center max-md:flex-wrap max-md:pl-2 max-md:gap-5 pl-12'>
        <div className='pt-2'>
        <h1 className="text-[#2752BF] text-2xl font-merriweather ">Experience</h1>
        <ul  className='font-roboto py-2'>
        <li>CYBER SECURITY SPECIALIST</li>
        <li>CYBER SECURITY SPECIALIST</li>
        <li>CYBER SECURITY SPECIALIST</li>
        <li>CYBER SECURITY SPECIALIST</li>
        </ul>
        </div>

        <div>
        <h1 className="text-[#2752BF] text-2xl font-merriweather max-md:pt-1 pt-10">Education</h1>
         <p> <FontAwesomeIcon className='w-7' icon={faGraduationCap} /> <strong  className='font-roboto'>CYBER SECURITY SPECIALIST</strong> </p> 
         <p className='font-roboto'>university of calfonia 2024</p>
         <p className='font-roboto'> <FontAwesomeIcon className='w-7' icon={faGraduationCap} /> <strong  className='font-roboto'>CYBER SECURITY SPECIALIST</strong></p> 
         <p className='font-roboto'>university of calfonia 2024</p>
        </div>
      </section>
    </div>
  )
}

export default page