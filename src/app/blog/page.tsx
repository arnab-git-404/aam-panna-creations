// // "use client";
// // import { useEffect, useState } from "react";
// // import { toast } from "react-hot-toast";

// // const Blog = () => {
// //   const blogPosts = [
// //     {
// //       id: 1,
// //       title: "Blog title",
// //       excerpt:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       date: "DD MM YYYY",
// //       tags: ["Latest", "Marketing", "Development"],
// //       featured: true,
// //       readMore: "View more",
// //       creator: "Creator",
// //     },
// //     {
// //       id: 2,
// //       title: "Blog title",
// //       excerpt:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       date: "DD MM YYYY",
// //       featured: false,
// //       subSections: [
// //         {
// //           title: "Sub title",
// //           content:
// //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //         },
// //         {
// //           title: "Sub title",
// //           content:
// //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //         },
// //         {
// //           title: "Sub title",
// //           content:
// //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //         },
// //       ],
// //       creator: "Creator",
// //     },
// //     {
// //       id: 3,
// //       title: "Blog title",
// //       excerpt:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       date: "DD MM YYYY",
// //       featured: true,
// //       readMore: "View more",
// //       creator: "Creator",
// //     },
// //     {
// //       id: 4,
// //       title: "Blog title",
// //       excerpt:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       date: "DD MM YYYY",
// //       featured: true,
// //       readMore: "View more",
// //       creator: "Creator",
// //     },
// //   ];

// //   const items = ["UI/UX", "Design", "Ideas", "Code", "Testing"];
// //   const [active, setActive] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActive((prev) => (prev + 1) % items.length);
// //     }, 2000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="fade-in">
// //       {/* Header */}
// //       {/* <section className="py-12 border-b border-border">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex flex-wrap gap-2 mb-6">
// //             <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
// //               Latest
// //             </span>
// //             <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
// //               Marketing
// //             </span>
// //             <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
// //               Development
// //             </span>
// //           </div>
// //         </div>
// //       </section> */}

// //       {/* Blog Posts */}
// //       <section className="py-12">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="space-y-12">
// //             {blogPosts.map((post) => (
// //               <article key={post.id} className="card-hover">
// //                 {post.featured ? (
// //                   // Featured post layout
// //                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
// //                     <div className="aspect-video bg-gray-400 rounded-lg"></div>
// //                     <div className="space-y-4">
// //                       <div className="flex justify-between items-start">
// //                         <h2 className="text-3xl font-bold text-primary">
// //                           {post.title}
// //                         </h2>
// //                         <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
// //                           {post.date}
// //                         </span>
// //                       </div>
// //                       <p className="text-muted-foreground leading-relaxed">
// //                         {post.excerpt}
// //                       </p>
// //                       {post.readMore && (
// //                         // <button className="text-primary hover:underline text-sm font-medium">
// //                         //   {post.readMore}
// //                         // </button>

// //                         <button
// //                           onClick={() => {
// //                             toast.success("Navigating to all reviews...");
// //                           }}
// //                           className="hover:cursor-pointer relative px-4 md:px-4 py-2 md:py-1 rounded-full bg-[#FF69B4] text-black font-medium text-lg md:text-xl
// //         shadow-[0px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)]"
// //                         >
// //                           {post.readMore}
// //                         </button>
// //                       )}
// //                       <div className="flex justify-between items-center pt-4">
// //                         <span className="text-sm text-muted-foreground">
// //                           {post.creator}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ) : (
// //                   // Full-width detailed post layout
// //                   <div className="bg-gray-400 rounded-lg p-8">
// //                     <div className="flex justify-between items-start mb-6">
// //                       <h2 className="text-3xl font-bold text-primary">
// //                         {post.title}
// //                       </h2>
// //                       <span className="text-sm text-muted-foreground whitespace-nowrap">
// //                         {post.date}
// //                       </span>
// //                     </div>

// //                     <p className="text-muted-foreground leading-relaxed mb-8">
// //                       {post.excerpt}
// //                     </p>

// //                     {post.subSections && (
// //                       <div className="space-y-8">
// //                         {post.subSections.map((section, index) => (
// //                           <div key={index}>
// //                             <h3 className="text-xl font-bold text-primary mb-4">
// //                               {section.title}
// //                             </h3>
// //                             <p className="text-muted-foreground leading-relaxed">
// //                               {section.content}
// //                             </p>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     )}

// //                     <div className="flex justify-end pt-8">
// //                       <span className="text-sm text-muted-foreground">
// //                         {post.creator}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 )}
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Blog;





// // NEW MODE 
// // 'use client'
// // import React, { useEffect, useState } from "react";
// // import { toast } from "react-hot-toast";
// // // import { useRouter } from "next/router";
// // import { useRouter } from "next/navigation";

// // import { NextPage } from "next";

// // import { blogData } from "../blogData/blogData";
// // export interface BlogPost {
// //   id: number;
// //   title: string;
// //   excerpt: string;
// //   date: string;
// //   tags?: string[];
// //   featured: boolean;
// //   readMore?: string;
// //   creator: string;
// //   content: string;
// //   fullContent?: {
// //     title: string;
// //     content: string;
// //   }[];
// // }


// // const Blog: NextPage = () => {

// //   const router = useRouter();
  
// //   const items: string[] = ["UI/UX", "Design", "Ideas", "Code", "Testing"];
// //   const [active, setActive] = useState<number>(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActive((prev: number) => (prev + 1) % items.length);
// //     }, 2000);
// //     return () => clearInterval(interval);
// //   }, [items.length]);

// //   const handleViewMore = (postId: number): void => {
// //     toast.success("Loading blog post...");
// //     router.push(`/blog/${postId}`);
// //   };

// //   const renderFeaturedPost = (post: BlogPost) => (
// //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
// //       <div className="aspect-video bg-gray-400 rounded-lg"></div>
// //       <div className="space-y-4">
// //         <div className="flex justify-between items-start">
// //           <h2 className="text-3xl font-bold text-primary">
// //             {post.title}
// //           </h2>
// //           <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
// //             {post.date}
// //           </span>
// //         </div>
// //         <p className="text-muted-foreground leading-relaxed">
// //           {post.excerpt}
// //         </p>
// //         {post.readMore && (
// //           <button
// //             onClick={() => handleViewMore(post.id)}
// //             className="hover:cursor-pointer relative px-4 md:px-4 py-2 md:py-1 rounded-full bg-[#FF69B4] text-black font-medium text-lg md:text-xl
// //               shadow-[0px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)]"
// //           >
// //             {post.readMore}
// //           </button>
// //         )}
// //         <div className="flex justify-between items-center pt-4">
// //           <span className="text-sm text-muted-foreground">
// //             By {post.creator}
// //           </span>
// //           {post.tags && (
// //             <div className="flex gap-2">
// //               {post.tags.map((tag: string, index: number) => (
// //                 <span 
// //                   key={index}
// //                   className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs"
// //                 >
// //                   {tag}
// //                 </span>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderRegularPost = (post: BlogPost) => (
// //     <div className="bg-gray-100 rounded-lg p-8 cursor-pointer hover:bg-gray-200 transition-colors"
// //          onClick={() => handleViewMore(post.id)}>
// //       <div className="flex justify-between items-start mb-6">
// //         <h2 className="text-3xl font-bold text-primary">
// //           {post.title}
// //         </h2>
// //         <span className="text-sm text-muted-foreground whitespace-nowrap">
// //           {post.date}
// //         </span>
// //       </div>

// //       <p className="text-muted-foreground leading-relaxed mb-8">
// //         {post.excerpt}
// //       </p>

// //       {post.fullContent && (
// //         <div className="space-y-8">
// //           {post.fullContent.map((section, index: number) => (
// //             <div key={index}>
// //               <h3 className="text-xl font-bold text-primary mb-4">
// //                 {section.title}
// //               </h3>
// //               <p className="text-muted-foreground leading-relaxed">
// //                 {section.content}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       <div className="flex justify-between items-center pt-8">
// //         <span className="text-sm text-muted-foreground">
// //           By {post.creator}
// //         </span>
// //         <span className="text-primary text-sm font-medium">
// //           Click to read more →
// //         </span>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="fade-in">
// //       {/* Blog Posts */}
// //       <section className="py-12">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="mb-8">
// //             <h1 className="text-4xl font-bold text-primary mb-4">Our Blog</h1>
// //             <p className="text-muted-foreground text-lg">
// //               Discover insights, tutorials, and latest updates from our team
// //             </p>
// //           </div>
          
// //           <div className="space-y-12">
// //             {blogData.map((post: BlogPost) => (
// //               <article key={post.id} className="card-hover">
// //                 {post.featured ? renderFeaturedPost(post) : renderRegularPost(post)}
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Blog;


// 'use client'

// import React, { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation"; // Changed from "next/router"
// import { FaCircleArrowLeft } from "react-icons/fa6";


// // Import your blog data
// import { blogData } from "../blogData/blogData";

// export interface BlogPost {
//   id: number;
//   title: string;
//   excerpt: string;
//   date: string;
//   tags?: string[];
//   featured: boolean;
//   readMore?: string;
//   creator: string;
//   content: string;
//   fullContent?: {
//     title: string;
//     content: string;
//   }[];
// }

// const Blog = () => {
//   const router = useRouter();
  
//   const items: string[] = ["UI/UX", "Design", "Ideas", "Code", "Testing"];
//   const [active, setActive] = useState<number>(0);
//   const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev: number) => (prev + 1) % items.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [items.length]);

//   const handleViewMore = (postId: number): void => {
//     const post = blogData.find(p => p.id === postId);
//     if (post) {
//       setSelectedPost(post);
//       toast.success("Loading blog post...");
//     }
//   };

//   const handleBackToBlog = (): void => {
//     setSelectedPost(null);
//     toast.success("Back to blog list");
//   };

//   // Individual Post View
//   if (selectedPost) {
//     return (
//       <div className="fade-in min-h-screen">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           {/* Back Button */}
//           <button
//             onClick={handleBackToBlog}
//             className="mb-8 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200"
//           > 
//           <FaCircleArrowLeft className="w-10 h-8" />

//             <span className="font-medium">Back to Blog</span>
//           </button>

//           {/* Post Content */}
//           <article className="bg-white rounded-lg shadow-lg overflow-hidden">
//             {/* Hero Image */}
//             <div className="aspect-video bg-gray-400 w-full"></div>
            
//             {/* Content */}
//             <div className="p-8">
//               {/* Header */}
//               <div className="flex justify-between items-start mb-6">
//                 <h1 className="text-4xl font-bold text-gray-900">
//                   {selectedPost.title}
//                 </h1>
//                 <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
//                   {selectedPost.date}
//                 </span>
//               </div>

//               {/* Excerpt */}
//               <p className="text-gray-600 leading-relaxed text-lg mb-8">
//                 {selectedPost.excerpt}
//               </p>

//               {/* Main Content */}
//               <div className="prose prose-lg max-w-none mb-8">
//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   {selectedPost.content}
//                 </p>
//               </div>

//               {/* Sub Sections */}
//               {selectedPost.fullContent && (
//                 <div className="space-y-8">
//                   {selectedPost.fullContent.map((section, index) => (
//                     <div key={index} className="border-l-4 border-[#FF69B4] pl-6">
//                       <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                         {section.title}
//                       </h2>
//                       <p className="text-gray-600 leading-relaxed text-lg">
//                         {section.content}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Tags */}
//               {selectedPost.tags && (
//                 <div className="flex flex-wrap gap-2 mt-8 mb-8">
//                   {selectedPost.tags.map((tag, index) => (
//                     <span 
//                       key={index}
//                       className="px-3 py-1 bg-[#FF69B4] text-white rounded-full text-sm font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Author */}
//               <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
//                   <span className="font-medium text-gray-900">
//                     {selectedPost.creator}
//                   </span>
//                 </div>
//                 <span className="text-sm text-gray-500">
//                   Published on {selectedPost.date}
//                 </span>
//               </div>
//             </div>
//           </article>
//         </div>
//       </div>
//     );
//   }

//   const renderFeaturedPost = (post: BlogPost) => (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//       <div className="aspect-video bg-gray-400 rounded-lg"></div>
//       <div className="space-y-4">
//         <div className="flex justify-between items-start">
//           <h2 className="text-3xl font-bold text-primary">
//             {post.title}
//           </h2>
//           <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
//             {post.date}
//           </span>
//         </div>
//         <p className="text-muted-foreground leading-relaxed">
//           {post.excerpt}
//         </p>
//         {post.readMore && (
//           <button
//             onClick={() => handleViewMore(post.id)}
//             className="hover:cursor-pointer relative px-4 md:px-4 py-2 md:py-1 rounded-full bg-[#FF69B4] text-black font-medium text-lg md:text-xl
//               shadow-[0px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)]"
//           >
//             {post.readMore}
//           </button>
//         )}
//         <div className="flex justify-between items-center pt-4">
//           <span className="text-sm text-muted-foreground">
//             By {post.creator}
//           </span>
//           {post.tags && (
//             <div className="flex gap-2">
//               {post.tags.map((tag: string, index: number) => (
//                 <span 
//                   key={index}
//                   className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const renderRegularPost = (post: BlogPost) => (
//     <div className="bg-gray-100 rounded-lg p-8 cursor-pointer hover:bg-gray-200 transition-colors"
//          onClick={() => handleViewMore(post.id)}>
//       <div className="flex justify-between items-start mb-6">
//         <h2 className="text-3xl font-bold text-primary">
//           {post.title}
//         </h2>
//         <span className="text-sm text-muted-foreground whitespace-nowrap">
//           {post.date}
//         </span>
//       </div>

//       <p className="text-muted-foreground leading-relaxed mb-4">
//         {post.excerpt}
//       </p>

//       <div className="flex justify-between items-center pt-4">
//         <span className="text-sm text-muted-foreground">
//           By {post.creator}
//         </span>
//         <span className="text-primary text-sm font-medium">
//           Click to read more →
//         </span>
//       </div>
//     </div>
//   );

//   return (
//     <div className="fade-in">
//       {/* Blog Posts */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-8">
//             <h1 className="text-4xl font-bold text-primary mb-4">Our Blog</h1>
//             <p className="text-muted-foreground text-lg">
//               Discover insights, tutorials, and latest updates from our team
//             </p>
//           </div>
          
//           <div className="space-y-12">
//             {blogData.map((post: BlogPost) => (
//               <article key={post.id} className="card-hover">
//                 {post.featured ? renderFeaturedPost(post) : renderRegularPost(post)}
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;


'use client'

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaCircleArrowLeft } from "react-icons/fa6";

import { blogData } from "../blogData/blogData";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  featured: boolean;
  readMore?: string;
  creator: string;
  content: string;
  fullContent?: {
    title: string;
    content: string;
  }[];
}

const Blog = () => {
  const router = useRouter();
  
  const items: string[] = ["UI/UX", "Design", "Ideas", "Code", "Testing"];
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev: number) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handleViewMore = (postId: number): void => {
    toast.success("Loading blog post...");
    router.push(`/blog/${postId}`);
  };

  const renderFeaturedPost = (post: BlogPost) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="aspect-video bg-gray-400 rounded-lg"></div>
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-primary">
            {post.title}
          </h2>
          <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
            {post.date}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
        {post.readMore && (
          <button
            onClick={() => handleViewMore(post.id)}
            className="hover:cursor-pointer relative px-4 md:px-4 py-2 md:py-1 rounded-full bg-[#FF69B4] text-black font-medium text-lg md:text-xl
              shadow-[0px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)]"
          >
            {post.readMore}
          </button>
        )}
        <div className="flex justify-between items-center pt-4">
          <span className="text-sm text-muted-foreground">
            By {post.creator}
          </span>
          {post.tags && (
            <div className="flex gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderRegularPost = (post: BlogPost) => (
    <div className="bg-gray-100 rounded-lg p-8 cursor-pointer hover:bg-gray-200 transition-colors"
         onClick={() => handleViewMore(post.id)}>
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-3xl font-bold text-primary">
          {post.title}
        </h2>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {post.date}
        </span>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-4">
        {post.excerpt}
      </p>

      <div className="flex justify-between items-center pt-4">
        <span className="text-sm text-muted-foreground">
          By {post.creator}
        </span>
        <span className="text-primary text-sm font-medium">
          Click to read more →
        </span>
      </div>
    </div>
  );

  return (
    <div className="fade-in">
      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Our Blog</h1>
            <p className="text-muted-foreground text-lg">
              Discover insights, tutorials, and latest updates from our team
            </p>
          </div>
          
          <div className="space-y-12">
            {blogData.map((post: BlogPost) => (
              <article key={post.id} className="card-hover">
                {post.featured ? renderFeaturedPost(post) : renderRegularPost(post)}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;