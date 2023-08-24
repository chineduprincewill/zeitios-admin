import React, { useState, useEffect } from "react";
import thirdProfileIcon from "../../assets/icons/third_profile.png";
import firstDashboardIcon from "../../assets/icons/first_dashboard_icon.png";
import secondDashboardIcon from "../../assets/icons/second_dashboard_icon.png";
import thirdDashboardIcon from "../../assets/icons/third_dashboard_icon.png";
import fourthDashboardIcon from "../../assets/icons/fourth_dashboard_icon.png";
import fifthDashboardIcon from "../../assets/icons/fifth_dashboard_icon.png";
import googleIcon from "../../assets/icons/Google.png";
import Sidebar from "../../Components/Sidebar";
import ClientNavbar from "../../../Components/client/ClientNavbar";

export default function ClientDashboard() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showNavbar, setShowNavbar] = useState(false);
  const handleClick = (e) => {
    console.log(showNavbar);
    setShowNavbar((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Conditionally update the showDiv state based on screen width
    if (screenWidth >= 768) {
      setShowNavbar(true);
      // setShowDiv(true);
    } else {
      setShowNavbar(false);
      // setShowDiv(false);
    }
  }, [screenWidth]);
  return (
    <div className="w-full h-screen max-sm:h-full max-sm:pb-5 flex bg-[#F5F5F5]">
      {showNavbar && <Sidebar handleClick={handleClick} />}

      <div className=" w-[76%] max-md:w-full mx-6  max-md:mx-0 h-full ml-auto">
        <ClientNavbar handleClick={handleClick} />
        <p className="text-2xl font-['Montserrat'] font-medium text-[#323232] w-full mt-3  py-0 max-md:px-3 ">
          Welcome back, Osaze
        </p>
        <p className="font-['Montserrat'] text-[#323232] w-full mt-0  max-md:px-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
        <div className="flex flex-row justify-between w-full mt-5 h-1/5 max-xl:h-1/7 max-md:px-3 max-sm:flex-wrap max-sm:h-2/9 max-sm:justify-around">
          <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] w-2/9 max-sm:w-2/5  bg-[#c00e3a] px-2 max-sm:my-2 py-3 rounded-lg flex flex-col justify-between">
            <p className="text-lg max-xl:text-sm font-['Poppins'] font-medium  text-white">
              Number of <br />
              Projects
            </p>
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg max-xl:text-sm font-['Poppins'] font-semibold text-white ml-0">
                1000
              </p>
              <img src={firstDashboardIcon} alt="icon" className="w-4 h-4" />
            </div>
          </div>
          <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] max-sm:my-2 w-2/9 max-sm:w-2/5 overflow-hidden bg-[#049f6d]  px-2 py-3 rounded-lg flex flex-col justify-between">
            <p className="text-lg  max-xl:text-sm font-['Poppins'] font-medium text-white">
              Number of <br />
              Completed Projects
            </p>
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg  max-xl:text-sm font-['Poppins'] font-semibold text-white ml-0">
                1000
              </p>
              <img src={secondDashboardIcon} alt="icon" className="w-4 h-4" />
            </div>
          </div>
          <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] max-sm:my-2 w-2/9 max-sm:w-2/5 overflow-hidden bg-[#a8a108]  px-2 py-3 rounded-lg flex flex-col justify-between">
            <p className="text-lg max-xl:text-sm font-['Poppins'] font-medium  text-white">
              Number of Running <br />
              Projects
            </p>
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg max-xl:text-sm font-['Poppins'] font-semibold text-white ml-0">
                1000
              </p>
              <img src={thirdDashboardIcon} alt="icon" className="w-4 h-4" />
            </div>
          </div>
          <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] max-sm:my-2 w-2/9 max-sm:w-2/5 overflow-hidden bg-[#981010]  px-2 py-3 rounded-lg flex flex-col justify-between">
            <p className="text-lg font-['Poppins'] max-xl:text-sm font-medium  text-white">
              Total Payment
            </p>
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-['Poppins'] max-xl:text-sm font-semibold text-white ml-0">
                $1000
              </p>
              <img src={fourthDashboardIcon} alt="icon" className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="flex w-full mt-3 h-6/11 max-xl:h-5/9 justify-between max-md:px-3 max-xl:mt-5 max-sm:flex-col max-sm:h-1/2 ">
          <div className="w-7/11 max-lg:w-7/12 h-full  flex flex-col max-sm:w-full justify-between max-sm:h-1/2">
            <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)]  bg-[#2d7f04] flex flex-col justify-between h-1/3 max-xl:h-1/4 px-2 py-3 rounded-lg max-sm:h-3/11 max-sm:w-full">
              <p className="text-lg font-['Poppins'] font-medium  text-white">
                Payment Balance
              </p>
              <div className="flex flex-row ml-px gap-px items-center justify-between">
                <p className="text-lg font-['Poppins'] font-semibold text-white">
                  $1000
                </p>
                <img src={fifthDashboardIcon} className="w-6 h-6" />
              </div>
            </div>
            <div className="shadow bg-white flex w-full rounded-md pb-4 h-5/8 max-xl:h-7/10 max-sm:w-full max-sm:h-3/4 max-sm:my-3">
              <div className="w-1/4 max-lg:w-1/6 flex justify-center pt-3">
                <div className="rounded-full p-4 max-lg:p-2 bg-blue-100 self-start">
                  <img
                    src={googleIcon}
                    alt="icon"
                    className="max-lg:w-6 max-lg:h-6"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-between  w-3/4 max-lg:w-5/6 max-xl:pt-2 max-lg:pt-1 pr-2">
                <div>
                  <p className="text-2xl max-lg:text-base font-['Montserrat'] font-medium text-[#989797]">
                    Web Developer
                  </p>
                  <p className="text-sm max-lg:text-xs font-['Montserrat'] font-medium text-[#323232]">
                    Google
                  </p>
                </div>
                <div className="font-['Montserrat'] text-[#323232] self-end mb-2 max-lg:mb-1  max-lg:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quui nostrud
                </div>
                <div className="flex items-center justify-around  mb-5 max-lg:mb-2 w-full">
                  <div className="text-xs font-['Montserrat'] text-[#323232] mt-px mb-1">
                    London
                  </div>
                  <div className="text-xs font-['Montserrat'] text-[#323232] mr-2">
                    $20k Hourly
                  </div>
                  <div className="text-xs font-['Montserrat'] text-[#323232] mr-3">
                    3 Days left
                  </div>
                  <div className="text-xs font-['Montserrat'] text-[#323232]">
                    Remote
                  </div>
                </div>
                <div className="w-full">
                  <div className="h-[0.05rem] w-4/5 bg-lightBlue mx-auto flex items-center justify-between">
                    <div className="rounded-full w-2 h-2 bg-primary"></div>
                    <div className="rounded-full w-2 h-2 bg-primary"></div>
                    <div className="rounded-full w-2 h-2 bg-primary"></div>
                    <div className="rounded-full w-1 h-1 bg-primary"></div>
                    <div className="rounded-full w-2 h-2 bg-lightMilk"></div>
                  </div>
                  <div className="flex items-center justify-around  w-full">
                    <div className="text-xs font-['Montserrat'] text-[#323232] mb-px mr-px max-lg:text-center">
                      Milestone 1
                    </div>
                    <div className="text-xs font-['Montserrat'] text-[#323232] max-lg:text-center">
                      Milestone 2
                    </div>
                    <div className="text-xs font-['Montserrat'] text-[#323232] max-lg:text-center">
                      Milestone 3
                    </div>
                    <div className="text-xs font-['Montserrat'] text-[#323232] mr-px max-lg:text-center">
                      Milestone 4
                    </div>
                    <div className="text-xs font-['Montserrat'] text-[#323232] max-lg:text-center">
                      Milestone 5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-1/3 max-lg:w-2/5 max-md:w-4/10 px-3 py-2  h-full max-sm:h-1/2 max-sm:w-full  flex flex-col justify-between rounded-md shadow">
            <div className="flex justify-between items-center ">
              <p className="text-lg font-['Montserrat'] text-[#323232]">
                Messages
              </p>
              <p className="text-sm font-['Montserrat'] text-[#0259db]">
                View all
              </p>
            </div>
            <div className="flex flex-row gap-4 w-full items-center pt-2   ">
              <img src={thirdProfileIcon} className="" />
              <div className="flex flex-col w-5/6 gap-1 items-start ">
                <div className="flex justify-between items-center w-full">
                  <p className="font-['Montserrat'] text-sm font-medium text-[#323232]">
                    Team: Group Ferran
                  </p>
                  <p className="text-xs font-['Montserrat'] text-[#343f42] w-min">
                    12:05pm
                  </p>
                </div>
                <div className="flex justify-between items-start w-full">
                  <div className="text-[0.7rem] font-['Montserrat'] text-[#343f42] ">
                    Lorem Ipsum is simply kajns dskjas........
                  </div>
                  <div className="bg-[#032b68] p-[0.1rem] rounded-full self-start">
                    <div className="text-xs font-['Montserrat'] font-medium text-white">
                      12
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full items-center ">
              <img src={thirdProfileIcon} className="" />
              <div className="flex flex-col w-5/6 gap-1 items-start">
                <div className="flex justify-between items-center w-full">
                  <p className="font-['Montserrat'] text-sm font-medium text-[#323232]">
                    Client 1
                  </p>
                  <p className="text-xs font-['Montserrat'] text-[#343f42] w-min">
                    12:05pm
                  </p>
                </div>
                <div className="flex justify-between items-start w-full">
                  <div className="text-[0.7rem] font-['Montserrat'] text-[#343f42] ">
                    Lorem Ipsum is simply kajns dskjas........
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full items-center">
              <img src={thirdProfileIcon} className="" />
              <div className="flex flex-col w-5/6 gap-1 items-start ">
                <div className="flex justify-between items-center  w-full">
                  <p className="font-['Montserrat'] text-sm font-medium text-[#323232]">
                    Client 2
                  </p>
                  <p className="text-xs font-['Montserrat'] text-[#343f42] w-min">
                    12:05pm
                  </p>
                </div>
                <div className="flex justify-between items-start w-full">
                  <div className="text-[0.7rem] font-['Montserrat'] text-[#343f42] ">
                    Lorem Ipsum is simply kajns dskjas........
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full items-center">
              <img src={thirdProfileIcon} className="" />
              <div className="flex flex-col w-5/6 gap-1 items-start ">
                <div className="flex justify-between items-center  w-full">
                  <p className="font-['Montserrat'] text-sm font-medium text-[#323232]">
                    Client 3
                  </p>
                  <p className="text-xs font-['Montserrat'] text-[#343f42] w-min">
                    12:05pm
                  </p>
                </div>
                <div className="flex justify-between items-start w-full">
                  <div className="text-[0.7rem] font-['Montserrat'] text-[#343f42] ">
                    Lorem Ipsum is simply kajns dskjas........
                  </div>
                  <div className="bg-[#032b68] p-[0.1rem] rounded-full self-start">
                    {/* <div className="bg-[#032b68] p-[0.1rem] rounded-full self-start"> */}
                    <div className="text-xs font-['Montserrat'] font-medium text-white">
                      12
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full items-center">
              <img src={thirdProfileIcon} className="" />
              <div className="flex flex-col w-5/6 gap-1 items-start ">
                <div className="flex justify-between items-center  w-full">
                  <p className="font-['Montserrat'] text-sm font-medium text-[#323232]">
                    Team: Group Ferran
                  </p>
                  <p className="text-xs font-['Montserrat'] text-[#343f42] w-min">
                    12:05pm
                  </p>
                </div>
                <div className="flex justify-between items-start w-full">
                  <div className="text-[0.7rem] font-['Montserrat'] text-[#343f42] ">
                    Lorem Ipsum is simply kajns dskjas........
                  </div>
                  <div className="bg-[#032b68] p-[0.1rem] rounded-full self-start">
                    {/* <div className="bg-[#032b68] p-[0.1rem] rounded-full self-start"> */}
                    <div className="text-xs font-['Montserrat'] font-medium text-white">
                      12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
