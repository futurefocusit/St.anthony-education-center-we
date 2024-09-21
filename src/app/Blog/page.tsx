import React from "react";
const spassword = "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=";
const camera= "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=";
const securty = "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=";


const Home = () => {
  return (
    <div>
      <section
        className="part1 relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/Bgimage.png')" }}
      >
        <hr className="absolute bg-[#F39C12] h-[11px] w-[163px] top-[128px] left-[179px] border-0" />
        <h1
          className="absolute text-[#ffff] font-Merriweather San font-bold text-[32px] leading-[40.22px]"
          style={{
            width: "163px",
            height: "40px",
            top: "143px",
            left: "179px",
            fontFamily: "Merriweather Sans",
          }}
        >
          Our blog
        </h1>

        <p
          style={{
            width: "463px",
            height: "150px",
            position: "absolute",
            top: "202px",
            left: "179px",
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          We’re excited to share the latest insights, tips, and industry updates
          with you. Whether you're here for cybersecurity advice, consultancy
          guidance, or the latest in camera systems, we’ve got you covered. Stay
          informed, stay secure, and enjoy exploring our articles!
        </p>
        <input
          type="text"
          placeholder="WHAT ARE YOU LOOKING FOR ?"
          style={{
            width: "737px",
            height: "65px",
            position: "absolute",
            top: "381px",
            left: "179px",
            borderRadius: "10px",
            border: "1px solid #FFFFFF", // Set border color
            color: "#FFFFFF", // Set text color
            backgroundColor: "#1B396E", // Background color
            paddingLeft: "15px", // Padding for better text visibility
          }}
        />
      </section>

      <section className="part2">
        <div className="all flex">
          <div className="left">
            <hr
              style={{
                width: "7px",
                height: "84px",
                position: "absolute",
                top: "625px",
                left: "179px",
                backgroundColor: "#1B396E",
                border: "none",
              }}
            />
            <h1
              style={{
                width: "577px",
                height: "100px",
                position: "absolute",
                top: "617px",
                left: "199px",
                fontFamily: "Merriweather Sans",
                fontWeight: "700",
                fontSize: "40px",
                lineHeight: "50.28px",
                color: "#1B396E",
              }}
            >
              Essential Cybersecurity Tips to Protect Your Business.
            </h1>
            <h6
              style={{
                width: "102px",
                height: "24px",
                position: "absolute",
                top: "733px",
                left: "199px",
                fontFamily: "Merriweather Sans",
                fontWeight: "800",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#1ABC9C", // Set text color
              }}
            >
              23 june 2025
            </h6>
            <p
              style={{
                width: "591px",
                height: "71px",
                position: "absolute",
                top: "803px",
                left: "183px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000", // Set text color to black
              }}
            >
              A step-by-step guide on how businesses can enhance their
              cybersecurity defenses. Covers topics like password management,
              firewalls, and securing networks
            </p>
            <p
              style={{
                width: "555px",
                height: "96px",
                position: "absolute",
                top: "900px",
                left: "201px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000", // Set text color to black
              }}
            >
              <span className="font-bold text-3xl">.</span>Use clear headings
              for each tip. <br />
              <span className="font-bold text-3xl">.</span> Provide practical,
              easy-to-implement tips for small and medium-sized businesses.{" "}
              <br />
              <span className="font-bold text-3xl">.</span> Include actionable
              steps and examples. <br />
            </p>
            <p
              style={{
                width: "545px",
                height: "96px",
                position: "absolute",
                top: "1050px",
                left: "199px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000", // Set text color to black
              }}
            >
              <span className="font-bold text-3xl">.</span>Use clear headings
              for each tip. <br />
              <span className="font-bold text-3xl">.</span>Provide practical,
              easy-to-implement tips for small and medium-sized businesses.{" "}
              <br />
              <span className="font-bold text-3xl">.</span>Include actionable
              steps and examples. <br />
            </p>
          </div>
          <div className="right">
            <img
              //@ts-ignore

              src={spassword}
              alt=""
              style={{
                width: "327px",
                height: "373px",
                position: "absolute",
                top: "630px",
                left: "931px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </section>
      <section className="part3">
        <div className="all flex">
          <div className="left">
            <hr
              style={{
                width: "7px",
                height: "84px",
                position: "absolute",
                top: "1219px",
                left: "179px",
                backgroundColor: "#1B396E",
                border: "none",
              }}
            />
            <h1
              style={{
                width: "612px",
                height: "100px",
                position: "absolute",
                top: "1209px",
                left: "199px",
                fontFamily: "Merriweather Sans",
                fontWeight: "700",
                fontSize: "40px",
                lineHeight: "50.28px",
                color: "#1B396E",
              }}
            >
              How to Choose the Perfect Camera System for Your Needs.
            </h1>
            <h6
              style={{
                width: "102px",
                height: "24px",
                position: "absolute",
                top: "1326px",
                left: "199px",
                fontFamily: "Merriweather Sans",
                fontWeight: "800",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#1ABC9C", // Set text color
              }}
            >
              23 june 2025
            </h6>

            <p
              style={{
                width: "591px",
                height: "71px",
                position: "absolute",
                top: "1392px",
                left: "199px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000", // Set text color
              }}
            >
              A comprehensive guide to help you select the right security camera
              system, whether for a home or business. Discusses key factors like
              camera type, resolution, and coverage
            </p>

            <p
              style={{
                width: "567px",
                height: "96px",
                position: "absolute",
                top: "1493px",
                left: "199px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000", // Set text color to black
              }}
            >
              <span className="font-bold text-3xl">.</span>Use clear headings
              for each tip. <br />
              <span className="font-bold text-3xl">.</span>Provide practical,
              easy-to-implement tips for small and medium-sized businesses.{" "}
              <br />
              <span className="font-bold text-3xl">.</span>Include actionable
              steps and examples. <br />
            </p>
            <p
              style={{
                width: "567px",
                height: "96px",
                position: "absolute",
                top: "1644px",
                left: "199px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000", // Set text color to black
              }}
            >
              <span className="font-bold text-3xl">.</span>Include a comparison
              table for different camera types (indoor, outdoor, wired,
              wireless). <br />
              <span className="font-bold text-3xl">.</span>Offer real-world
              examples for different scenarios (home vs. business). <br />
              <span className="font-bold text-3xl">.</span>Use diagrams or
              images to clarify technical specifications. <br />
            </p>
          </div>
          <div className="right">
            <img
              //@ts-ignore
              src={camera}
              alt=""
              style={{
                width: "327px",
                height: "373px",
                position: "absolute",
                top: "1197px",
                left: "931px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </section>

      <section className="part4">
        <div className="all flex">
          <div className="left">
            <hr
              style={{
                width: "7px",
                height: "84px",
                position: "absolute",
                top: "1881px",
                left: "179px",
                backgroundColor: "#1B396E",
                border: "none",
              }}
            />
            <h1
              style={{
                width: "588px",
                height: "100px",
                position: "absolute",
                top: "1873px",
                left: "199px",
                fontFamily: "Merriweather Sans",
                fontWeight: "700",
                fontSize: "40px",
                lineHeight: "50.28px",
                color: "#1B396E",
              }}
            >
              Common Mistakes in Security Camera Installation .
            </h1>
            <h6
              style={{
                width: "102px",
                height: "24px",
                position: "absolute",
                top: "1999px",
                left: "199px",
                fontFamily: "Merriweather Sans",
                fontWeight: "800",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#1ABC9C",
              }}
            >
              23 june 2025
            </h6>

            <p
              style={{
                width: "591px",
                height: "71px",
                position: "absolute",
                top: "2080px",
                left: "199px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
              }}
            >
              Avoid the most common pitfalls in camera installation. Learn how
              to position your cameras for maximum effectiveness and avoid blind
              spots
            </p>

            <p
              style={{
                width: "542px",
                height: "72px",
                position: "absolute",
                top: "2146px",
                left: "201px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "black",
              }}
            >
              <span className="font-bold text-3xl">.</span>Break down the most
              common mistakes with clear examples. <br />
              <span className="font-bold text-3xl">.</span> Provide do's and
              don’ts for camera placement, wiring, and setup. <br />
              <span className="font-bold text-3xl">.</span>Include diagrams for
              visual clarification. <br />
            </p>

            <p
              style={{
                width: "542px",
                height: "72px",
                position: "absolute",
                top: "2266px",
                left: "201px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "black",
              }}
            >
              <span className="font-bold text-3xl">.</span>Use clear headings
              for each tip. <br />
              <span className="font-bold text-3xl">.</span>Provide practical,
              easy-to-implement tips for small and medium-sized businesses.{" "}
              <br />
              <span className="font-bold text-3xl">.</span>Include actionable
              steps and examples. <br />
            </p>

            <p
              style={{
                width: "542px",
                height: "72px",
                position: "absolute",
                top: "2410px",
                left: "201px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "black",
              }}
            >
              <span className="font-bold text-3xl">.</span>Use clear headings
              for each tip. <br />
              <span className="font-bold text-3xl">.</span>Provide practical,
              easy-to-implement tips for small and medium-sized businesses.{" "}
              <br />
              <span className="font-bold text-3xl">.</span>Include actionable
              steps and
            </p>
          </div>
          <div className="right">
            <img
              //@ts-ignore

              src={camera}
              alt=""
              style={{
                width: "327px",
                height: "373px",
                position: "absolute",
                top: "1885px",
                left: "931px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </section>

      <section className="part5">
        <div className="all flex">
          <div className="left">
            <hr
              style={{
                width: "7px",
                height: "84px",
                position: "absolute",
                top: "2681px",
                left: "179px",
                backgroundColor: "#1B396E",
                border: "none",
              }}
            />
            <h1
              style={{
                width: "588px",
                height: "100px",
                position: "absolute",
                top: "2680px",
                left: "199px",
                fontFamily: "Merriweather Sans",
                fontWeight: "700",
                fontSize: "35px",
                lineHeight: "50.28px",
                color: "#1B396E",
              }}
            >
              The Role of Cybersecurity Consultancy in Modern Business.
            </h1>
            <h6
              style={{
                width: "102px",
                height: "24px",
                position: "absolute",
                top: "2820px",
                left: "199px",
                fontFamily: "Merriweather Sans",
                fontWeight: "800",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#1ABC9C",
              }}
            >
              23 june 2025
            </h6>

            <p
              style={{
                width: "591px",
                height: "71px",
                position: "absolute",
                top: "2880px",
                left: "199px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
              }}
            >
              Avoid the most common pitfalls in camera installation. Learn how
              to position your cameras for maximum effectiveness and avoid blind
              spots
            </p>

            <p
              style={{
                width: "542px",
                height: "72px",
                position: "absolute",
                top: "2970px",
                left: "201px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "black",
              }}
            >
              <span className="font-bold text-3xl">.</span>Use clear headings
              for each tip. <br />
              <span className="font-bold text-3xl">.</span>Provide practical,
              easy-to-implement tips for small and medium-sized businesses.{" "}
              <br />
              <span className="font-bold text-3xl">.</span>Include actionable
              steps and examples. <br />
            </p>

            <p
              style={{
                width: "542px",
                height: "72px",
                position: "absolute",
                top: "3119px",
                left: "201px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "black",
              }}
            >
              <span className="font-bold text-3xl">.</span>Explain the
              importance of risk assessments and audits. <br />
              <span className="font-bold text-3xl">.</span>Provide examples of
              cybersecurity consultancy services. <br />
              <span className="font-bold text-3xl">.</span>Use real-world
              scenarios to show the value of hiring a consultant. <br />
            </p>
          </div>
          <div className="right">
            <img
              //@ts-ignore

              src={securty}
              alt=""
              style={{
                width: "327px",
                height: "373px",
                position: "absolute",
                top: "2685px",
                left: "931px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </section>

      <section className="part6">
        <div className="all flex">
          <div className="left">
            <hr
              style={{
                width: "7px",
                height: "84px",
                position: "absolute",
                top: "3299px",
                left: "179px",
                backgroundColor: "#1B396E",
                border: "none",
              }}
            />
            <h1
              style={{
                width: "588px",
                height: "100px",
                position: "absolute",
                top: "3299px",
                left: "199px",
                fontFamily: "Merriweather Sans",
                fontWeight: "700",
                fontSize: "32px",
                lineHeight: "50.28px",
                color: "#1B396E",
              }}
            >
              Company News: New Camera Installation and Monitoring Services
            </h1>
            <h6
              style={{
                width: "102px",
                height: "24px",
                position: "absolute",
                top: "3449px",
                left: "199px",
                fontFamily: "Merriweather Sans",
                fontWeight: "800",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#1ABC9C",
              }}
            >
              23 june 2025
            </h6>

            <p
              style={{
                width: "591px",
                height: "71px",
                position: "absolute",
                top: "3520px",
                left: "199px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
              }}
            >
              Announcing our latest services! Find out how our new camera
              installation and monitoring packages can help safeguard your home
              or business
            </p>

            <p
              style={{
                width: "542px",
                height: "72px",
                position: "absolute",
                top: "3599px",
                left: "201px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "black",
              }}
            >
              <span className="font-bold text-3xl">.</span>Use a conversational
              tone to make the announcement feel personal. <br />
              <span className="font-bold text-3xl">.</span>Highlight the
              benefits of the new services (e.g., 24/7 monitoring). <br />
              <span className="font-bold text-3xl">.</span>Provide links to more
              detailed service descriptions. <br />
            </p>

            <p
              style={{
                width: "542px",
                height: "72px",
                position: "absolute",
                top: "3759px",
                left: "201px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "black",
              }}
            >
              <span className="font-bold text-3xl">.</span>Use clear headings
              for each tip. <br />
              <span className="font-bold text-3xl">.</span>Provide practical,
              easy-to-implement tips for small and medium-sized businesses.{" "}
              <br />
              <span className="font-bold text-3xl">.</span>Include actionable
              steps and examples. <br />
            </p>

            <p
              style={{
                width: "542px",
                height: "72px",
                position: "absolute",
                top: "3910px",
                left: "201px",
                fontFamily: "Roboto Serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "black",
              }}
            >
              <span className="font-bold text-3xl">.</span>Use clear headings
              for each tip. <br />
              <span className="font-bold text-3xl">.</span>Provide practical,
              easy-to-implement tips for small and medium-sized businesses.{" "}
              <br />
              <span className="font-bold text-3xl">.</span>Include actionable
              steps and examples. <br />
            </p>
          </div>
          <div className="right">
            <img
              //@ts-ignore

              src={securty}
              alt=""
              style={{
                width: "327px",
                height: "373px",
                position: "absolute",
                top: "3299px",
                left: "931px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// import React from 'react'
// import spassword from '../assets/spassword.png'
// import camera from '../assets/camera.png'
// import securty from '../assets/securty.png'

// const Home = () => {
//   return (
//     <div >
//        <section className="part1 relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/Bgimage.png')" }}>
//          <hr className="absolute bg-[#F39C12] h-[11px] w-[163px] top-[128px] left-[179px] border-0" />
//          <h1 className="absolute  text-[#ffff] font-Merriweather San font-bold  leading-[40.22px]
//             sm:text-[24px]
//             sm:w-[122px]
//             sm:h-[30px]
//             sm:top-[73px]
//             sm:left-[19px]
//             md:text-[32px]
//             md:w-[163px]
//             md:h-[40px]
//             md:top-[135px]
//             md:left-[43px]
//             lg:text-[32px]
//             lg:w-[163px]
//             lg:h-[40px]
//             lg:top-[143px]
//             lg:left-[179px]
//             lg:font-[Merriweather Sans]
//           ">Our blog</h1>

//           <p className="
//               sm:w-[396px]
//               sm:h-[150px]
//               sm:top-[123px]
//               sm:left-[19px]
//               sm:text-[16px]
//               sm:text-[left]

//               md:w-[463px]
//               md:h-[150px]
//               md:top-[194px]
//               md:left-[43px]
//               md:text-[16px]
//               md:text-[left]

//               lg:w-[463px]
//               lg:h-[150px]
//               absolute
//               lg:top-[202px]
//               lg:left-[179px]
//               font-[Roboto, sans-serif]
//               lg:text-[16px]
//               lg:font-[400]
//               leading-tight
//               lg:text-left
//               text-[#FFFFFF]

//             ">
//           We’re excited to share the latest insights, tips, and industry updates with you.
//           Whether you're here for cybersecurity advice, consultancy guidance, or the latest
//           in camera systems, we’ve got you covered. Stay informed, stay secure, and enjoy
//           exploring our articles!
//           </p>
//           <input type="text" placeholder='WHAT ARE YOU LOOKING FOR ?' className="
//               sm:w-[336px]
//               sm:h-[45px]
//               sm:top-[303px]
//               sm:left-[19px]
//               sm:text-[13px]

//               md:w-[607px]
//               md:h-[65px]
//               md:top-[373px]
//               md:left-[43px]
//               md:text-[24px]

//               lg:w-[737px]
//               lg:h-[65px]
//               absolute
//               lg:top-[381px]
//               lg:left-[179px]
//               lg:text-[24px]
//               rounded-[10px]
//               border-[1px solid #FFFFFF]

//               text-[#FFFFFF]
//               bg-[#1B396E]
//               pl-[15px]
//             "/>
//        </section>

//        <section className="part2">
//           <div className='all flex'>
//                <div className='left'>
//                <hr style={{
//               width: '7px',
//               height: '84px',
//               position: 'absolute',
//               top: '625px',
//               left: '179px',
//               backgroundColor: '#1B396E',
//               border: 'none',
//             }} />
//           <h1 style={{
//               width: '577px',
//               height: '100px',
//               position: 'absolute',
//               top: '617px',
//               left: '199px',
//               fontFamily: 'Merriweather Sans',
//               fontWeight: '700',
//               fontSize: '40px',
//               lineHeight: '50.28px',
//               color: '#1B396E',
//             }}>
//             Essential Cybersecurity
//             Tips to Protect Your Business.
//           </h1>
//           <h6 style={{
//               width: '102px',
//               height: '24px',
//               position: 'absolute',
//               top: '733px',
//               left: '199px',
//               fontFamily: 'Merriweather Sans',
//               fontWeight: '800',
//               fontSize: '16px',
//               lineHeight: '24px',
//               color: '#1ABC9C', // Set text color
//             }}>23 june 2025</h6>
//           <p style={{
//               width: '591px',
//               height: '71px',
//               position: 'absolute',
//               top: '803px',
//               left: '183px',
//               fontFamily: 'Roboto Serif',
//               fontWeight: '400',
//               fontSize: '16px',
//               lineHeight: '24px',
//               color: '#000000', // Set text color to black
//             }}>
//              A step-by-step guide on how businesses can enhance their cybersecurity defenses.
//              Covers topics like password management, firewalls, and securing networks
//           </p>
//           <p style={{
//               width: '555px',
//               height: '96px',
//               position: 'absolute',
//               top: '900px',
//               left: '201px',
//               fontFamily: 'Roboto Serif',
//               fontWeight: '400',
//               fontSize: '16px',
//               lineHeight: '24px',
//               color: '#000000', // Set text color to black
//             }}>
//              <span className='font-bold text-3xl'>.</span>Use clear headings for each tip. <br />
//              <span className='font-bold text-3xl'>.</span> Provide practical, easy-to-implement tips for small and medium-sized businesses. <br />
//              <span className='font-bold text-3xl'>.</span> Include actionable steps and examples. <br />
//           </p>
//           <p style={{
//               width: '545px',
//               height: '96px',
//               position: 'absolute',
//               top: '1050px',
//               left: '199px',
//               fontFamily: 'Roboto Serif',
//               fontWeight: '400',
//               fontSize: '16px',
//               lineHeight: '24px',
//               color: '#000000', // Set text color to black
//             }}>
//              <span className='font-bold text-3xl'>.</span>Use clear headings for each tip. <br />
//              <span className='font-bold text-3xl'>.</span>Provide practical, easy-to-implement tips for small and medium-sized businesses. <br />
//              <span className='font-bold text-3xl'>.</span>Include actionable steps and examples. <br />
//           </p>
//                </div>
//                <div className='right'>
//                    <img src={spassword} alt=""style={{
//                       width: '327px',
//                       height: '373px',
//                       position: 'absolute',
//                       top: '630px',
//                       left: '931px',
//                       borderRadius: '10px',
//                    }}  />
//                </div>

//           </div>
//        </section>
//        <section className="part3">
//           <div className='all flex'>
//             <div className='left'>
//                 <hr style={{
//                     width: '7px',
//                     height: '84px',
//                     position: 'absolute',
//                     top: '1219px',
//                     left: '179px',
//                     backgroundColor: '#1B396E',
//                     border: 'none',
//                 }}  />
//                 <h1 style={{
//                     width: '612px',
//                     height: '100px',
//                     position: 'absolute',
//                     top: '1209px',
//                     left: '199px',
//                     fontFamily: 'Merriweather Sans',
//                     fontWeight: '700',
//                     fontSize: '40px',
//                     lineHeight: '50.28px',
//                     color: '#1B396E',
//                 }}>
//                     How to Choose the Perfect
//                     Camera System for Your Needs.
//                 </h1>
//                 <h6 style={{
//                     width: '102px',
//                     height: '24px',
//                     position: 'absolute',
//                     top: '1326px',
//                     left: '199px',
//                     fontFamily: 'Merriweather Sans',
//                     fontWeight: '800',
//                     fontSize: '16px',
//                     lineHeight: '24px',
//                     color: '#1ABC9C', // Set text color
//                 }}>23 june 2025</h6>

//                 <p style={{
//                     width: '591px',
//                     height: '71px',
//                     position: 'absolute',
//                     top: '1392px',
//                     left: '199px',
//                     fontFamily: 'Roboto Serif',
//                     fontWeight: '400',
//                     fontSize: '16px',
//                     lineHeight: '24px',
//                     color: '#000000', // Set text color
//                 }}>
//                     A comprehensive guide to help you select the right security camera system, whether for a home or business. Discusses key factors like camera type, resolution, and coverage
//                 </p>

//                 <p style={{
//                     width: '567px',
//                     height: '96px',
//                     position: 'absolute',
//                     top: '1493px',
//                     left: '199px',
//                     fontFamily: 'Roboto Serif',
//                     fontWeight: '400',
//                     fontSize: '16px',
//                     lineHeight: '24px',
//                     color: '#000000', // Set text color to black
//                 }}>
//                   <span className='font-bold text-3xl'>.</span>Use clear headings for each tip. <br />
//                   <span className='font-bold text-3xl'>.</span>Provide practical, easy-to-implement tips for small and medium-sized businesses. <br />
//                   <span className='font-bold text-3xl'>.</span>Include actionable steps and examples. <br />
//                 </p>
//                 <p style={{
//                     width: '567px',
//                     height: '96px',
//                     position: 'absolute',
//                     top: '1644px',
//                     left: '199px',
//                     fontFamily: 'Roboto Serif',
//                     fontWeight: '400',
//                     fontSize: '16px',
//                     lineHeight: '24px',
//                     color: '#000000', // Set text color to black
//                 }}>
//                   <span className='font-bold text-3xl'>.</span>Include a comparison table for different camera types (indoor, outdoor, wired, wireless). <br />
//                   <span className='font-bold text-3xl'>.</span>Offer real-world examples for different scenarios (home vs. business). <br />
//                   <span className='font-bold text-3xl'>.</span>Use diagrams or images to clarify technical specifications. <br />
//                 </p>
//             </div>
//             <div className='right'>
//                 <img src={camera} alt=""
//                    style={{
//                     width: '327px',
//                     height: '373px',
//                     position: 'absolute',
//                     top: '1197px',
//                     left: '931px',
//                     borderRadius: '10px',
//                  }}
//                 />
//             </div>

//           </div>
//        </section>

//        <section className='part4'>
//           <div className='all flex'>
//             <div className='left'>
//                 <hr style={{
//                  width: '7px',
//                  height: '84px',
//                  position: 'absolute',
//                  top: '1881px',
//                  left: '179px',
//                  backgroundColor: '#1B396E',
//                  border: 'none',
//                  }} />
//                 <h1 style={{
//                  width: '588px',
//                  height: '100px',
//                  position: 'absolute',
//                  top: '1873px',
//                  left: '199px',
//                  fontFamily: 'Merriweather Sans',
//                  fontWeight: '700',
//                  fontSize: '40px',
//                  lineHeight: '50.28px',
//                  color: '#1B396E',
//                  }}>
//                     Common Mistakes in Security
//                     Camera Installation .
//                 </h1>
//                 <h6 style={{
//                    width: '102px',
//                    height: '24px',
//                    position: 'absolute',
//                    top: '1999px',
//                    left: '199px',
//                    fontFamily: 'Merriweather Sans',
//                    fontWeight: '800',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                    color: '#1ABC9C',
//                   }}>23 june 2025</h6>

//                 <p style={{
//                  width: '591px',
//                  height: '71px',
//                  position: 'absolute',
//                  top: '2080px',
//                  left: '199px',
//                  fontFamily: 'Roboto Serif',
//                  fontWeight: '400',
//                  fontSize: '16px',
//                  lineHeight: '24px',
//                  color: '#000000',
//                  }}>
//                     Avoid the most common pitfalls in camera installation.
//                     Learn how to position your cameras for maximum effectiveness
//                     and avoid blind spots
//                 </p>

//                 <p style={{
//                    width: '542px',
//                    height: '72px',
//                    position: 'absolute',
//                    top: '2146px',
//                    left: '201px',
//                    fontFamily: 'Roboto Serif',
//                    fontWeight: '400',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                    color: 'black',
//                    }}>
//                    <span className='font-bold text-3xl'>.</span>Break down the most common mistakes with clear examples. <br />
//                    <span className='font-bold text-3xl'>.</span> Provide do's and don’ts for camera placement, wiring, and setup. <br />
//                    <span className='font-bold text-3xl'>.</span>Include diagrams for visual clarification. <br />
//                 </p>

//                 <p style={{
//                    width: '542px',
//                    height: '72px',
//                    position: 'absolute',
//                    top: '2266px',
//                    left: '201px',
//                    fontFamily: 'Roboto Serif',
//                    fontWeight: '400',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                    color: 'black',
//                    }}>
//                    <span className='font-bold text-3xl'>.</span>Use clear headings for each tip. <br />
//                    <span className='font-bold text-3xl'>.</span>Provide practical, easy-to-implement tips for small and medium-sized businesses. <br />
//                    <span className='font-bold text-3xl'>.</span>Include actionable steps and examples. <br />
//                 </p>

//                 <p style={{
//                    width: '542px',
//                    height: '72px',
//                    position: 'absolute',
//                    top: '2410px',
//                    left: '201px',
//                    fontFamily: 'Roboto Serif',
//                    fontWeight: '400',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                    color: 'black',
//                    }}>
//                    <span className='font-bold text-3xl'>.</span>Use clear headings for each tip. <br />
//                    <span className='font-bold text-3xl'>.</span>Provide practical, easy-to-implement tips for small and medium-sized businesses. <br />
//                    <span className='font-bold text-3xl'>.</span>Include actionable steps and <examples className="br"></examples>
//                 </p>
//             </div>
//             <div className='right'>
//                 <img src={camera} alt="" style={{
//                       width: '327px',
//                       height: '373px',
//                       position: 'absolute',
//                       top: '1885px',
//                       left: '931px',
//                       borderRadius: '10px',
//                    }} />
//             </div>
//           </div>
//        </section>

//        <section className='part5'>
//         <div className='all flex'>
//           <div className='left'>
//           <hr style={{
//                  width: '7px',
//                  height: '84px',
//                  position: 'absolute',
//                  top: '2681px',
//                  left: '179px',
//                  backgroundColor: '#1B396E',
//                  border: 'none',
//                  }} />
//                 <h1 style={{
//                  width: '588px',
//                  height: '100px',
//                  position: 'absolute',
//                  top: '2680px',
//                  left: '199px',
//                  fontFamily: 'Merriweather Sans',
//                  fontWeight: '700',
//                  fontSize: '35px',
//                  lineHeight: '50.28px',
//                  color: '#1B396E',
//                  }}>
//                     The Role of Cybersecurity
//                     Consultancy in Modern Business.
//                 </h1>
//                 <h6 style={{
//                    width: '102px',
//                    height: '24px',
//                    position: 'absolute',
//                    top: '2820px',
//                    left: '199px',
//                    fontFamily: 'Merriweather Sans',
//                    fontWeight: '800',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                    color: '#1ABC9C',
//                   }}>23 june 2025</h6>

//                   <p style={{
//                      width: '591px',
//                      height: '71px',
//                      position: 'absolute',
//                      top: '2880px',
//                      left: '199px',
//                      fontFamily: 'Roboto Serif',
//                      fontWeight: '400',
//                      fontSize: '16px',
//                      lineHeight: '24px',
//                      color: '#000000',
//                  }}>
//                     Avoid the most common pitfalls in camera installation.
//                     Learn how to position your cameras for maximum effectiveness and
//                     avoid blind spots
//                   </p>

//                   <p style={{
//                    width: '542px',
//                    height: '72px',
//                    position: 'absolute',
//                    top: '2970px',
//                    left: '201px',
//                    fontFamily: 'Roboto Serif',
//                    fontWeight: '400',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                    color: 'black',
//                    }}>
//                   <span className='font-bold text-3xl'>.</span>Use clear headings for each tip. <br />
//                   <span className='font-bold text-3xl'>.</span>Provide practical, easy-to-implement tips for small and medium-sized businesses. <br />
//                   <span className='font-bold text-3xl'>.</span>Include actionable steps and examples. <br />
//                   </p>

//                   <p style={{
//                    width: '542px',
//                    height: '72px',
//                    position: 'absolute',
//                    top: '3119px',
//                    left: '201px',
//                    fontFamily: 'Roboto Serif',
//                    fontWeight: '400',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                    color: 'black',
//                    }}>
//                   <span className='font-bold text-3xl'>.</span>Explain the importance of risk assessments and audits. <br />
//                   <span className='font-bold text-3xl'>.</span>Provide examples of cybersecurity consultancy services. <br />
//                   <span className='font-bold text-3xl'>.</span>Use real-world scenarios to show the value of hiring a consultant. <br />
//                   </p>
//           </div>
//           <div className='right'>
//             <img src={securty} alt=""  style={{
//                       width: '327px',
//                       height: '373px',
//                       position: 'absolute',
//                       top: '2685px',
//                       left: '931px',
//                       borderRadius: '10px',
//                    }} />
//           </div>
//         </div>
//        </section>

//        <section className='part6'>
//           <div className='all flex'>
//             <div className='left'>
//             <hr style={{
//                  width: '7px',
//                  height: '84px',
//                  position: 'absolute',
//                  top: '3299px',
//                  left: '179px',
//                  backgroundColor: '#1B396E',
//                  border: 'none',
//                  }} />
//                 <h1 style={{
//                  width: '588px',
//                  height: '100px',
//                  position: 'absolute',
//                  top: '3299px',
//                  left: '199px',
//                  fontFamily: 'Merriweather Sans',
//                  fontWeight: '700',
//                  fontSize: '32px',
//                  lineHeight: '50.28px',
//                  color: '#1B396E',
//                  }}>
//                     Company News: New Camera
//                     Installation and Monitoring Services
//                 </h1>
//                 <h6 style={{
//                    width: '102px',
//                    height: '24px',
//                    position: 'absolute',
//                    top: '3449px',
//                    left: '199px',
//                    fontFamily: 'Merriweather Sans',
//                    fontWeight: '800',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                    color: '#1ABC9C',
//                   }}>23 june 2025</h6>

//                   <p style={{
//                      width: '591px',
//                      height: '71px',
//                      position: 'absolute',
//                      top: '3520px',
//                      left: '199px',
//                      fontFamily: 'Roboto Serif',
//                      fontWeight: '400',
//                      fontSize: '16px',
//                      lineHeight: '24px',
//                      color: '#000000',
//                  }}>
//                     Announcing our latest services! Find out how our new camera installation
//                     and monitoring packages can help safeguard your home or business
//                   </p>

//                   <p style={{
//                    width: '542px',
//                    height: '72px',
//                    position: 'absolute',
//                    top: '3599px',
//                    left: '201px',
//                    fontFamily: 'Roboto Serif',
//                    fontWeight: '400',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                      color: 'black',
//                      }}>
//                      <span className='font-bold text-3xl'>.</span>Use a conversational tone to make the announcement feel personal. <br />
//                      <span className='font-bold text-3xl'>.</span>Highlight the benefits of the new services (e.g., 24/7 monitoring). <br />
//                      <span className='font-bold text-3xl'>.</span>Provide links to more detailed service descriptions. <br />
//                   </p>

//                   <p style={{
//                    width: '542px',
//                    height: '72px',
//                    position: 'absolute',
//                    top: '3759px',
//                    left: '201px',
//                    fontFamily: 'Roboto Serif',
//                    fontWeight: '400',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                      color: 'black',
//                      }}>
//                     <span className='font-bold text-3xl'>.</span>Use clear headings for each tip. <br />
//                     <span className='font-bold text-3xl'>.</span>Provide practical, easy-to-implement tips for small and medium-sized businesses. <br />
//                     <span className='font-bold text-3xl'>.</span>Include actionable steps and examples. <br />
//                   </p>

//                   <p style={{
//                    width: '542px',
//                    height: '72px',
//                    position: 'absolute',
//                    top: '3910px',
//                    left: '201px',
//                    fontFamily: 'Roboto Serif',
//                    fontWeight: '400',
//                    fontSize: '16px',
//                    lineHeight: '24px',
//                      color: 'black',
//                      }}>
//                    <span className='font-bold text-3xl'>.</span>Use clear headings for each tip. <br />
//                    <span className='font-bold text-3xl'>.</span>Provide practical, easy-to-implement tips for small and medium-sized businesses. <br />
//                    <span className='font-bold text-3xl'>.</span>Include actionable steps and examples. <br />
//                   </p>
//             </div>
//             <div className='right'>
//             <img src={securty} alt=""  style={{
//                       width: '327px',
//                       height: '373px',
//                       position: 'absolute',
//                       top: '3299px',
//                       left: '931px',
//                       borderRadius: '10px',
//                    }} />
//             </div>
//           </div>
//        </section>

//     </div>
//   )
// }

// export default Home
