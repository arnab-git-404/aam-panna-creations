"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="border-b border-border relative z-50">

        <div className=" mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FFFDE8] to-[#FFFBD2]  ">
          <div className="flex justify-between items-center h-16 font-semibold ">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 flex-shrink-0"
            >
              <Image
                src="/aampannalogo-svg.png"
                alt="Logo"
                width={90}
                height={32}
                className="w-auto h-8 sm:h-10"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ">
              <Link
                href="/"
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                About us
              </Link>
              <Link
                href="/services"
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  isActive("/services")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                services
              </Link>
              <Link
                href="/team"
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  isActive("/team") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Our team
              </Link>
              <Link
                href="/blog"
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  isActive("/blog") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Blog
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <button className=" text-black hover:cursor-pointer bg-[#FFD500] rounded-2xl px-4 py-2 h-8 hidden sm:flex items-center gap-2 minimal-button minimal-button-primary text-sm lg:text-base">
              {`Let's chat`}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M4.88647 0.5741C5.10172 0.628812 5.2261 0.782659 5.33671 0.967082C5.54421 1.37072 5.60931 1.80436 5.49616 2.25011C5.40411 2.48083 5.27597 2.66734 5.12159 2.85981C4.97184 3.06014 4.88371 3.23536 4.89894 3.49066C4.93446 3.65829 5.00318 3.78272 5.10999 3.9151C5.19581 4.04731 5.19581 4.04731 5.19581 4.38129C6.55513 4.38129 7.91444 4.38129 9.31495 4.38129C9.26597 4.32006 9.21698 4.25883 9.16651 4.19574C9.12085 4.10978 9.12085 4.10978 9.08534 4.02643C9.07333 3.99883 9.06132 3.97123 9.04895 3.94279C8.91003 3.5782 8.93423 3.11162 9.08751 2.75645C9.15934 2.61554 9.24301 2.49465 9.34235 2.37187C9.51397 2.15797 9.62169 2.00327 9.61415 1.72101C9.5899 1.5143 9.4876 1.38081 9.37206 1.2125C9.28525 1.0653 9.28325 0.985928 9.31495 0.81879C9.38151 0.714511 9.42698 0.651448 9.53761 0.596133C9.71237 0.571667 9.83595 0.575165 9.98988 0.665713C10.2907 0.964046 10.4263 1.369 10.4421 1.78595C10.4242 2.27284 10.2027 2.63957 9.89652 3.00215C9.7603 3.17849 9.78027 3.38914 9.79737 3.60199C9.84553 3.73201 9.89555 3.80995 9.98756 3.91278C10.0841 4.04798 10.0862 4.14164 10.0942 4.30707C10.082 4.34381 10.0698 4.38055 10.0571 4.4184C10.1263 4.4179 10.1263 4.4179 10.1968 4.4174C10.6309 4.41439 11.065 4.41217 11.4991 4.41071C11.7222 4.40993 11.9454 4.40888 12.1686 4.4072C12.3839 4.40559 12.5993 4.4047 12.8146 4.40432C12.8968 4.40404 12.979 4.40351 13.0612 4.4027C13.1763 4.40163 13.2913 13.4148 13.4064 4.40155C13.4404 4.40101 13.4744 4.40048 13.5095 4.39993C13.6651 4.40094 13.7465 4.40489 13.8811 4.48903C14.0171 4.63492 13.9951 4.77147 13.9931 4.96112C13.9929 4.99088 13.9927 5.02063 13.9925 5.05129C13.9921 5.12483 13.9914 5.19837 13.9907 5.27191C14.0176 5.26595 14.0445 5.25998 14.0722 5.25383C15.141 5.05851 16.2726 5.43143 17.1581 6.01512C17.3534 6.16057 17.5267 6.32783 17.7017 6.49652C17.7452 6.53592 17.7452 6.53592 17.7897 6.57611C18.4935 7.23228 18.9523 8.26817 19.0081 9.22462C19.0117 9.36369 19.0127 9.50242 19.0121 9.64154C19.012 9.66604 19.0119 9.69054 19.0119 9.71578C19.0055 10.9329 18.5332 11.9754 17.6831 12.8376C17.481 13.0373 17.2784 13.2153 17.0337 13.3618C16.9946 13.386 16.9554 13.4102 16.9151 13.4351C16.1764 13.8819 15.398 14.0785 14.5378 14.0629C14.3675 14.0602 14.1972 14.06 14.0269 14.0594C13.8781 14.0587 13.7293 14.0572 13.5805 14.0537C12.9055 14.0042 12.9055 14.0042 12.2946 14.2089C12.1781 14.3216 12.1026 14.4454 12.0239 14.5864C11.9495 14.672 11.9495 14.672 11.8755 14.7441C11.8436 14.7753 11.8436 14.7753 11.8111 14.8072C11.7107 14.898 11.6039 14.9786 11.4951 15.0589C11.4746 15.0742 11.454 15.0895 11.4328 15.1053C11.3825 15.1427 11.3321 15.18 11.2817 15.2172C11.3195 15.2173 11.3572 15.2173 11.396 15.2174C11.7515 15.218 12.1069 15.2196 12.4624 15.2221C12.6451 15.2234 12.8279 15.2243 13.0106 15.2245C13.187 15.2246 13.3634 15.2257 13.5397 15.2274C13.607 15.2279 13.6743 15.228 13.7416 15.2278C13.8358 15.2277 13.93 15.2286 14.0243 15.2299C14.066 15.2294 14.066 15.2294 14.1085 15.2289C14.2545 15.2321 14.3188 15.2496 14.4343 15.342C14.5507 15.492 14.5506 15.6061 14.54 15.7917C14.5012 16.0858 14.4475 16.3553 14.3247 16.6274C14.3025 16.677 14.3025 16.677 14.2799 16.7275C13.9906 17.3121 13.4862 17.7072 12.8775 17.9262C12.6192 18.0008 12.3723 18.011 12.1048 18.0101C12.0616 18.0102 12.0185 18.0104 11.974 18.0105C11.855 18.0108 11.7361 18.0108 11.6171 18.0107C11.4885 18.0106 11.3598 18.0109 11.2312 18.0112C10.9795 18.0117 10.7278 18.0117 10.4761 18.0117C10.2714 18.0116 10.0667 18.0116 9.862 18.0118C9.81823 18.0118 9.81823 18.0118 9.77358 18.0119C9.71429 18.0119 9.65501 18.012 9.59572 18.012C9.04021 18.0124 8.4847 18.0123 7.92918 18.0121C7.42161 18.0119 6.91404 18.0123 6.40647 18.013C5.88463 18.0138 5.36279 18.0141 4.84095 18.0139C4.54824 18.0139 4.25554 18.0139 3.96283 18.0145C3.71362 18.0149 3.46442 18.015 3.21521 18.0145C3.08821 18.0143 2.96122 18.0143 2.83422 18.0147C2.69618 18.0151 2.55815 18.0148 2.42011 18.0143C2.38048 18.0146 2.34086 18.0149 2.30003 18.0151C1.64694 18.0105 1.07473 17.7493 0.616137 17.29C0.23171 16.8661 -0.0111237 16.322 -0.0157374 15.7484C-0.0169572 15.7212 -0.0181771 15.694 -0.0194339 15.6659C-0.0208147 15.5267 -0.00840902 15.4518 0.075792 15.3395C0.213619 15.233 0.319075 15.2279 0.486444 15.2299C0.516151 15.2295 0.545858 15.2291 0.576465 15.2287C0.674263 15.2276 0.772012 15.2279 0.869814 15.2281C0.937774 15.2276 1.00573 15.227 1.07369 15.2264C1.25226 15.2249 1.43082 15.2245 1.60939 15.2244C1.79173 15.224 1.97406 15.2227 2.15639 15.2214C2.51393 15.219 2.87147 15.2177 3.22901 15.2172C3.20631 15.1997 3.1836 15.1822 3.1602 15.1641C3.1303 15.141 3.10039 15.1178 3.06958 15.0939C3.03998 15.0711 3.01039 15.0482 2.97989 15.0246C2.79345 14.8771 2.62272 14.712 2.44972 14.5493C2.42604 14.5276 2.40236 14.5059 2.37796 14.4836C1.83472 13.969 1.42581 13.2932 1.11378 12.6196C1.08407 12.5568 1.08407 12.5568 1.05377 12.4927C0.575897 11.4367 0.496507 10.3487 0.50009 9.20656C0.500472 9.04623 0.500116 8.88591 0.499884 8.72558C0.499617 8.45739 0.499965 8.18921 0.500677 7.92102C0.50149 7.61134 0.501218 7.30168 0.500406 6.992C0.499733 6.72458 0.499637 6.45715 0.500026 6.18972C0.500257 6.03062 0.50029 5.87153 0.499798 5.71243C0.499369 5.5635 0.499666 5.41459 0.500524 5.26566C0.50072 5.21111 0.500664 5.15655 0.500337 5.10199C0.499931 5.02751 0.50053 4.95303 0.50118 4.87856C0.501236 4.83692 0.501292 4.79529 0.50135 4.75239C0.524255 4.61587 0.573124 4.554 0.668467 4.45551C0.752172 4.41366 0.798184 4.41335 0.891083 4.41253C0.922098 4.41216 0.953112 4.4118 0.985066 4.41143C1.01915 4.41121 1.05324 4.411 1.08836 4.41078C1.1242 4.41041 1.16004 4.41004 1.19697 4.40967C1.31584 4.40849 1.43471 4.40757 1.55358 4.40666C1.63585 4.40589 1.71811 4.40512 1.80037 4.40432C2.01719 4.40227 2.23401 4.40044 2.45083 4.39865C2.67196 4.39679 2.89308 4.39472 3.11421 4.39267C3.54831 4.38867 3.98241 4.38491 4.41651 4.38129C4.40098 4.35592 4.38544 4.33054 4.36943 4.3044C4.34918 4.27106 4.32893 4.23771 4.30807 4.20336C4.28794 4.17033 4.26781 4.13731 4.24707 4.10328C4.03184 3.72675 4.04533 3.30188 4.15515 2.89662C4.2465 2.63454 4.40028 2.41611 4.59104 2.21662C4.72195 2.04827 4.7312 1.87001 4.72788 1.66419C4.70493 1.50073 4.6246 1.39388 4.52784 1.2641C4.4468 1.13173 4.41651 1.06518 4.41651 0.909244C4.48963 0.657913 4.6301 0.557065 4.88647 0.5741ZM1.29933 5.1977C1.11626 8.19739 1.11626 8.19739 1.51039 11.4506C1.51979 11.4829 1.5292 11.5151 1.53889 11.5483C2.01133 13.1058 3.11484 14.339 4.53052 15.1056C4.55413 15.1179 4.57774 15.1303 4.60206 15.143C4.63078 15.1618 4.6595 15.1805 4.68909 15.1999C4.88701 15.2794 5.07356 15.272 5.28506 15.2729C5.33137 15.2735 5.37769 15.2741 5.42541 15.2747C5.55218 15.2762 5.67894 15.2772 5.80572 15.2778C5.88525 15.2783 5.96479 15.2788 6.04433 15.2793C6.29412 15.2811 6.54391 15.2823 6.79372 15.2829C7.08027 15.2836 7.36674 15.2859 7.65327 15.2895C7.87582 15.2923 8.09834 15.2936 8.3209 15.2938C8.4533 15.2939 8.58563 15.2947 8.718 15.297C9.36367 15.3075 9.85218 15.2593 10.3911 14.8832C10.4403 14.8505 10.4896 14.8178 10.5389 14.7852C11.8514 13.9099 12.788 12.5546 13.1185 11.0087C13.4963 9.10863 13.2114 7.13494 13.2114 5.1977C9.28044 5.1977 5.34944 5.1977 1.29933 5.1977ZM13.9907 6.05121C13.9907 6.34512 13.9907 6.63902 13.9907 6.94184C14.1193 6.92347 14.1193 6.92347 14.2505 6.90473C15.0021 6.8461 15.7031 6.99146 16.3077 7.46137C16.3647 7.5102 16.4212 7.55963 16.4771 7.60981C16.4997 7.62904 16.5224 7.64827 16.5458 7.66808C16.989 8.07084 17.2906 8.71331 17.3388 9.3067C17.3729 10.1634 17.2131 10.8898 16.6255 11.5434C16.5967 11.5774 16.5967 11.5774 16.5672 11.6121C16.1415 12.0806 15.4873 12.3502 14.8653 12.4048C14.775 12.4088 14.685 12.411 14.5946 12.4123C14.5622 12.413 14.5298 12.4137 14.4964 12.4145C14.3943 12.4166 14.2923 12.4184 14.1902 12.4201C14.1204 12.4215 14.0506 12.423 13.9807 12.4245C13.8109 12.428 13.6411 12.4311 13.4712 12.434C13.4109 12.5484 13.3506 12.6629 13.2903 12.7773C13.2732 12.8097 13.2561 12.8421 13.2385 12.8754C13.222 12.9068 13.2055 12.9381 13.1885 12.9704C13.1658 13.0135 13.1658 13.0135 13.1426 13.0575C13.1029 13.1338 13.0643 13.2106 13.0259 13.2875C13.2958 13.2904 13.5657 13.2923 13.8356 13.2937C13.9272 13.2942 14.0188 13.295 14.1104 13.2959C15.2064 13.3073 16.2001 13.1236 17.0337 12.3598C17.0676 12.3293 17.1015 12.2989 17.1365 12.2675C17.5707 11.8575 17.8731 11.3625 18.0728 10.8012C18.0811 10.7778 18.0894 10.7545 18.098 10.7304C18.3898 9.86094 18.2732 8.86228 17.884 8.04483C17.7029 7.68294 17.4606 7.38146 17.1821 7.09027C17.1617 7.0675 17.1413 7.04473 17.1202 7.02127C16.5817 6.44153 15.692 6.04081 14.9028 6.01067C14.8021 6.00913 14.7014 6.00904 14.6007 6.00946C14.5666 6.00932 14.5325 6.00918 14.4973 6.00903C14.4474 6.0091 14.4474 6.0091 14.3965 6.00917C14.3666 6.00922 14.3368 6.00926 14.3061 6.0093C14.2002 6.01479 14.0953 6.03378 13.9907 6.05121ZM14.1485 7.68456C14.1188 7.69137 14.0892 7.69818 14.0586 7.7052C14.0362 7.71046 14.0138 7.71572 13.9907 7.72113C13.9906 7.75356 13.9905 7.78598 13.9903 7.81939C13.9889 8.12931 13.9868 8.43922 13.9839 8.74913C13.9825 8.90835 13.9813 9.06756 13.9807 9.22678C13.9774 10.0575 13.9399 10.8457 13.731 11.6547C13.8873 11.6575 14.0437 11.6595 14.2 11.6608C14.2531 11.6614 14.3061 11.6622 14.3591 11.6631C15.006 11.6747 15.548 11.524 16.0282 11.0726C16.4108 10.6935 16.5959 10.1996 16.6 9.66938C16.6007 9.36612 16.5705 9.11234 16.44 8.83441C16.4269 8.80538 16.4139 8.77634 16.4005 8.74642C16.1439 8.23222 15.705 7.91315 15.1775 7.7191C14.9852 7.6581 14.8144 7.641 14.6123 7.63996C14.5431 7.63917 14.5431 7.63917 14.4726 7.63836C14.3565 7.64508 14.2605 7.65859 14.1485 7.68456ZM0.816904 15.9965C0.902905 16.4265 1.13648 16.7496 1.49879 16.9915C1.91141 17.239 2.31129 17.2639 2.78293 17.2632C2.82273 17.2633 2.86253 17.2634 2.90354 17.2635C3.03625 17.2637 3.16896 17.2637 3.30167 17.2636C3.39709 17.2637 3.49252 17.2639 3.58794 17.264C3.81985 17.2643 4.05177 17.2644 4.28369 17.2644C4.47234 17.2645 4.66099 17.2645 4.84964 17.2647C5.3853 17.265 5.92097 17.2652 6.45663 17.2651C6.48547 17.2651 6.5143 17.2651 6.54401 17.2651C6.57289 17.2651 6.60176 17.2651 6.63151 17.2651C7.09922 17.2651 7.56693 17.2655 8.03464 17.266C8.51568 17.2665 8.99672 17.2668 9.47776 17.2667C9.7475 17.2667 10.0173 17.2668 10.287 17.2672C10.5408 17.2676 10.7946 17.2676 11.0484 17.2673C11.1413 17.2673 11.2342 17.2674 11.3271 17.2676C12.3881 17.2851 12.3881 17.2851 13.2925 16.778C13.476 16.57 13.6939 16.2839 13.6939 15.9965C9.44446 15.9965 5.19507 15.9965 0.816904 15.9965Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={closeMobileMenu}>
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      )}

      {/* Mobile sliding panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Panel Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Image
              src="/aampannalogo-svg.png"
              alt="Logo"
              width={80}
              height={28}
              className="w-auto h-7"
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-4 py-6 space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About us" },
              { href: "/projects", label: "Projects" },
              { href: "/team", label: "Our team" },
              { href: "/blog", label: "Blog" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`group flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform hover:scale-[1.02] ${
                  isActive(item.href)
                    ? "text-primary bg-accent shadow-sm"
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen
                    ? "slideInRight 0.3s ease-out forwards"
                    : "none",
                }}
              >
                <span className="flex-1">{item.label}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground group-hover:translate-x-1"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="p-4 border-t border-border">
            <button
              onClick={closeMobileMenu}
              className="w-full minimal-button minimal-button-primary transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {`Let's chat ↗`}
            </button>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
