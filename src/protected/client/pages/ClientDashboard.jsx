import Sidebar from "../../../common/Sidebar";
import PageHeader from "../../../common/PageHeader";
import icon1 from "../../../assets/icons/first_dashboard_icon.png";
import icon2 from "../../../assets/icons/second_dashboard_icon.png";
import icon3 from "../../../assets/icons/manage_project_icon.png";
import icon4 from "../../../assets/icons/fourth_dashboard_icon.png";
import icon5 from "../../../assets/icons/fifth_dashboard_icon.png";
import Google from "../../../assets/icons/Google.png";
import profile from "../../../assets/icons/third_profile.png";

const ClientDashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className="grow md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12">
          <PageHeader />
        </div>
        <div className="grow md:ml-[80px] lg:ml-[250px] px-3 lg:px-12 mt-5">
          <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div className=" bg-[#C00E3A] py-5 px-3 rounded-md">
              <p className=" mb-10 text-[20px] text-white font-[500]">
                Number of Projects
              </p>
              <div className=" flex items-center justify-between">
                <p className="text-[20px] text-white font-[600]">1000</p>
                <p className="">
                  <img src={icon1} alt=" " />
                </p>
              </div>
            </div>
            <div className=" bg-[#049F6D] py-5 px-3 rounded-md">
              <p className=" mb-10 text-[20px] text-white font-[500]">
                Number of Completed Projects
              </p>
              <div className=" flex items-center justify-between">
                <p className=" text-[20px] text-white font-[600]">1000</p>
                <p className=" ">
                  <img src={icon2} alt=" " />
                </p>
              </div>
            </div>
            <div className=" bg-[#A8A108] py-5 px-3 rounded-md">
              <p className=" mb-10 text-[20px] text-white font-[500]">
                Number of Running Projects
              </p>
              <div className=" flex items-center justify-between">
                <p className=" text-[20px] text-white font-[600]">1000</p>
                <p className=" ">
                  <img src={icon3} alt=" " />
                </p>
              </div>
            </div>
            <div className=" bg-[#981010] py-5 px-3 rounded-md">
              <p className=" mb-10 text-[20px] text-white font-[500]">
                Total Payment
              </p>
              <div className=" flex items-center justify-between">
                <p className=" text-[20px] text-white font-[600]">$1000</p>
                <p className=" ">
                  <img src={icon4} alt=" " />
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className=" grid sm:grid-cols-2 md:grid-cols-5  gap-4 my-5">
              <div className=" grid gap-5 col-span-1 md:col-span-3">
                <div className="   bg-[#2D7F04] py-5 px-3 rounded-md">
                  <p className=" mb-10 text-white font-[500] text-[32px]">
                    Payment Balance
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" text-[20px] text-white font-[600]">$1000</p>
                    <p className=" ">
                      <img src={icon5} alt=" " />
                    </p>
                  </div>
                </div>
                <div className=" bg-[#FFFFFF] shadow-md py-5 px-3 rounded-md">
                  <div className=" flex justify-start items-start gap-3">
                    <div className=" py-5 px-5 rounded-full bg-[#D0E1FA]">
                      <img src={Google} alt="" />
                    </div>
                    <div className="">
                      <div className="">
                        <p className=" mb-10 text-[20px] text-red-500 font-[500]">
                          Web Developer
                        </p>
                        <p>Google</p>
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[16px] font-[400]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Qui voluptate tempora ab temporibus aperiam,
                          consequuntur? Ea, voluptatem!
                        </p>
                        <div className=" flex justify-between items-center text-[12px] font-[400] text-[#323232]">
                          <p>London</p>
                          <p>$20k Hourly</p>
                          <p>3 Days left</p>
                          <p>Remote</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-span-2 bg-[#FFFFFF] shadow-md py-5 px-3 rounded-md">
                <div className="">
                  <div className=" flex items-center justify-between">
                    <p className=" text-[20px] text-[#323232] font-[400]">
                      Messages
                    </p>
                    <p className=" text-[#0259DB]  text-[14] font-[400]">
                      See All
                    </p>
                  </div>

                  <div className="">
                    <div className=" flex justify-between items-center mt-3">
                      <div className="">
                        <img src={profile} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[16px] font-[500]">
                          Team: Group Ferran
                        </p>
                        <p className=" text-[#323232] text-[11px] font-[400]">
                          Lorem Ipsum is simply kajns dskjas........
                        </p>
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[12px] font-[400]">
                          12:05pm
                        </p>
                        <p className=" h-5 w-5 flex items-center justify-center text-[12px] text-white text-center bg-[#032B68] rounded-full">
                          12
                        </p>
                      </div>
                    </div>

                    <div className=" flex justify-between items-center mt-3">
                      <div className="">
                        <img src={profile} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[16px] font-[500]">
                          Team: Group Ferran
                        </p>
                        <p className=" text-[#323232] text-[11px] font-[400]">
                          Lorem Ipsum is simply kajns dskjas........
                        </p>
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[12px] font-[400]">
                          12:05pm
                        </p>
                        <p className=" h-5 w-5 flex items-center justify-center text-[12px] text-white text-center bg-[#032B68] rounded-full">
                          12
                        </p>
                      </div>
                    </div>

                    <div className=" flex justify-between items-center mt-3">
                      <div className="">
                        <img src={profile} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[16px] font-[500]">
                          Team: Group Ferran
                        </p>
                        <p className=" text-[#323232] text-[11px] font-[400]">
                          Lorem Ipsum is simply kajns dskjas........
                        </p>
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[12px] font-[400]">
                          12:05pm
                        </p>
                        <p className=" h-5 w-5 flex items-center justify-center text-[12px] text-white text-center bg-[#032B68] rounded-full">
                          12
                        </p>
                      </div>
                    </div>

                    <div className=" flex justify-between items-center mt-3">
                      <div className="">
                        <img src={profile} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[16px] font-[500]">
                          Team: Group Ferran
                        </p>
                        <p className=" text-[#323232] text-[11px] font-[400]">
                          Lorem Ipsum is simply kajns dskjas........
                        </p>
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[12px] font-[400]">
                          12:05pm
                        </p>
                        <p className=" h-5 w-5 flex items-center justify-center text-[12px] text-white text-center bg-[#032B68] rounded-full">
                          12
                        </p>
                      </div>
                    </div>

                    <div className=" flex justify-between items-center mt-3">
                      <div className="">
                        <img src={profile} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[16px] font-[500]">
                          Team: Group Ferran
                        </p>
                        <p className=" text-[#323232] text-[11px] font-[400]">
                          Lorem Ipsum is simply kajns dskjas........
                        </p>
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[12px] font-[400]">
                          12:05pm
                        </p>
                        <p className=" h-5 w-5 flex items-center justify-center text-[12px] text-white text-center bg-[#032B68] rounded-full">
                          12
                        </p>
                      </div>
                    </div>

                    <div className=" flex justify-between items-center mt-3">
                      <div className="">
                        <img src={profile} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[16px] font-[500]">
                          Team: Group Ferran
                        </p>
                        <p className=" text-[#323232] text-[11px] font-[400]">
                          Lorem Ipsum is simply kajns dskjas........
                        </p>
                      </div>
                      <div className="">
                        <p className=" text-[#323232] text-[12px] font-[400]">
                          12:05pm
                        </p>
                        <p className=" h-5 w-5 flex items-center justify-center text-[12px] text-white text-center bg-[#032B68] rounded-full">
                          12
                        </p>
                      </div>
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
};

export default ClientDashboard;
