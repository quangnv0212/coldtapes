"use client";
import { useState } from "react";
import AudioPlayerComponent from "../components/AudioPlayer";
import FAQSectionComponent from "../components/FAQComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");

  const faqs = [
    {
      q: "How can I listen to Cold Tapes?",
      a: "You can listen to the podcast on Spotify or wherever you get your podcasts. Simply search 'COLD TAPES' or click one of the links at the top of this page to take you straight there. ",
    },
    {
      q: "How do I enter the competition?",
      a: "Hit the ’Start your investigation!’ button above to register. Once you’re registered, you’ll have the option to purchase whichever bundle suits you best. By purchasing, you get access to all the content immediately and a ticket to enter the competition to win £10,000.",
    },
    {
      q: "How do I solve Cold Tapes?",
      a: "You can listen to COLD TAPES wherever you get your podcasts. If you want to get involved, you can purchase one of the COLD TAPES bundles which gives you access to all the content immediately and a ticket to enter the competition to win £10,000. You can also get involved in the COLD TAPES community via our social channels below. Once you've purchased COLD TAPES, you'll be able to select the suspect you think killed Drew and submit your entry into the competition. The competition closes on Friday 6th September and T&Cs apply.",
    },
    {
      q: "Can I just listen or do I have to solve the case?",
      a: "You'll need detective-standard listening and analytical skills to evaluate evidence, form theories and hypotheses, and question whether what you're being told is the truth... or a lie. You'll need to piece together the clues, motives and alibis to crack the case and determine which of our 16 suspects is the killer. Once you've cracked it, you can enter the competition to be in with a chance of winning Super Sleuth of the Year and claim the £10,000 reward.",
    },
    // {
    //   q: "How to submit?",
    //   a: "If you've bought a COLD TAPES bundle you'll be able to select the killer from the list of suspects and hit submit to enter the competition. The competition closes on Friday 6th September and the killer will be revealed on Monday 9th September. To enter you must be over 18 and a resident of Great Britain.",
    // },
  ];

  return (
    <main className="bg-grey-100 overflow-x-hidden">
      <div className="md:p-8">
        <div className="py-[72px] md:py-0 md:pb-[72px] flex flex-col rounded-b-xl md:rounded-[40px] bg-header-newimage md:bg-header-newimage-lg lg:bg-header-newimage-lg bg-center bg-no-repeat bg-cover h-full">
          <div className="desktop">
            <div className="bg-[#FE0000] flex text-white rounded-[40px] rounded-b-none">
              <div className="font-bold text-[20px] leading-7 text-white bg-[#FE0000] py-4 px-[34px] mx-[38px] rounded-[20px] flex justify-center items-center gap-4">
                <div className="flex gap-2">
                  <div className="flex gap-1 items-center">
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="">LOGO</p>
                  <p className="text-center text-[13px] leading-[13px] max-w-[160px]">
                    Quote in a smaller font, around this length
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1 items-center">
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="">LOGO</p>
                  <p className="text-center text-[13px] leading-[13px] max-w-[160px]">
                    Quote in a smaller font, around this length
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1 items-center">
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Image
                      src="/Star.png"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="">LOGO</p>
                  <p className="text-center text-[13px] leading-[13px] max-w-[160px]">
                    Quote in a smaller font, around this length
                  </p>
                </div>
              </div>
            </div>
          </div>

          <HeaderComponent />
          {/* <div className="md:hidden flex items-center justify-end h-full pb-16 flex-col">
            <div>
              <p className="text-white font-semibold text-center">
                Listen for free:
              </p>
              <div className="flex flex-row gap-x-3 items-center justify-center w-full h-full">
                <a
                  href="https://open.spotify.com/show/77CwkM5LYg9zWddG5pgYBy"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  target="_blank"
                >
                  <Image
                    src={"/spotify.png"}
                    height={30}
                    width={30}
                    alt="Spotify logo"
                  />
                </a>
                <a
                  href="https://itunes.apple.com/podcast/id1738635218"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  target="_blank"
                >
                  <Image
                    src={"/apple.png"}
                    height={30}
                    width={30}
                    alt="Apple logo"
                  />
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLVBZLHOfBoFt5oBjkdbDplWzmapzMT8eG"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  target="_blank"
                >
                  <Image
                    src={"/youtube.png"}
                    height={30}
                    width={30}
                    alt="YouTube logo"
                  />
                </a>
                <a
                  href="https://www.iheart.com/podcast/165717701"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  target="_blank"
                >
                  <Image
                    src={"/heart.png"}
                    height={60}
                    width={60}
                    alt="Heart logo"
                    className="w-10 h-auto object-cover"
                  />
                </a>
                <a
                  href="https://music.amazon.co.uk/podcasts/32faccad-d04c-4d7b-b558-839e5e7c5e57/cold-tapes"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  target="_blank"
                >
                  <Image
                    src={"/amazon.png"}
                    height={60}
                    width={60}
                    alt="Amazon logo"
                    className="w-14 h-auto"
                  />
                </a>
              </div>
            </div>
          </div> */}
          <div className="mobile">
            <Image
              src="/logo.png"
              width={200}
              height={118}
              alt=""
              className="mx-auto mb-10 md:mb-0"
            />
          </div>
          <div className="tablet">
            <Image
              src="/logo.png"
              width={200}
              height={118}
              alt=""
              className="mx-auto mb-10"
            />
          </div>

          <div className="mobile">
            <div className="font-bold text-[20px] leading-7 text-white bg-[#FE0000] py-4 rounded-[20px] flex flex-col justify-center items-center gap-4 mx-[38px]">
              <div className="flex gap-[6px] items-start ">
                <div className="flex gap-1 items-center">
                  <Image src="/Star.png" alt="" width={24} height={24} />
                  <Image src="/Star.png" alt="" width={24} height={24} />
                  <Image src="/Star.png" alt="" width={24} height={24} />
                  <Image src="/Star.png" alt="" width={24} height={24} />
                  <Image src="/Star.png" alt="" width={24} height={24} />
                </div>
                <p className="">LOGO</p>
              </div>
              <p className="text-center font-bold mx-[67px] text-[13px] leading-[13px]">
                Quote in a smaller font, around this length
              </p>
            </div>
          </div>
          <div className="tablet">
            <div className="font-bold text-[20px] leading-7 text-white bg-[#FE0000] py-4 px-[34px] mx-[38px] rounded-[20px] flex flex-col justify-center items-center gap-4">
              <div className="flex gap-[6px] items-start ">
                <div className="flex gap-1 items-center">
                  <Image src="/Star.png" alt="" width={24} height={24} />
                  <Image src="/Star.png" alt="" width={24} height={24} />
                  <Image src="/Star.png" alt="" width={24} height={24} />
                  <Image src="/Star.png" alt="" width={24} height={24} />
                  <Image src="/Star.png" alt="" width={24} height={24} />
                </div>
                <p className="">LOGO</p>
              </div>
              <p className="text-center mx-20 text-[13px] leading-[13px]">
                Quote in a smaller font, around this length
              </p>
            </div>
          </div>
          <div className="flex gap-5 flex-col mt-0 md:mt-[105px]">
            <div className="desktop">
              <p className="text-[20px] leading-7 font-bold text-center text-white uppercase">
                Cold Tapes
              </p>
            </div>

            <p className="text-white text-[24px] md:text-[45px] md:leading-[54px] lg:mx-[300px] leading-[33px] font-bold text-center mx-5 py-[41px] md:pt-0 md:pb-[74px]">
              A MURDER MYSTERY PODCAST. CAN YOU SOLVE THE CASE?
            </p>
          </div>

          <p className="text-white font-bold md:text-[24px] text-center text-[18px] leading-[27px] pb-[21px]">
            LISTEN WEEKLY FOR FREE
          </p>
          <div className="flex gap-2 justify-center mb-[36px] md:mb-[70px]">
            <div className="p-2 border border-white md:border-none rounded-[10px]">
              <Link href="#">
                <Image
                  src="/spotify.png"
                  alt=""
                  width={30}
                  height={30}
                  className="w-"
                />
              </Link>
            </div>
            <div className="p-2 border border-white md:border-none rounded-[10px]">
              <Link href="#">
                <Image src="/apple.png" alt="" width={30} height={30} />
              </Link>
            </div>
            <div className="p-2 border border-white md:border-none rounded-[10px]">
              <Link href="#">
                <Image src="/youtube.png" alt="" width={30} height={30} />
              </Link>
            </div>
            <div className="p-2 border border-white md:border-none rounded-[10px]">
              <Link href="#" className="flex items-center">
                <Image src="/heart.png" alt="" width={42} height={42} />
              </Link>
            </div>
            <div className="p-2 border border-white md:border-none rounded-[10px]">
              <Link href="#" className="flex items-center">
                <Image src="/amazon.png" alt="" width={54} height={54} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-[10px] mx-[33px]">
            <input
              value="example@gmail.com"
              className="font-bold lg:w-[309px]  text-black font-roboto text-[16px] leading-[24px] text-base py-5 rounded-[20px] px-6 bg-[#D9D9D9]"
            />
            <button className="font-bold lg:w-[219px] text-black font-roboto text-[16px] leading-[24px] text-base py-5 rounded-[20px] px-6 bg-[#087E7A]">
              Unlock Hidden Files
            </button>
          </div>

          {/* Tablet  */}
          <div className="tablet">
            <div className="relative isolate px-6 pt-14 lg:px-8 h-full hidden md:block">
              <div className="mx-auto max-w-7xl flex justify-center pb-8 items-end h-full">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    16 Suspects. 1 Murderer. Only you can solve it...
                  </h1>
                  <div className="flex flex-row gap-x-3 max-w-2xl mx-auto mt-5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-8 rounded-2xl border-0 py-5 text-2xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                      placeholder="you@example.com"
                    />
                    <a
                      href={"/register?email=" + email}
                      className="rounded-2xl font-bold justify-center items-center flex whitespace-nowrap bg-teal-500 px-3.5 py-4 text-base text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Start your investigation!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile  */}
          <div className="mobile">
            <div className="relative isolate px-6 pt-14 lg:px-8 h-full hidden md:block">
              <div className="mx-auto max-w-7xl flex justify-center pb-8 items-end h-full">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    16 Suspects. 1 Murderer. Only you can solve it...
                  </h1>
                  <div className="flex flex-row gap-x-3 max-w-2xl mx-auto mt-5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-8 rounded-2xl border-0 py-5 text-2xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                      placeholder="you@example.com"
                    />
                    <a
                      href={"/register?email=" + email}
                      className="rounded-2xl font-bold justify-center items-center flex whitespace-nowrap bg-teal-500 px-3.5 py-4 text-base text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Start your investigation!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="flex flex-col gap-8 pt-[60px] pb-[74px] mx-[57px] rounded-[10px]">
          <p className="text-[18px] font-roboto leading-[27px] text-center font-bold text-black">
            Listen to the police briefing call:
          </p>
          <AudioPlayerComponent />
        </div>
      </div>
      <div className="lg:my-28 my-0 grid lg:grid-cols-2 px-[26px] lg:gap-[140px] md:px-[20px] lg:px-[90px] max-w-7xl mx-auto ">
        <div className="desktop">
          <div className="relative flex justify-center items-center w-[494px] h-[514px] mb-[100px]">
            <div className="bg-red-500  w-[494px] h-[514px] absolute rotate-[14deg] rounded-2xl"></div>
            <div
              style={{
                backgroundImage: "url('/Placeholder Image.png')",
                backgroundSize: "cover",
                borderRadius: 40,
              }}
              className="bg-black w-[494px] h-[514px] absolute"
            ></div>
          </div>
        </div>
        <div className="pr-0 text-black font-light md:font-bold lg:font-bold text-center lg:text-left text-[20px] leading-[24px] ">
          <p className="uppercase font-campton font-bold text-center text-[28px] leading-[42px] pb-[52px] lg:pb-[24px] lg:text-[50px] lg:leading-[60px] lg:text-left">
            BENEATH THE ICE LIES A WEB OF DECEIT
          </p>
          <p className="lg:font-roboto">
            The brutal murder of Andrew ‘Drew’ Fairfield on a remote Antarctic
            base thrusts DCI Tessa McCallister into the claustrophobic lives of
            an isolated community of international scientists and crew
          </p>
          <br />
          <p className="lg:font-roboto">
            Through police interviews, covert recordings, and audio diaries,
            Tessa hears hidden agendas, concealed criminal histories, violent
            psychosis, and dangerous conspiracy theories to help her uncover the
            truth behind the murder.
          </p>
          <br />
          <p className="lg:font-roboto">
            With the murderer still on the base, join DCI McCallister as she
            races against time to untangle the maze of deception, revealing
            chilling truths buried beneath the ice.
          </p>
          <br />
          <div className="desktop">
            <p className="text-black font-bold font-campton text-left text-[28px] pb-8 leading-[42px]">
              16 Suspects. 1 Murderer. Only you can solve it?
            </p>
          </div>
        </div>
      </div>
      <div className="desktop flex justify-center lg:pb-[201px]">
        <p className="text-[25px] font-roboto leading-[37px] text-center font-bold lg:mb-[28px] text-black">
          Listen to the police briefing call:
        </p>
        <AudioPlayerComponent />
      </div>
      <div
        className="px-8 pt-12 text-left md:text-center max-w-7xl mx-auto"
        id="what"
      >
        <p className="text-black font-extrabold text-center md:text-3xl text-[30px] pb-20 md:leading-10 leading-[45px] md:hidden">
          16 Suspects.
          <br />1 Murderer.
          <br />
          Only you can solve it...
        </p>
        <div className="mobile">
          <div className="relative flex justify-center items-center h-[253px] mx-auto w-[264px] mb-[100px]">
            <div className="bg-red-500 h-[253px] w-[264px]  absolute rotate-[14deg] rounded-2xl"></div>
            <div
              style={{
                backgroundImage: "url('/Placeholder Image.png')",
                backgroundSize: "cover",
              }}
              className="bg-black h-[253px] w-[264px] absolute rounded-[40px]"
            ></div>
          </div>
        </div>
        <div className="tablet">
          <div className="relative w-full flex justify-center items-center h-[300px] mb-[100px]">
            <div className="bg-red-500 h-full max-w-[20rem] w-full absolute rotate-[-14deg] rounded-2xl"></div>
            <div className="bg-black max-w-[20rem] w-full absolute h-full rounded-[40px]">
              <Image
                src="/Placeholder Image.png"
                width={253}
                height={264}
                alt=""
                className="object-cover w-full h-full"
                style={{
                  borderRadius: 40,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg-secondary md:bg-black lg:bg-black text-white pt-[86px] lg:pb-0 pb-[100px] bg-cover">
        <p className="font-bold font-roboto text-[45px] leading-[67px] px-10 md:text-[60px] md:leading-[90px] lg:pb-[101px] uppercase text-center pb-[88px] md:pb-[88px]">
          Listen to Cold tapes
        </p>
        <div className="flex flex-col lg:flex-row justify-center md:gap-[113px] md:px-[136px] md:mb-[121px] px-7 items-center">
          <div className="relative flex justify-center items-center h-[325px] w-[308px] md:h-[517px] md:w-[510px]">
            <div className="bg-red-500 h-full md:w-[510px] md:h-[517px] w-full absolute md:rotate-[10deg] rotate-[5deg] rounded-2xl"></div>
            <div className="bg-black md:w-[510px] p-[31px] h-[325px] w-[308px] md:p-0 md:px-[49px] md:py-[55px] md:h-[517px] text-[20px] leading-[30px] absolute  rounded-[40px] font-bold text-center lg:text-[30px] lg:leading-[45px]">
              <p className=" lg:border-white lg:border-b-2 md:p-[10px] mb-[10px] md:mb-0">
                LISTEN WEEKLY FOR FREE
              </p>
              <div className="desktop">
                <p className="text-[15px] leading-[22px] lg:py-[19px]">
                  IT’S A MARATHON, NOT A SPRINT
                </p>
              </div>

              <div className="mb-[18px] flex text-left lg:gap-[27px] lg:text-[20px]">
                <div className="desktop">
                  <Image
                    src="/check_black.png"
                    alt=""
                    width={50}
                    height={50}
                    className="lg:w-[70px]"
                  />
                </div>
                <p className="text-center md:text-left">
                  NEW INVESTIGATION FILES DROP EACH WEEK
                </p>
              </div>
              <div className="mb-[18px] flex text-left lg:gap-[27px] lg:text-[20px]">
                <div className="desktop">
                  <Image
                    src="/check_black.png"
                    alt=""
                    width={50}
                    height={50}
                    className="lg:w-[50px]"
                  />
                </div>
                <p className="lg:w-[334px] text-center md:text-left md:mb-0">
                  WHEREVER YOU GET YOUR PODCASTS
                </p>
              </div>

              <div className="flex gap-[10px] justify-center mb-[36px]">
                <div className="p-2 border border-white rounded-[10px]">
                  <Link href="#">
                    <Image
                      src="/spotify.png"
                      alt=""
                      width={30}
                      height={30}
                      className="lg:w-[42px] lg:h-[40px]"
                    />
                  </Link>
                </div>
                <div className="p-2 border border-white rounded-[10px]">
                  <Link href="#">
                    <Image
                      src="/apple.png"
                      alt=""
                      width={30}
                      height={30}
                      className="lg:w-[42px] lg:h-[40px]"
                    />
                  </Link>
                </div>
                <div className="p-2 border border-white rounded-[10px]">
                  <Link href="#">
                    <Image
                      src="/youtube.png"
                      alt=""
                      width={30}
                      height={30}
                      className="lg:w-[42px] lg:h-[40px]"
                    />
                  </Link>
                </div>
                <div className="p-2 border border-white rounded-[10px]">
                  <Link href="#" className="flex items-center">
                    <Image
                      src="/heart.png"
                      alt=""
                      width={30}
                      height={30}
                      className="lg:w-[42px] lg:h-[40px]"
                    />
                  </Link>
                </div>
                <div className="p-2 border border-white rounded-[10px]">
                  <Link href="#" className="flex items-center">
                    <Image
                      src="/amazon.png"
                      alt=""
                      width={30}
                      height={30}
                      className="lg:w-[42px] lg:h-[40px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile">
            <p className="text-[60px] py-[35px] md:py-0 leading-[90px] font-bold text-center">
              OR
            </p>
          </div>

          <div className="relative w-full flex justify-center items-center h-[330px] md:h-[517px] md:w-[510px] px-2">
            <div className="bg-red-500 md:w-[510px] md:h-[517px] w-[320px] h-[381px] absolute md:rotate-[10deg] rotate-[5deg] rounded-2xl"></div>
            <div className="bg-[#087E7A] md:w-[510px] p-[31px] h-[372px] w-[320px] md:p-0 md:px-[40px] md:py-[55px] md:h-[517px] text-[20px] leading-[30px] absolute  rounded-[40px] font-bold text-center lg:text-[30px] lg:leading-[45px]">
              <p className=" lg:border-white lg:border-b-2 md:p-[10px] mb-[10px] md:mb-0">
                BUY ALL EPISODES TODAY!
              </p>
              <div className="desktop">
                <p className="text-[15px] leading-[22px] lg:py-[19px]">
                  HOW QUICKLY CAN YOU SOLVE IT?
                </p>
              </div>

              <div className="mb-[18px] flex text-left lg:gap-[27px] lg:text-[20px]">
                <div className="desktop">
                  <Image
                    src="/check_black.png"
                    alt=""
                    width={50}
                    height={50}
                    className="lg:w-[50px]"
                  />
                </div>
                <p className="desktop">ACCESS ALL 83 CASE FILES</p>
              </div>
              <div className="mb-[18px] flex text-left lg:gap-[27px] lg:text-[20px]">
                <div className="desktop">
                  <Image
                    src="/check_black.png"
                    alt=""
                    width={50}
                    height={50}
                    className="lg:w-[50px]"
                  />
                </div>
                <p className="lg:w-[334px] desktop">IMMEDIATELY AND AD-FREE</p>
              </div>
              <div className="w-full flex justify-center lg:pb-4 pb-[52px]">
                <p className="lg:text-[17px] lg:leading-[25px] lg:w-[324px]">
                  GET ONE OF OUR EXCLUSIVE BUNDLES FOR JUST £5.00
                </p>
              </div>
              <button className="bg-black lg:font-roboto text-[16px] leading-[24px] py-5 rounded-[20px] px-20">
                BUY NOW
              </button>
              <div className="w-full flex justify-center">
                <p className="text-[10px] desktop leading-[15px] lg:py-[20px] lg:w-[380px]">
                  Claim your ticket to enter the competition; correctly identify
                  the killer before 21st Feb 2025 for the chance to win £10,000
                  and Super Sleuth of the Year!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile pt-[100px] md:pt-0">
          <div className="font-bold text-[20px] leading-7 text-white bg-[#FE0000] py-4 rounded-[20px] flex flex-col justify-center items-center gap-4 mx-[38px]">
            <div className="flex gap-[6px] items-start ">
              <div className="flex gap-1 items-center">
                <Image src="/Star.png" alt="" width={24} height={24} />
                <Image src="/Star.png" alt="" width={24} height={24} />
                <Image src="/Star.png" alt="" width={24} height={24} />
                <Image src="/Star.png" alt="" width={24} height={24} />
                <Image src="/Star.png" alt="" width={24} height={24} />
              </div>
              <p className="">LOGO</p>
            </div>
            <p className="text-center font-bold mx-[67px] text-[13px] leading-[13px]">
              Quote in a smaller font, around this length
            </p>
          </div>
        </div>
        <div className="tablet">
          <div className="font-bold text-[20px] leading-7 text-white bg-[#FE0000] py-4 px-[34px] mx-[38px] rounded-[20px] flex flex-col justify-center items-center gap-4">
            <div className="flex gap-[6px] items-start ">
              <div className="flex gap-1 items-center">
                <Image src="/Star.png" alt="" width={24} height={24} />
                <Image src="/Star.png" alt="" width={24} height={24} />
                <Image src="/Star.png" alt="" width={24} height={24} />
                <Image src="/Star.png" alt="" width={24} height={24} />
                <Image src="/Star.png" alt="" width={24} height={24} />
              </div>
              <p className="">LOGO</p>
            </div>
            <p className="text-center mx-20 text-[13px] leading-[13px]">
              Quote in a smaller font, around this length
            </p>
          </div>
        </div>
        <div className="desktop">
          <div className="bg-[#FE0000] flex text-white ">
            <div className="font-bold text-[20px] leading-7 text-white bg-[#FE0000] py-4 px-[34px] mx-[38px] rounded-[20px] flex justify-center items-center gap-4">
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <p className="">LOGO</p>
                <p className="text-center text-[13px] leading-[13px] max-w-[160px]">
                  Quote in a smaller font, around this length
                </p>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <p className="">LOGO</p>
                <p className="text-center text-[13px] leading-[13px] max-w-[160px]">
                  Quote in a smaller font, around this length
                </p>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/Star.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <p className="">LOGO</p>
                <p className="text-center text-[13px] leading-[13px] max-w-[160px]">
                  Quote in a smaller font, around this length
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-center md:bg-top bg-no-repeat bg-cover h-full px-8 lg:px-[64px] py-16 lg:pt-[170px] overflow-hidden">
        <h3 className="font-bold mb-[20px] md:mb-0 lg:text-[48px] text-[36px] leading-[43px] lg:leading-[57px] text-center lg:mb-[24px] text-black lg:max-w-4xl lg:mx-auto">
          Find the killer & enter the competition to win £10,000!
        </h3>
        <p className="font-roboto lg:font-bold font-light leading-6 mb-[72px] text-center text-black lg:max-w-3xl lg:mx-auto lg:text-[18px] lg:leading-[27px]">
          Buy one of our Detective Bundles and as well as access to all the
          investigation files, you{"'"}ll get your entry into the competition.
          Correctly guess the killer before 21st February 2025 and be in with a
          chance to win these incredible prizes:
        </p>
        <div className="flex flex-col gap-6 text-black mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-3">
            <div className="border border-black rounded-[10px] p-8 flex items-center flex-col justify-center md:h-[330px]">
              <p className="font-bold text-center text-[40px] leading-[48px] pb-4 border-b-[1px] border-black">
                Super Sleuth 2025
              </p>
              <p className="text-center text-[16px] leading-[24px] font-roboto pt-4 text-base lg:font-bold font-light">
                Be crowned Super Sleuth of the Year at CrimeCon UK
              </p>
            </div>
            <div className="border border-black rounded-[10px] p-8 flex items-center flex-col justify-center md:h-[330px]">
              <div className="font-bold text-center text-[40px] leading-[48px] border-b-[1px] pb-2 md:pb-0 border-black mb-8 md:mb-0">
                <div className="mobile">
                  <p className="text-[18px]">Cash Prize</p>
                </div>
                <div className="tablet">
                  <p className="text-[18px]">Cash Prize</p>
                </div>
                <p className="text-center text-[40px] leading-[48px] lg:text-[80px] lg:leading-[96px] ">
                  £10,000
                </p>
              </div>
              <p className="text-[16px] leading-[22px] font-roboto desktop lg:mt-[19px] font-bold">
                Cash Prize
              </p>
            </div>
            <div className="border border-black rounded-[10px] p-8 flex items-center flex-col justify-center md:h-[330px]">
              <div className="font-bold text-left text-[40px] leading-[48px] pb-4 border-b-[1px] border-black">
                <div className="mobile">
                  <p className="text-[18px]">Detective Who?</p>
                </div>
                <div className="tablet">
                  <p className="text-[18px]">Detective Who?</p>
                </div>
                <p className="text-center pt-4 text-[35px] leading-[42px]">
                  A character in Season 2 named in your honour!
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="font-bold lg:w-[856px] font-roboto desktop text-[18px] leading-[27px] text-center mx-auto">
              Competition closes 21st February 2025 with the killer revealed
              24th February. The winner will be announced on 17th February,
              2025. Open to Over 18s and residents of Great Britain only. T&Cs
              apply.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-[10px] mx-[33px] mb-[53px]">
            <input
              value="example@gmail.com"
              className="font-bold w-[282px] font-roboto lg:w-[309px] text-base leading-6 py-5 rounded-[20px] px-6 bg-[#D9D9D9]"
            />
            <button className="font-bold w-[282px] font-roboto text-base leading-6 py-5 rounded-[20px] px-6 bg-[#087E7A]">
              Enter The Competition
            </button>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-12 px-8 gap-y-8 md:gap-x-8 max-w-7xl mx-auto pb-[100px] lg:pt-[112px] lg:mb-[95px]"
        id="faq"
      >
        <div className="col-span-12 md:col-span-5 desktop ">
          <h3 className="font-bold text-[48px] leading-[57px] mb-3 text-black">
            Frequently Asked Questions
          </h3>
          <p className="font-bold font-roboto text-black text-[18px] leading-[27px] pb-6 md:pb-0">
            Find answers to common questions about the podcast, purchasing
            options, and participation guidelines.
          </p>
          <button className="text-base font-roboto font-bold lg:mt-8 md:mt-8 leading-6 px-6 py-3 border border-black rounded-[6px] text-black">
            Get in touch
          </button>
        </div>
        <div className="col-span-12 lg:col-span-7">
          {faqs.map((faq) => (
            <FAQSectionComponent key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
      <FooterComponent />
    </main>
  );
}
