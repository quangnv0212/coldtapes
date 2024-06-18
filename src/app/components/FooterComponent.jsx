import Image from "next/image";

export default function FooterComponent() {
  return (
    <footer className="bg-red-500 rounded-t-3xl">
      <div className="md:px-8 px-[20px] md:py-20 py-[48px] max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <Image
              src="/logo_black.png"
              width={200}
              height={50}
              className=" w-[88px] h-[47px] md:w-[123px] md:h-[66px] mb-[24px] md:mb-0"
              alt="Logo dark"
            />
            {/* <h4 className="font-semibold mt-6 text-black">Address:</h4>
            <address className="not-italic font-semibold text-black">
              First Floor, 12-13 Little Newport Street
              <br />
              London,
              <br />
              WC2H 7JJ
            </address> */}
            <div className="flex flex-row gap-[12px] md:mt-8 md:mb-[80px] items-center mb-[33px]">
              <a href="https://www.facebook.com/coldtapespod">
                <svg
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10.3038C20 4.74719 15.5229 0.242676 10 0.242676C4.47715 0.242676 0 4.74719 0 10.3038C0 15.3255 3.65684 19.4879 8.4375 20.2427V13.2121H5.89844V10.3038H8.4375V8.0872C8.4375 5.56564 9.9305 4.1728 12.2146 4.1728C13.3088 4.1728 14.4531 4.36931 14.4531 4.36931V6.84529H13.1922C11.95 6.84529 11.5625 7.6209 11.5625 8.41658V10.3038H14.3359L13.8926 13.2121H11.5625V20.2427C16.3432 19.4879 20 15.3257 20 10.3038Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/coldtapesofficial/">
                <svg
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 0.242676H5C2.23858 0.242676 0 2.48126 0 5.24268V13.2427C0 16.0041 2.23858 18.2427 5 18.2427H13C15.7614 18.2427 18 16.0041 18 13.2427V5.24268C18 2.48126 15.7614 0.242676 13 0.242676ZM16.25 13.2427C16.2445 15.0353 14.7926 16.4872 13 16.4927H5C3.20735 16.4872 1.75549 15.0353 1.75 13.2427V5.24268C1.75549 3.45003 3.20735 1.99817 5 1.99268H13C14.7926 1.99817 16.2445 3.45003 16.25 5.24268V13.2427ZM13.75 5.49268C14.3023 5.49268 14.75 5.04496 14.75 4.49268C14.75 3.9404 14.3023 3.49268 13.75 3.49268C13.1977 3.49268 12.75 3.9404 12.75 4.49268C12.75 5.04496 13.1977 5.49268 13.75 5.49268ZM9 4.74268C6.51472 4.74268 4.5 6.7574 4.5 9.24268C4.5 11.728 6.51472 13.7427 9 13.7427C11.4853 13.7427 13.5 11.728 13.5 9.24268C13.5027 8.04838 13.0294 6.90225 12.1849 6.05776C11.3404 5.21327 10.1943 4.74002 9 4.74268ZM6.25 9.24268C6.25 10.7615 7.4812 11.9927 9 11.9927C10.5188 11.9927 11.75 10.7615 11.75 9.24268C11.75 7.72388 10.5188 6.49268 9 6.49268C7.4812 6.49268 6.25 7.72388 6.25 9.24268Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="https://twitter.com/coldtapespod">
                <svg
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1761 0.242676H16.9362L10.9061 7.02008L18 16.2427H12.4456L8.0951 10.6493L3.11723 16.2427H0.35544L6.80517 8.99348L0 0.242676H5.69545L9.6279 5.3553L14.1761 0.242676ZM13.2073 14.6181H14.7368L4.86441 1.78196H3.2232L13.2073 14.6181Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@coldtapesofficial">
                <svg
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 126 144"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M109.554 30.8782C108.579 30.3746 107.631 29.8224 106.712 29.2239C104.038 27.4567 101.587 25.3744 99.4115 23.0218C93.9674 16.7926 91.9341 10.4732 91.1852 6.04871H91.2153C90.5896 2.37617 90.8483 0 90.8874 0H66.091V95.883C66.091 97.1704 66.091 98.4427 66.0369 99.7C66.0369 99.8564 66.0218 100.001 66.0128 100.169C66.0128 100.238 66.0128 100.311 65.9978 100.383C65.9978 100.401 65.9978 100.419 65.9978 100.437C65.7364 103.877 64.6336 107.2 62.7863 110.114C60.9391 113.029 58.4041 115.444 55.4042 117.148C52.2778 118.927 48.7416 119.86 45.1446 119.855C33.5916 119.855 24.2283 110.435 24.2283 98.8006C24.2283 87.1664 33.5916 77.7459 45.1446 77.7459C47.3315 77.7439 49.505 78.088 51.5843 78.7656L51.6144 53.518C45.3021 52.7026 38.8893 53.2043 32.7806 54.9914C26.6719 56.7784 20.9998 59.8121 16.1222 63.901C11.8483 67.6144 8.25522 72.0452 5.50463 76.994C4.45791 78.7987 0.508657 86.0505 0.0304146 97.8201C-0.270367 104.5 1.73584 111.421 2.69233 114.282V114.342C3.29389 116.026 5.62495 121.774 9.42381 126.62C12.4871 130.507 16.1062 133.921 20.1647 136.753V136.693L20.2249 136.753C32.229 144.91 45.5386 144.375 45.5386 144.375C47.8426 144.282 55.5607 144.375 64.3254 140.221C74.0467 135.616 79.581 128.755 79.581 128.755C83.1167 124.656 85.9281 119.984 87.8946 114.941C90.1385 109.042 90.8874 101.968 90.8874 99.1405V48.2724C91.1882 48.4529 95.1946 51.1027 95.1946 51.1027C95.1946 51.1027 100.967 54.8023 109.972 57.2116C116.433 58.9261 125.137 59.287 125.137 59.287V34.6711C122.087 35.0019 115.894 34.0394 109.554 30.8782Z"
                    fill="black"
                  />
                </svg>
              </a>

              <a href="https://www.youtube.com/@coldtapesofficial">
                <svg
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5928 7.20301C21.4789 6.78041 21.2563 6.39501 20.9472 6.08518C20.6381 5.77534 20.2532 5.55187 19.8308 5.43701C18.2648 5.00701 11.9998 5.00001 11.9998 5.00001C11.9998 5.00001 5.73584 4.99301 4.16884 5.40401C3.74677 5.52415 3.36266 5.75078 3.05341 6.06214C2.74415 6.3735 2.52013 6.75913 2.40284 7.18201C1.98984 8.74801 1.98584 11.996 1.98584 11.996C1.98584 11.996 1.98184 15.26 2.39184 16.81C2.62184 17.667 3.29684 18.344 4.15484 18.575C5.73684 19.005 11.9848 19.012 11.9848 19.012C11.9848 19.012 18.2498 19.019 19.8158 18.609C20.2383 18.4943 20.6236 18.2714 20.9335 17.9622C21.2434 17.653 21.4672 17.2682 21.5828 16.846C21.9968 15.281 21.9998 12.034 21.9998 12.034C21.9998 12.034 22.0198 8.76901 21.5928 7.20301ZM9.99584 15.005L10.0008 9.00501L15.2078 12.01L9.99584 15.005Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <div className="border-t  font-roboto text-[14px] leading-[21px] border-black flex flex-col-reverse gap-y-6 md:flex-row gap-6 justify-between md:pt-[33px]">
              <p className="md:font-semibold font-light break-words text-black w-[243px] md:w-auto ">
                © 2024 FREE TURN LTD. All rights reserved.
              </p>
              <div className="gap-x-4 flex flex-col md:flex-row gap-y-4 mt-[25px] md:mt-0">
                <a
                  target="_blank"
                  href="/Cold Tapes Privacy Notice.pdf"
                  className="text-black md:font-semibold font-light underline"
                >
                  Privacy Policy
                </a>
                <a
                  target="_blank"
                  href="/Cold Tapes Website T&Cs.pdf"
                  className="text-black md:font-semibold font-light underline"
                >
                  Website T&C&apos;s
                </a>
                <a
                  target="_blank"
                  href="/Cold Tapes Competition T&Cs.pdf"
                  className="text-black md:font-semibold font-light underline"
                >
                  Competition T&C&apos;s
                </a>
                <a
                  href="mailto:help@coldtapes.com"
                  className="text-black md:font-semibold font-light underline"
                >
                  Cookies Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="text-center pb-4 text-black">
        Made by{" "}
        <a href="https://parsonsgreenmedia.com" className="underline">
          Parsons Green Media
        </a>
      </p> */}
    </footer>
  );
}
