import React from "react";
import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import { Link } from "react-router-dom";

const GloballandingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[62px] h-[1078px] justify-start mx-auto p-[47px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group11.svg')" }}
            >
              <div className="flex md:flex-col flex-row gap-5 md:gap-5 items-center justify-start ml-3 md:ml-[0] w-[92%] md:w-full">
                <Img
                  className="h-[54px] sm:h-auto  w-[168px] md:w-full"
                  src="images/img_logo31scaled.png"
                  alt="logo31scaled"
                />
                <Link to="/">
                  <Text className="md:ml-[0] ml-[40%] text-gray-900" size="txtRobotoRomanSemiBold18">Home</Text>
                </Link>
                <Link to="/">
                  <Text className="md:ml-[0] ml-[4%] text-gray-900" size="txtRobotoRomanSemiBold18">About us</Text>
                </Link>
                <Link to="/">
                  <Text className="md:ml-[0] ml-[4%] text-gray-900" size="txtRobotoRomanSemiBold18">Courses</Text>
                </Link>
                <Link to="/">
                  <Text className="md:ml-[0] ml-[4%] text-gray-900" size="txtRobotoRomanSemiBold18">Our Service</Text>
                </Link>
                <Link to="/">
                  <Text className="md:ml-[0] ml-[4%] text-gray-900" size="txtRobotoRomanSemiBold18">Contact us</Text>
                </Link>
                <Button
                  className="cursor-pointer font-medium md:ml-[0] w-[150px] h-[45px] ml-[5%] sm:text-[21px] md:text-[23px] text-[20px] text-center m-auto"
                  shape="round"
                >
                  Sign in
                </Button>
              </div>
              <div className="md:h-[1543px] h-[756px] sm:h-[854px] mb-[100px] ml-9 md:ml-[0] mr-[5px] relative w-[98%] md:w-full">
                <div className="absolute flex flex-col gap-[47px] inset-x-[0] justify-start mx-auto top-[9%] w-[88%]">
                  <div className="border-[50px] border-blue-50_33 border-solid h-[408px] md:ml-[0] ml-[1161px] rounded-[50%] w-[408px]"></div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[158px] mr-[1411px] rounded-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                    shape="round"
                  >
                    Continue
                  </Button>
                </div>
                <div className="absolute bottom-[9%] md:h-[490px] h-[543px] right-[8%] w-1/2 md:w-full">
                  <div className="absolute md:h-[490px] h-[543px] inset-y-[0] left-[0] my-auto w-[90%] md:w-full">
                    <div className="absolute md:h-[490px] h-[500px] right-[0] top-[0] w-[91%] md:w-full">
                      <Img
                        className="absolute h-[440px] inset-x-[0] mx-auto top-[0]"
                        src="images/img_group_blue_gray_100.svg"
                        alt="group"
                      />
                      <Img
                        className="absolute h-[490px] inset-y-[0] my-auto right-[11%]"
                        src="images/img_group_white_a700.svg"
                        alt="group_One"
                      />
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col gap-[59px] h-[427px] justify-start left-[0] p-0.5 w-[43%]"
                      style={{
                        backgroundImage: "url('images/img_group12.svg')",
                      }}
                    >
                      <Img
                        className="h-[69px] md:ml-[0] ml-[29px] mr-[187px]"
                        src="images/img_group_orange_a200.svg"
                        alt="group_Two"
                      />
                      <Img
                        className="h-3.5 mb-[279px] md:ml-[0] ml-[232px]"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute h-[73px] right-[6%] top-[17%]"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <div className="absolute bottom-[0] md:h-[221px] h-[348px] right-[0] w-2/5">
                    <Img
                      className="absolute bottom-[0] h-5 inset-x-[0] mx-auto"
                      src="images/img_group_blue_gray_100_20x342.svg"
                      alt="group_Three"
                    />
                    <div className="absolute md:h-[221px] h-[344px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute md:h-[221px] h-[343px] inset-y-[0] my-auto right-[0] w-[73%]">
                        <div className="absolute md:h-[221px] h-[343px] inset-y-[0] left-[0] my-auto w-[95%]">
                          <Img
                            className="absolute bottom-[0] h-[220px] inset-x-[0] mx-auto"
                            src="images/img_group_gray_800.svg"
                            alt="group_Four"
                          />
                          <div className="absolute md:h-[221px] h-[315px] right-[0] top-[0] w-[89%]">
                            <div className="absolute md:h-[221px] h-[315px] inset-[0] justify-center m-auto w-full">
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Img
                                    className="h-[66px] w-[66px]"
                                    src="images/img_play.svg"
                                    alt="play"
                                  />
                                  <div className="md:h-[155px] h-[233px] relative w-full">
                                    <div className="md:h-[155px] h-[233px] m-auto w-full">
                                      <div className="absolute md:h-[155px] h-[230px] inset-y-[0] left-[0] my-auto w-[89%]">
                                        <div className="absolute md:h-[155px] h-[170px] right-[5%] top-[0] w-[74%]">
                                          <Img
                                            className="absolute h-[155px] left-[0] top-[0]"
                                            src="images/img_group_white_a700_155x132.svg"
                                            alt="group_Five"
                                          />
                                          <Img
                                            className="absolute bottom-[0] h-[61px] inset-x-[0] mx-auto"
                                            src="images/img_group_teal_400.svg"
                                            alt="group_Six"
                                          />
                                        </div>
                                        <Img
                                          className="absolute bottom-[0] h-[114px] inset-x-[0] mx-auto"
                                          src="images/img_group_teal_400_114x189.svg"
                                          alt="group_Seven"
                                        />
                                      </div>
                                      <Img
                                        className="absolute bottom-[0] h-[129px] right-[0]"
                                        src="images/img_group_teal_400_129x188.svg"
                                        alt="group_Eight"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[116px] left-[7%] top-[7%]"
                                      src="images/img_group_light_blue_a700.svg"
                                      alt="group_Nine"
                                    />
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="absolute h-[30px] left-[31%] top-[0]"
                                src="images/img_play_gray_800.svg"
                                alt="play_One"
                              />
                            </div>
                            <Img
                              className="absolute h-4 left-[35%] top-[4%]"
                              src="images/img_settings_yellow_800.svg"
                              alt="settings_One"
                            />
                            <Img
                              className="absolute h-[84px] inset-x-[0] mx-auto top-[4%]"
                              src="images/img_play_deep_orange_a100.svg"
                              alt="play_Two"
                            />
                            <Img
                              className="absolute bottom-[26%] h-[67px] right-[22%]"
                              src="images/img_group_gray_800_67x108.svg"
                              alt="group_Ten"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute h-12 right-[0] top-[31%] w-[49px]"
                          src="images/img_profile.svg"
                          alt="profile"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-36 left-[0]"
                        src="images/img_group_red_400_01.svg"
                        alt="group_Eleven"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[44%] h-5 left-[34%]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                </div>
                <div className="absolute flex flex-col gap-[9px] items-center justify-start left-[6%] top-[23%]">
                  <Text
                    className="inset-[0] leading-[135.00%] md:text-5xl text-[69px] text-gray-900_01"
                    size="txtRobotoRomanExtraBold69"
                  >
                    <span className="text-gray-900_01 font-roboto text-left font-extrabold">
                      The{" "}
                    </span>
                    <span className="text-yellow-900_01 font-roboto text-left font-extrabold">
                      <>
                        Smart
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900_01 font-roboto text-left font-extrabold">
                      Choice For
                    </span>
                    <span className="text-yellow-900_01 font-roboto text-left font-extrabold">
                      {" "}
                      Future
                    </span>
                  </Text>
                  <Text
                    className="leading-[171.00%] text-blue_gray-400 text-xl w-full"
                    size="txtRobotoRomanMedium20"
                  >
                    Making India's youth a better version of themselves
                  </Text>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex-col hidden justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[60px] w-[96%] md:w-full">
                      <Img
                        className="h-[42px] md:mt-0 mt-[65px] w-[42px]"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                      <Img
                        className="h-[17px] md:mt-0 mt-28 w-[17px]"
                        src="images/img_search_gray_800_01.svg"
                        alt="search"
                      />
                      <Img
                        className="h-[132px] mb-1.5 md:ml-[0] ml-[488px] md:mt-0 mt-[22px]"
                        src="images/img_group_gray_800_01.svg"
                        alt="group_Twelve"
                      />
                      <Img
                        className="h-[89px] md:ml-[0] ml-[282px] md:mt-0 mt-[71px]"
                        src="images/img_group_gray_800_01_89x102.svg"
                        alt="group_Thirteen"
                      />
                      <Img
                        className="h-[91px] md:ml-[0] ml-[166px]"
                        src="images/img_maximize.svg"
                        alt="maximize"
                      />
                      <div className="h-[86px] md:ml-[0] ml-[350px] md:mt-0 mt-[21px] relative w-[5%] md:w-full">
                        <div className="absolute h-[86px] inset-[0] justify-center m-auto w-full">
                          <Img
                            className="absolute h-[37px] inset-[0] justify-center m-auto"
                            src="images/img_settings_gray_800_01.svg"
                            alt="settings_Two"
                          />
                          <Img
                            className="absolute h-[86px] inset-[0] justify-center m-auto"
                            src="images/img_clock_gray_800_01.svg"
                            alt="clock_One"
                          />
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[31px] sm:px-5 w-[93%]"
                          style={{
                            backgroundImage: "url('images/img_group13.svg')",
                          }}
                        >
                          <Img
                            className="h-[9px] my-1.5 w-[9px]"
                            src="images/img_search_gray_800_01.svg"
                            alt="search_One"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-[76px] md:ml-[0] ml-[1708px] mt-[212px] w-[76px]"
                      src="images/img_edit.svg"
                      alt="edit"
                    />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-7 mt-24 w-[99%] md:w-full">
                      <Img
                        className="h-[116px] md:mt-0 mt-[66px]"
                        src="images/img_group_gray_800_01_116x86.svg"
                        alt="group_Fourteen"
                      />
                      <Img
                        className="h-32 mb-5 md:ml-[0] ml-[284px] md:mt-0 mt-[62px]"
                        src="images/img_group_gray_800_01_128x120.svg"
                        alt="group_Fifteen"
                      />
                      <Img
                        className="h-[75px] md:ml-[0] ml-[647px] md:mt-0 mt-[135px] w-[76px]"
                        src="images/img_search.svg"
                        alt="search_Two"
                      />
                      <div className="h-[115px] md:h-[97px] md:ml-[0] ml-[447px] relative w-[6%] md:w-full">
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col gap-[5px] justify-start w-full">
                            <div
                              className="bg-cover bg-no-repeat md:h-[77px] h-[93px] p-[5px] relative w-[93px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group14.svg')",
                              }}
                            >
                              <div className="h-20 md:h-[77px] my-auto w-[77%]">
                                <Img
                                  className="absolute h-[77px] inset-y-[0] left-[0] my-auto"
                                  src="images/img_clock_gray_800_01_77x60.svg"
                                  alt="clock_Two"
                                />
                                <Img
                                  className="absolute h-8 left-[10%] top-[0]"
                                  src="images/img_settings_gray_800_01_32x43.svg"
                                  alt="settings_Three"
                                />
                                <Img
                                  className="absolute bottom-[10%] h-5 right-[0]"
                                  src="images/img_settings_gray_800_01_20x36.svg"
                                  alt="settings_Four"
                                />
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto py-[21px] w-[65%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group15.svg')",
                                }}
                              >
                                <Img
                                  className="h-[31px]"
                                  src="images/img_settings_gray_800_01_31x58.svg"
                                  alt="settings_Five"
                                />
                              </div>
                            </div>
                            <Img
                              className="h-[15px] ml-11 md:ml-[0]"
                              src="images/img_television.svg"
                              alt="television"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[12%] h-3.5 right-[35%]"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                        <Img
                          className="absolute bottom-[0] h-[9px] right-[11%]"
                          src="images/img_television_gray_800_01.svg"
                          alt="television_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="bg-deep_purple-A700 sm:flex-col flex-row gap-[53px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[-130px] mx-auto p-[37px] sm:px-5 rounded-[14px] w-4/5 z-[1]"
              orientation="horizontal"
            >
              <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-start sm:ml-[0] sm:mt-0 my-[31px] w-full">
                <div className="bg-white-A700_33 h-[101px] mb-9 rounded-[23px] w-1/4"></div>
                <div className="flex flex-col gap-4 items-start justify-start">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtRobotoBold28"
                  >
                    Learn The Latest Skills
                  </Text>
                  <Text
                    className="leading-[28.00px] text-[15px] text-white-A700_99 w-full"
                    size="txtRobotoRomanMedium15"
                  >
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a BC, making it over 2000 years old.
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-center sm:ml-[0] sm:mt-0 my-8 w-full">
                <div className="bg-white-A700_33 h-[101px] mb-9 rounded-[23px] w-1/4"></div>
                <div className="flex flex-col gap-3.5 items-start justify-start">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtRobotoBold28"
                  >
                    Get Ready For a Career
                  </Text>
                  <Text
                    className="leading-[28.00px] text-[15px] text-white-A700_99 w-full"
                    size="txtRobotoRomanMedium15"
                  >
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a BC, making it over 2000 years old.
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-center sm:ml-[0] sm:mt-0 my-[31px] w-full">
                <div className="bg-white-A700_33 h-[101px] mb-9 rounded-[23px] w-1/4"></div>
                <div className="flex flex-col gap-[17px] items-start justify-start">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtRobotoBold28"
                  >
                    Earn a Certificate
                  </Text>
                  <Text
                    className="leading-[28.00px] text-[15px] text-white-A700_99 w-full"
                    size="txtRobotoRomanMedium15"
                  >
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a BC, making it over 2000 years old.
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[454px] items-start justify-end md:ml-[0] ml-[646px] mt-1.5 md:px-5 w-[66%] md:w-full">
            <div className="flex flex-col items-center justify-start md:mt-0 mt-[58px]">
              <Text
                className="capitalize sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                size="txtJostSemiBold50"
              >
                Our Numbers Speak for us
              </Text>
              <Text
                className="text-blue_gray-400 text-xl"
                size="txtPoppinsMedium20"
              >
                Lorem Ipsum is simply dummy text of the printing.
              </Text>
            </div>
            <Img
              className="h-44"
              src="images/img_group_gray_800_01_176x168.svg"
              alt="group_Sixteen"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-[42px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1668px] mt-[25px] mx-auto pb-0.5 pr-0.5 md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[3px] rounded-[30px] shadow-bs w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[11px] rounded-[30px] shadow-bs w-full">
                <Text
                  className="leading-[156.50%] mt-[18px] text-[19px] text-center text-gray-500 tracking-[0.38px]"
                  size="txtRobotoRomanRegular19"
                >
                  <span className="md:text-5xl text-light_blue-700 font-roboto text-[64px] font-bold">
                    <>
                      20,000+
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-roboto font-normal">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px] font-normal">
                    <>
                      People <br />
                      Impacted
                    </>
                  </span>
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[3px] rounded-[30px] shadow-bs w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-end p-3 rounded-[30px] shadow-bs w-full">
                <Text
                  className="leading-[156.50%] mt-4 text-[19px] text-center text-gray-500 tracking-[0.38px]"
                  size="txtRobotoRomanRegular19"
                >
                  <span className="md:text-5xl text-light_blue-700 font-roboto text-[64px] font-bold">
                    <>
                      950+
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-roboto font-normal">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px] font-normal">
                    <>
                      Testimonials
                      <br />
                      Received
                    </>
                  </span>
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full">
              <Text
                className="leading-[156.50%] mt-[3px] text-[19px] text-center text-gray-500 tracking-[0.38px]"
                size="txtRobotoRomanRegular19"
              >
                <span className="md:text-5xl text-light_blue-700 font-roboto text-[64px] font-bold">
                  <>
                    100+
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-roboto font-normal">
                  <>
                    <br />
                  </>
                </span>
                <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px] font-normal">
                  Institutions Worked With
                </span>
              </Text>
            </div>
          </List>
          <div className="md:h-[1438px] h-[707px] sm:h-[990px] mt-[356px] md:px-5 relative w-full">
            <div className="md:h-[1082px] sm:h-[634px] h-[707px] m-auto w-full">
              <div className="absolute bg-blue-50 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[50px] md:px-10 sm:px-5 top-[0] w-full">
                <div className="flex flex-col gap-[34px] items-center justify-start ml-16 md:ml-[0] mt-7 w-[82%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[89px] md:mt-0 mt-[158px]"
                      src="images/img_group_gray_800_01_89x102.svg"
                      alt="group_Seventeen"
                    />
                    <div className="flex flex-col gap-[46px] items-start justify-start">
                      <Text
                        className="leading-[135.00%] md:text-5xl text-[69px] text-gray-900_01"
                        size="txtRobotoRomanExtraBold69"
                      >
                        <span className="text-gray-900_01 font-roboto text-left font-extrabold">
                          Premium{" "}
                        </span>
                        <span className="text-yellow-900_01 font-roboto text-left font-extrabold">
                          <>
                            Learning
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900_01 font-roboto text-left font-extrabold">
                          Experience
                        </span>
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-[23px] items-end justify-between w-full">
                          <div className="bg-gray-800_01 h-[101px] rounded-[23px] w-[102px]"></div>
                          <div className="flex flex-col gap-4 items-start justify-start mb-1 md:mt-0 mt-3">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01"
                              size="txtRobotoRomanMedium30"
                            >
                              Easily Accessible
                            </Text>
                            <Text
                              className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-400"
                              size="txtRobotoRomanMedium26"
                            >
                              Learning Will fell Very Comfortable With Courslab.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="h-[115px] md:h-[97px] md:mt-0 mt-6 relative w-[7%] md:w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                        <div className="flex flex-col gap-[5px] justify-start w-full">
                          <div
                            className="bg-cover bg-no-repeat md:h-[77px] h-[93px] p-[5px] relative w-[93px]"
                            style={{
                              backgroundImage: "url('images/img_group14.svg')",
                            }}
                          >
                            <div className="h-20 md:h-[77px] my-auto w-[77%]">
                              <Img
                                className="absolute h-[77px] inset-y-[0] left-[0] my-auto"
                                src="images/img_clock_gray_800_01_77x60.svg"
                                alt="clock_Three"
                              />
                              <Img
                                className="absolute h-8 left-[10%] top-[0]"
                                src="images/img_settings_gray_800_01_32x43.svg"
                                alt="settings_Six"
                              />
                              <Img
                                className="absolute bottom-[10%] h-5 right-[0]"
                                src="images/img_settings_gray_800_01_20x36.svg"
                                alt="settings_Seven"
                              />
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto py-[21px] w-[65%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group15.svg')",
                              }}
                            >
                              <Img
                                className="h-[31px]"
                                src="images/img_settings_gray_800_01_31x58.svg"
                                alt="settings_Eight"
                              />
                            </div>
                          </div>
                          <Img
                            className="h-[15px] ml-11 md:ml-[0]"
                            src="images/img_television.svg"
                            alt="television_Two"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[12%] h-3.5 right-[35%]"
                        src="images/img_vector.svg"
                        alt="vector_One"
                      />
                      <Img
                        className="absolute bottom-[0] h-[9px] right-[11%]"
                        src="images/img_television_gray_800_01.svg"
                        alt="television_Three"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
                      <div className="flex md:flex-col flex-row gap-[23px] items-end justify-between w-full">
                        <div className="bg-gray-800_01 h-[101px] rounded-[23px] w-[102px]"></div>
                        <div className="flex flex-col gap-4 items-start justify-start mb-1 md:mt-0 mt-3">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01"
                            size="txtRobotoRomanMedium30"
                          >
                            Fun learning expe
                          </Text>
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-400"
                            size="txtRobotoRomanMedium26"
                          >
                            Learning Will fell Very Comfortable With Courslab.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] md:h-[604px] h-[644px] left-[12%] w-[27%] sm:w-full">
                <div className="absolute bottom-[0] h-[607px] inset-x-[0] mx-auto w-full">
                  <div className="md:h-[452px] sm:h-[573px] h-[590px] mb-[-14.5px] ml-[33px] mt-auto w-[83%] sm:w-full z-[1]">
                    <div className="md:h-[466px] sm:h-[587px] h-[590px] m-auto w-full">
                      <div className="absolute md:h-[466px] sm:h-[587px] h-[588px] inset-y-[0] my-auto right-[6%] w-[85%]">
                        <Img
                          className="h-[137px] ml-auto mr-[100px] mt-[140px]"
                          src="images/img_group_deep_orange_a100.svg"
                          alt="group_Nineteen"
                        />
                        <div className="absolute md:h-[466px] sm:h-[587px] h-[588px] inset-[0] justify-center m-auto w-full">
                          <Img
                            className="absolute bottom-[0] h-[397px] left-[0]"
                            src="images/img_group_orange_a200_397x194.svg"
                            alt="group_Twenty"
                          />
                          <div className="absolute md:h-[466px] sm:h-[587px] h-[588px] inset-y-[0] my-auto right-[0] w-[92%]">
                            <div className="absolute md:h-[466px] sm:h-[587px] h-[588px] inset-[0] justify-center m-auto w-full">
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[96%]">
                                <div className="flex flex-col md:gap-10 gap-[161px] justify-start w-full">
                                  <Img
                                    className="h-[131px]"
                                    src="images/img_group_gray_800_131x68.svg"
                                    alt="group_TwentyOne"
                                  />
                                  <Img
                                    className="h-[295px] md:ml-[0] ml-[41px]"
                                    src="images/img_group_gray_800_295x269.svg"
                                    alt="group_TwentyTwo"
                                  />
                                </div>
                              </div>
                              <div className="absolute h-[295px] left-[0] top-[3%] w-[47%]">
                                <div className="h-[116px] md:h-[88px] mb-[-17.8px] ml-auto mr-3.5 w-[62%] z-[1]">
                                  <div className="absolute md:h-[88px] h-[89px] left-[0] top-[0] w-[94%]">
                                    <Img
                                      className="absolute h-[88px] inset-[0] justify-center m-auto"
                                      src="images/img_play_gray_800_88x83.svg"
                                      alt="play_Three"
                                    />
                                    <Img
                                      className="absolute h-[63px] left-[0] top-[0]"
                                      src="images/img_contrast_orange_a200.svg"
                                      alt="contrast_Three"
                                    />
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[107px] items-start justify-start p-[17px] right-[0] w-[95%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group20.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-8 mb-[37px] mt-0.5"
                                      src="images/img_user.svg"
                                      alt="user"
                                    />
                                  </div>
                                </div>
                                <div className="md:h-[156px] h-[197px] mt-auto mx-auto w-full">
                                  <div className="absolute bottom-[0] flex flex-col left-[3%] w-[76%]">
                                    <Img
                                      className="h-[22px] mx-auto"
                                      src="images/img_group_blue_800_22x113.svg"
                                      alt="group_TwentyThree"
                                    />
                                    <Img
                                      className="h-[54px] mb-auto mt-[-20.35px] mx-auto z-[1]"
                                      src="images/img_group_deep_orange_a100_54x107.svg"
                                      alt="group_TwentyFour"
                                    />
                                  </div>
                                  <div className="absolute md:h-[156px] h-[170px] inset-x-[0] mx-auto top-[0] w-full">
                                    <div className="absolute h-[150px] md:h-[72px] left-[0] top-[0] w-[91%]">
                                      <div
                                        className="absolute bg-cover bg-no-repeat h-[149px] md:h-[72px] inset-[0] justify-center m-auto w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group19.svg')",
                                        }}
                                      >
                                        <div className="absolute bottom-[16%] flex flex-col items-center justify-start right-[0] w-[92%]">
                                          <div className="flex flex-col items-end justify-start w-full">
                                            <Img
                                              className="h-2"
                                              src="images/img_settings_blue_800.svg"
                                              alt="settings_Nine"
                                            />
                                            <div className="flex flex-row gap-[59px] items-start justify-end mt-[7px] w-[65%] md:w-full">
                                              <Img
                                                className="h-[5px]"
                                                src="images/img_vector_blue_800.svg"
                                                alt="vector_Two"
                                              />
                                              <Img
                                                className="h-2 mt-1 w-2"
                                                src="images/img_settings_blue_800_8x8.svg"
                                                alt="settings_Ten"
                                              />
                                            </div>
                                            <div className="flex flex-row items-start justify-start mr-3.5 w-[88%] md:w-full">
                                              <Img
                                                className="h-2.5 w-[11px]"
                                                src="images/img_settings_blue_800_10x11.svg"
                                                alt="settings_Eleven"
                                              />
                                              <Img
                                                className="h-2.5 ml-[47px] mt-[9px] w-[11px]"
                                                src="images/img_settings_blue_800_10x11.svg"
                                                alt="settings_Twelve"
                                              />
                                              <Img
                                                className="h-[13px] ml-[33px] mt-[7px]"
                                                src="images/img_settings_blue_800_10x11.svg"
                                                alt="settings_Thirteen"
                                              />
                                            </div>
                                            <div className="flex flex-row gap-[26px] items-start justify-end mt-0.5 w-[36%] md:w-full">
                                              <Img
                                                className="h-[11px] mt-[3px] w-2.5"
                                                src="images/img_settings_blue_800_10x11.svg"
                                                alt="settings_Fourteen"
                                              />
                                              <Img
                                                className="h-1"
                                                src="images/img_vector_blue_800_4x8.svg"
                                                alt="vector_Three"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute bottom-[37%] h-2 right-[21%]"
                                          src="images/img_settings_blue_800_10x11.svg"
                                          alt="settings_Fifteen"
                                        />
                                        <Img
                                          className="absolute h-[3px] right-1/4 top-[36%]"
                                          src="images/img_vector_blue_800.svg"
                                          alt="vector_Four"
                                        />
                                        <div className="absolute flex flex-row items-end justify-center right-[13%] top-[0] w-[51%]">
                                          <div className="flex flex-col items-start justify-start mb-[3px] w-[70%]">
                                            <Img
                                              className="h-5 md:ml-[0] ml-[3px]"
                                              src="images/img_contrast_blue_800.svg"
                                              alt="contrast_One"
                                            />
                                            <div className="flex flex-row gap-6 items-start justify-between mt-0.5 w-[92%] md:w-full">
                                              <Img
                                                className="h-2"
                                                src="images/img_settings_blue_800_10x11.svg"
                                                alt="settings_Sixteen"
                                              />
                                              <Img
                                                className="h-3 mt-[5px]"
                                                src="images/img_settings_blue_800_10x11.svg"
                                                alt="settings_Seventeen"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            className="h-[9px] mb-[19px] ml-[5px] mt-4 w-2"
                                            src="images/img_settings_blue_800_9x8.svg"
                                            alt="settings_Eighteen"
                                          />
                                          <Img
                                            className="h-[13px] mt-[31px]"
                                            src="images/img_settings_blue_800_10x11.svg"
                                            alt="settings_Nineteen"
                                          />
                                        </div>
                                        <Img
                                          className="absolute bottom-[13%] h-[5px] right-[8%]"
                                          src="images/img_vector_blue_800_5x3.svg"
                                          alt="vector_Five"
                                        />
                                        <Img
                                          className="absolute bottom-[24%] h-1.5 left-[12%]"
                                          src="images/img_settings_blue_800_10x11.svg"
                                          alt="settings_Twenty"
                                        />
                                        <Img
                                          className="absolute bottom-[11%] h-2.5 left-[8%] w-[11px]"
                                          src="images/img_settings_blue_800_10x11.svg"
                                          alt="settings_TwentyOne"
                                        />
                                        <Img
                                          className="absolute bottom-[8%] h-1 left-[18%]"
                                          src="images/img_vector_blue_800.svg"
                                          alt="vector_Six"
                                        />
                                        <Img
                                          className="absolute bottom-[10%] h-3 right-[12%]"
                                          src="images/img_group.svg"
                                          alt="group_TwentyFive"
                                        />
                                        <Img
                                          className="absolute h-[39px] right-[2%] top-[16%]"
                                          src="images/img_settings_deep_orange_a100.svg"
                                          alt="settings_TwentyTwo"
                                        />
                                        <Img
                                          className="absolute h-[72px] left-[0] top-[0]"
                                          src="images/img_close_deep_orange_a100.svg"
                                          alt="close_One"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-[39px] right-[29%] top-[0]"
                                        src="images/img_contrast_white_a700.svg"
                                        alt="contrast_Two"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[158px] inset-x-[0] items-end justify-start mx-auto p-8 sm:px-5 w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group_deep_orange_a100.svg')",
                                      }}
                                    >
                                      <div className="flex flex-col gap-[53px] items-start justify-start mb-0.5 w-[67%] md:w-full">
                                        <Img
                                          className="h-[29px] ml-0.5 md:ml-[0]"
                                          src="images/img_group_blue_800.svg"
                                          alt="group_TwentySix"
                                        />
                                        <Img
                                          className="h-2"
                                          src="images/img_settings_red_300.svg"
                                          alt="settings_TwentyThree"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute bottom-[13%] h-[217px] left-[0]"
                              src="images/img_group_gray_800_217x215.svg"
                              alt="group_TwentySeven"
                            />
                            <Img
                              className="absolute bottom-[0] h-[78px] right-[17%]"
                              src="images/img_television_light_blue_a700.svg"
                              alt="television_Four"
                            />
                            <Img
                              className="absolute h-[57px] right-[16%] top-[10%]"
                              src="images/img_favorite.svg"
                              alt="favorite"
                            />
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[307px] inset-x-[0] mx-auto"
                        src="images/img_group_teal_400_307x423.svg"
                        alt="group_TwentyEight"
                      />
                    </div>
                    <div className="absolute flex flex-row inset-x-[0] items-end justify-between mx-auto top-[23%] w-[90%]">
                      <Img
                        className="h-[68px] mt-20"
                        src="images/img_favorite_red_400_01.svg"
                        alt="favorite_One"
                      />
                      <Img
                        className="h-[149px]"
                        src="images/img_group_gray_800_149x232.svg"
                        alt="group_TwentyNine"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-[31px] mt-auto mx-auto"
                    src="images/img_group_blue_gray_100_20x342.svg"
                    alt="group_Eighteen"
                  />
                </div>
                <Img
                  className="absolute h-[604px] right-[0] top-[0]"
                  src="images/img_group_gray_800_604x243.svg"
                  alt="group_Thirty"
                />
                <Img
                  className="absolute h-[91px] left-[7%] top-[0]"
                  src="images/img_maximize_gray_800_01.svg"
                  alt="maximize_One"
                />
              </div>
            </div>
            <div className="absolute flex flex-col h-max inset-y-[0] items-end justify-start left-[36%] my-auto w-[7%]">
              <Img
                className="h-[86px] mr-[39px]"
                src="images/img_settings_gray_800_01_86x78.svg"
                alt="settings_TwentyFour"
              />
              <Img
                className="h-[76px] mt-[225px] w-[76px]"
                src="images/img_edit.svg"
                alt="edit_One"
              />
              <Img
                className="h-[75px] mt-[66px] w-[76px]"
                src="images/img_search.svg"
                alt="search_Three"
              />
            </div>
          </div>
          <div className="h-[1171px] sm:h-[1236px] md:h-[2755px] mt-[67px] md:px-5 relative w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-4/5">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 tracking-[0.80px]"
                  size="txtPoppinsSemiBold40"
                >
                  What student’s say
                </Text>
                <Text
                  className="mt-0.5 text-blue_gray-400 text-xl"
                  size="txtPoppinsMedium20"
                >
                  Lorem Ipsum is simply dummy text of the printing.
                </Text>
                <div className="flex flex-col font-roboto items-center justify-start mt-12 w-[85%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start shadow-bs w-[33%] md:w-full">
                        <div className="bg-white-A700 flex flex-col gap-7 justify-start mb-0.5 p-[13px] shadow-bs w-full">
                          <Text
                            className="leading-[156.50%] md:ml-[0] ml-[19px] mt-[19px] text-[19px] text-gray-500 tracking-[0.38px]"
                            size="txtRobotoRomanRegular19"
                          >
                            <>
                              “Teachings of the great explore of truth, <br />
                              the master-builder of human happiness. <br />
                              no one rejects,dislikes, or avoids pleasure <br />
                              itself, pleasure itself”
                            </>
                          </Text>
                          <div className="flex flex-col items-center justify-start mb-[21px] md:ml-[0] ml-[82px] w-[26%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-[17px] text-blue_gray-900_01 tracking-[0.34px]"
                                size="txtRobotoRomanMedium17"
                              >
                                Finlay Kirk
                              </Text>
                              <Text
                                className="mt-1 text-[13px] text-blue_gray-400_01 tracking-[0.26px]"
                                size="txtRobotoRomanRegular13"
                              >
                                Web Developper
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start shadow-bs w-[33%] md:w-full">
                        <div className="bg-white-A700 flex flex-col gap-[26px] justify-start mb-0.5 p-8 sm:px-5 shadow-bs w-full">
                          <Text
                            className="leading-[156.50%] mr-2.5 text-[19px] text-gray-500 tracking-[0.38px]"
                            size="txtRobotoRomanRegular19"
                          >
                            <>
                              “Complete account of the system and
                              <br />
                              expound the actual Contrary to popular
                              <br />
                              belief, Lorem Ipsum is not simply <br />
                              random text. It has roots”
                            </>
                          </Text>
                          <div className="flex flex-col items-center justify-start mb-1 md:ml-[0] ml-[63px] w-1/2 md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-[17px] text-blue_gray-900_01 tracking-[0.34px]"
                                size="txtRobotoRomanMedium17"
                              >
                                Dannette P. Cervantes
                              </Text>
                              <Text
                                className="mt-[3px] text-[13px] text-blue_gray-400_01 tracking-[0.26px]"
                                size="txtRobotoRomanRegular13"
                              >
                                Web Design
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start shadow-bs w-[33%] md:w-full">
                        <div className="bg-white-A700 flex flex-col gap-6 justify-center mb-0.5 p-3.5 shadow-bs w-full">
                          <Text
                            className="leading-[156.50%] md:ml-[0] ml-[13px] mt-[18px] text-[19px] text-gray-500 tracking-[0.38px]"
                            size="txtRobotoRomanRegular19"
                          >
                            <>
                              “There are many variations of passages
                              <br /> of Lorem Ipsum available, but the majority
                              <br /> have suffered alteration in some form,
                              <br /> by injected humour”
                            </>
                          </Text>
                          <div className="flex flex-col font-poppins items-center justify-start mb-[17px] md:ml-[0] ml-[75px] mr-[174px] w-[36%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-[17px] text-blue_gray-900_01 tracking-[0.34px]"
                                size="txtPoppinsMedium17"
                              >
                                Clara R. Altman
                              </Text>
                              <Text
                                className="text-[13px] text-blue_gray-400_01 tracking-[0.26px]"
                                size="txtPoppinsRegular13"
                              >
                                UI&UX Design
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <PagerIndicator
                      className="flex h-3.5 justify-center w-[126px]"
                      count={4}
                      activeCss="inline-block cursor-pointer h-3 bg-gray-800_01 w-[39px] rounded-md"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-gray-400 w-3.5"
                      selectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
                      unselectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
                    />
                  </div>
                </div>
                <Text
                  className="capitalize mt-[54px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                  size="txtJostSemiBold50"
                >
                  Our Tracks
                </Text>
                <Text
                  className="text-blue_gray-400 text-xl"
                  size="txtPoppinsMedium20"
                >
                  Lorem Ipsum is simply dummy text of the printing.
                </Text>
                <div className="flex flex-col items-center justify-start mt-[63px] w-full">
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[13px] rounded-[14px] shadow-bs1 w-[33%] md:w-full">
                      <Img
                        className="h-[238px] mb-48"
                        src="images/img_group337.svg"
                        alt="group337"
                      />
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-white-A700 flex flex-col gap-[17px] items-center justify-start sm:ml-[0] p-3 rounded-[14px] shadow-bs1 w-full">
                        <Img
                          className="h-[238px] mt-0.5"
                          src="images/img_group337.svg"
                          alt="group338"
                        />
                        <div className="flex flex-col items-center justify-start mb-[7px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtPoppinsMedium20Black900"
                            >
                              Tracy D. Wright
                            </Text>
                            <Text
                              className="text-base text-gray-600"
                              size="txtPoppinsMedium16"
                            >
                              Professor @George Brown College
                            </Text>
                            <Text
                              className="leading-[137.50%] mt-[13px] text-gray-500 text-lg"
                              size="txtRobotoRomanRegular18"
                            >
                              <>
                                Ut enim ad minim veniam, quis nost exercitation
                                <br />
                                ullamco laboris nisi ut allquip ex commodo.
                              </>
                            </Text>
                            <div className="flex flex-row font-poppins items-end justify-between mt-[15px] w-full">
                              <Text
                                className="mt-[9px] text-lg text-yellow-900_01"
                                size="txtPoppinsMedium18"
                              >
                                Engineering physics
                              </Text>
                              <Img
                                className="h-[38px]"
                                src="images/img_group353.svg"
                                alt="group353"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-4 items-center justify-start sm:ml-[0] p-[13px] rounded-[14px] shadow-bs1 w-full">
                        <Img
                          className="h-[238px]"
                          src="images/img_group337.svg"
                          alt="group339"
                        />
                        <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                            <div className="font-poppins md:h-[29px] h-[53px] relative w-3/5">
                              <Text
                                className="absolute left-[0] text-black-900 text-xl top-[0]"
                                size="txtPoppinsMedium20Black900"
                              >
                                Cynthia A. Nelson
                              </Text>
                              <Text
                                className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-gray-600 w-max"
                                size="txtPoppinsMedium16"
                              >
                                Professor @George Brown College
                              </Text>
                            </div>
                            <Text
                              className="leading-[137.50%] text-gray-500 text-lg"
                              size="txtRobotoRomanRegular18"
                            >
                              <>
                                Ut enim ad minim veniam, quis nost exercitation
                                <br />
                                ullamco laboris nisi ut allquip ex commodo.
                              </>
                            </Text>
                            <div className="flex flex-row font-poppins items-end justify-between w-full">
                              <Text
                                className="mt-[9px] text-lg text-yellow-900_01"
                                size="txtPoppinsMedium18"
                              >
                                Engineering physics
                              </Text>
                              <Img
                                className="h-[38px]"
                                src="images/img_group353.svg"
                                alt="group353"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[2%] flex flex-col items-center justify-start left-[11%] w-1/4">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Matthew E. McNatt
                </Text>
                <Text
                  className="text-base text-gray-600"
                  size="txtPoppinsMedium16"
                >
                  Professor @George Brown College
                </Text>
                <Text
                  className="leading-[137.50%] mt-[13px] text-gray-500 text-lg"
                  size="txtRobotoRomanRegular18"
                >
                  <>
                    Ut enim ad minim veniam, quis nost exercitation
                    <br />
                    ullamco laboris nisi ut allquip ex commodo.
                  </>
                </Text>
                <div className="flex flex-row font-poppins items-end justify-between mt-[15px] w-full">
                  <Text
                    className="mt-[9px] text-lg text-yellow-900_01"
                    size="txtPoppinsMedium18"
                  >
                    Engineering physics
                  </Text>
                  <Img
                    className="h-[38px]"
                    src="images/img_group353.svg"
                    alt="group353"
                  />
                </div>
              </div>
            </div>
            <div className="absolute h-[778px] left-[0] top-[3%] w-[18%]">
              <Img
                className="h-[778px] m-auto object-cover w-full"
                src="images/img_ellipse27.png"
                alt="ellipseTwentySeven"
              />
              <Img
                className="absolute bottom-[31%] h-44 right-[13%]"
                src="images/img_group_176x168.svg"
                alt="group_ThirtyOne"
              />
            </div>
            <Img
              className="absolute bottom-[14%] h-[778px] object-cover right-[0] w-[12%]"
              src="images/img_ellipse27_778x227.png"
              alt="ellipseTwentySeven_One"
            />
          </div>
          <div className="font-poppins h-[545px] sm:h-[588px] md:h-[875px] max-w-[1604px] mt-[159px] mx-auto md:px-5 relative w-full">
            <div className="absolute sm:h-[429px] h-[459px] md:h-[716px] left-[3%] top-[0] w-[90%] md:w-full">
              <div className="absolute bg-deep_purple-A700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto pb-[113px] rounded-[14px] top-[0] w-full">
                <div className="h-[168px] relative w-[18%] md:w-full">
                  <div className="absolute border-[3px] border-solid border-white-A700 h-[168px] inset-y-[0] left-[0] my-auto rounded-[99px] w-[79%]"></div>
                  <div className="absolute border-[3px] border-solid border-white-A700 h-[129px] right-[0] rounded-[116px] top-[0] w-[93%]"></div>
                </div>
                <div className="h-56 md:h-[180px] ml-40 md:ml-[0] md:mt-0 mt-[91px] relative w-[43%] md:w-full">
                  <Text
                    className="mt-[75px] mx-auto text-white-A700 text-xl"
                    size="txtPoppinsMedium20WhiteA700"
                  >
                    Lorem Ipsum is simply dummy text of the printing.
                  </Text>
                  <div className="absolute flex flex-col md:gap-10 gap-[84px] h-full inset-[0] items-center justify-center m-auto rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start rounded-[14px]">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[0.80px]"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Subscribe to our newsletter
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-row sm:gap-10 items-center justify-between p-[7px] rounded-[14px] w-full">
                      <Text
                        className="ml-[33px] text-gray-500 text-xl tracking-[0.40px]"
                        size="txtPoppinsMedium20Gray500"
                      >
                        Email Address
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[197px] rounded-[14px] text-center text-xl tracking-[0.40px]"
                        color="yellow_900_01"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[215px] md:ml-[0] ml-[209px] relative w-[15%] md:w-full">
                  <div className="absolute border-[3px] border-solid border-white-A700 h-[161px] inset-x-[0] mx-auto rotate-[-90deg] rounded-[101px] top-[0] w-full"></div>
                  <div className="absolute border-[3px] border-solid border-white-A700 h-[215px] inset-y-[0] my-auto right-[0] rotate-[-90deg] rounded-[107px] w-[81%]"></div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-44 left-[9%]"
                src="images/img_group_yellow_900_01.svg"
                alt="group_ThirtyTwo"
              />
            </div>
            <div className="absolute backdrop-opacity-[0.5] bg-yellow-900_19 blur-[254.00px] bottom-[8%] h-[284px] left-[0] rounded-[175px] w-[22%]"></div>
            <div className="absolute backdrop-opacity-[0.5] bg-yellow-900_19 blur-[254.00px] bottom-[0] h-[284px] right-[0] rounded-[175px] w-[22%]"></div>
          </div>
          <footer className="bg-blue-50 flex font-roboto items-center justify-center mt-2.5 md:px-5 w-full">
            <div className="md:h-[1224px] h-[350px] sm:h-[397px] my-[30px] relative w-full">
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[77%] md:w-full">
                    <Text
                      className="leading-[31.00px] md:mt-0 mt-[63px] text-[19px] text-gray-700_02 text-justify w-[22%] sm:w-full"
                      size="txtRobotoRomanRegular19Gray70002"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy a type specimen book.
                      </>
                    </Text>
                    <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[118px] md:mt-0 mt-[3px] w-[9%] md:w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_02"
                        size="txtRobotoRomanSemiBold25"
                      >
                        Company
                      </Text>
                      <ul className="flex flex-col items-start justify-start w-full common-column-list">
                        <li>
                          <Link to="/"
                            className="text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              About Us
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link to="/"
                            className="mt-[26px] text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              How to work?
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link to="/"
                            className="mt-[27px] text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              Popular Course
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link to="/"
                            className="mt-6 text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              Service
                            </Text>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[29px] items-start justify-start md:ml-[0] ml-[154px] w-[8%] md:w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_02"
                        size="txtRobotoRomanSemiBold25"
                      >
                        Courses
                      </Text>
                      <ul className="flex flex-col gap-[23px] items-start justify-start w-full common-column-list">
                        <li>
                          <Link to="/"
                            className="text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              Categories
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link to="/"
                            className="text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              Offline Course
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link to="/"
                            className="text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              Video Course
                            </Text>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] ml-[154px] md:mt-0 mt-0.5 w-[7%] md:w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_02"
                        size="txtRobotoRomanSemiBold25"
                      >
                        Support
                      </Text>
                      <ul className="flex flex-col items-start justify-start w-full common-column-list">
                        <li>
                          <Link to="/"
                            className="text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              FAQ
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link to="/"
                            className="mt-[26px] text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              Help Center
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link to="/"
                            className="mt-[23px] text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              Career
                            </Text>
                          </Link>
                        </li>
                        <li>
                          <Link to="/"
                            className="mt-[26px] text-[19px] text-gray-700_02"
                          >
                            <Text size="txtRobotoRomanRegular19Gray70002">
                              Privacy{" "}
                            </Text>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[154px]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_02"
                        size="txtRobotoRomanSemiBold25"
                      >
                        Contact Info
                      </Text>
                      <Text
                        className="mt-7 text-[19px] text-gray-700_02"
                        size="txtRobotoRomanRegular19Gray70002"
                      >
                        +0913-705-3875
                      </Text>
                      <Text
                        className="mt-[27px] text-[19px] text-gray-700_02"
                        size="txtRobotoRomanRegular19Gray70002"
                      >
                        ElizabethJ@jourrapide.com
                      </Text>
                      <Text
                        className="mt-[25px] text-[19px] text-gray-700_02"
                        size="txtRobotoRomanRegular19Gray70002"
                      >
                        <>
                          4808 Skinner Hollow Road
                          <br />
                          Days Creek, OR 97429
                        </>
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-400_01 h-px mt-[65px] w-full" />
                  <Text
                    className="mt-5 text-[19px] text-gray-700_02"
                    size="txtRobotoRomanRegular19Gray70002"
                  >
                    BookStore All Right Reserved, 2022
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-row gap-2 items-center justify-center left-[10%] top-[0] w-[10%]">
                <Img
                  className="h-[51px]"
                  src="images/img_user_gray_800_02.svg"
                  alt="user_One"
                />
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtRobotoRomanBold24"
                >
                  Book Store
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default GloballandingPage;
