// // 'use client';

// // import Link from "next/link";
// // import Image from "next/image";
// // import { usePathname } from 'next/navigation';

// // const Navbar = () => {
// //   const pathname = usePathname();

// //   const isActive = (path: string): boolean => {
// //     return pathname === path;
// //   };

// //   return (
// //     <nav className="border-b border-border">
// //       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <Link href="/" className="flex items-center space-x-2">
           

// //             <Image 
// //               src="/aampannalogo-svg.png" 
// //               alt="Logo" 
// //               width={90} 
// //               height={32} 
// //               className="hidden md:block"
// //             />

           
// //           </Link>

// //           {/* Navigation Links */}
// //           <div className="hidden md:flex items-center space-x-8">
// //             <Link 
// //               href="/" 
// //               className={`text-sm font-medium transition-colors hover:text-primary ${
// //                 isActive('/') ? 'text-primary' : 'text-muted-foreground'
// //               }`}
// //             >
// //               Home
// //             </Link>
// //             <Link 
// //               href="/about" 
// //               className={`text-sm font-medium transition-colors hover:text-primary ${
// //                 isActive('/about') ? 'text-primary' : 'text-muted-foreground'
// //               }`}
// //             >
// //               About us
// //             </Link>
// //             <Link 
// //               href="/projects" 
// //               className={`text-sm font-medium transition-colors hover:text-primary ${
// //                 isActive('/projects') ? 'text-primary' : 'text-muted-foreground'
// //               }`}
// //             >
// //               Projects
// //             </Link>
// //             <Link 
// //               href="/team" 
// //               className={`text-sm font-medium transition-colors hover:text-primary ${
// //                 isActive('/team') ? 'text-primary' : 'text-muted-foreground'
// //               }`}
// //             >
// //               Our team
// //             </Link>
// //             <Link 
// //               href="/blog" 
// //               className={`text-sm font-medium transition-colors hover:text-primary ${
// //                 isActive('/blog') ? 'text-primary' : 'text-muted-foreground'
// //               }`}
// //             >
// //               Blog
// //             </Link>
            
// //           </div>

// //           {/* CTA Button */}
// //           <button className="minimal-button minimal-button-primary">
// //             Let's chat ↗
// //           </button>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// 'use client';

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const isActive = (path: string): boolean => {
//     return pathname === path;
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="border-b border-border">
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
//             <Image 
//               src="/aampannalogo-svg.png" 
//               alt="Logo" 
//               width={90} 
//               height={32} 
//               className="w-auto h-8 sm:h-10"
//             />
//           </Link>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
//             <Link 
//               href="/" 
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 isActive('/') ? 'text-primary' : 'text-muted-foreground'
//               }`}
//             >
//               Home
//             </Link>
//             <Link 
//               href="/about" 
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 isActive('/about') ? 'text-primary' : 'text-muted-foreground'
//               }`}
//             >
//               About us
//             </Link>
//             <Link 
//               href="/projects" 
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 isActive('/projects') ? 'text-primary' : 'text-muted-foreground'
//               }`}
//             >
//               Projects
//             </Link>
//             <Link 
//               href="/team" 
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 isActive('/team') ? 'text-primary' : 'text-muted-foreground'
//               }`}
//             >
//               Our team
//             </Link>
//             <Link 
//               href="/blog" 
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 isActive('/blog') ? 'text-primary' : 'text-muted-foreground'
//               }`}
//             >
//               Blog
//             </Link>
//           </div>

//           {/* Desktop CTA Button */}
//           <button className="bg-black text-white rounded px-1 hidden sm:block minimal-button minimal-button-primary text-sm lg:text-base">
//             Let's chat ↗
//           </button>

//           {/* Mobile menu button */}
//           <button
//             onClick={toggleMobileMenu}
//             className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             {!isMobileMenuOpen ? (
//               <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//               </svg>
//             ) : (
//               <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
//               <Link 
//                 href="/" 
//                 onClick={closeMobileMenu}
//                 className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                   isActive('/') 
//                     ? 'text-primary bg-accent' 
//                     : 'text-muted-foreground hover:text-primary hover:bg-accent'
//                 }`}
//               >
//                 Home
//               </Link>
//               <Link 
//                 href="/about" 
//                 onClick={closeMobileMenu}
//                 className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                   isActive('/about') 
//                     ? 'text-primary bg-accent' 
//                     : 'text-muted-foreground hover:text-primary hover:bg-accent'
//                 }`}
//               >
//                 About us
//               </Link>
//               <Link 
//                 href="/projects" 
//                 onClick={closeMobileMenu}
//                 className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                   isActive('/projects') 
//                     ? 'text-primary bg-accent' 
//                     : 'text-muted-foreground hover:text-primary hover:bg-accent'
//                 }`}
//               >
//                 Projects
//               </Link>
//               <Link 
//                 href="/team" 
//                 onClick={closeMobileMenu}
//                 className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                   isActive('/team') 
//                     ? 'text-primary bg-accent' 
//                     : 'text-muted-foreground hover:text-primary hover:bg-accent'
//                 }`}
//               >
//                 Our team
//               </Link>
//               <Link 
//                 href="/blog" 
//                 onClick={closeMobileMenu}
//                 className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                   isActive('/blog') 
//                     ? 'text-primary bg-accent' 
//                     : 'text-muted-foreground hover:text-primary hover:bg-accent'
//                 }`}
//               >
//                 Blog
//               </Link>
              
//               {/* Mobile CTA Button */}
//               <div className="pt-4 pb-2">
//                 <button 
//                   onClick={closeMobileMenu}
//                   className="w-full minimal-button minimal-button-primary"
//                 >
//                   Let's chat ↗
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="border-b border-border relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <Image 
                src="/aampannalogo-svg.png" 
                alt="Logo" 
                width={90} 
                height={32} 
                className="w-auto h-8 sm:h-10"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link 
                href="/" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                About us
              </Link>
              <Link 
                href="/projects" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/projects') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Projects
              </Link>
              <Link 
                href="/team" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/team') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Our team
              </Link>
              <Link 
                href="/blog" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/blog') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Blog
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <button className="bg-black text-white rounded-2xl px-2 h-8  hidden sm:block minimal-button minimal-button-primary text-sm lg:text-base">
              {`Let's chat ↗`}
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
                    isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                />
                <span 
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeMobileMenu}
        >
          <div 
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      )}

      {/* Mobile sliding panel */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-4 py-6 space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About us' },
              { href: '/projects', label: 'Projects' },
              { href: '/team', label: 'Our team' },
              { href: '/blog', label: 'Blog' }
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`group flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform hover:scale-[1.02] ${
                  isActive(item.href)
                    ? 'text-primary bg-accent shadow-sm'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="flex-1">{item.label}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground group-hover:translate-x-1'
                  }`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
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