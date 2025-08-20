'use client'
import { useEffect, useState } from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Blog title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      date: "DD MM YYYY",
      tags: ["Latest", "Marketing", "Development"],
      featured: true,
      readMore: "View more",
      creator: "Creator"
    },
    {
      id: 2,
      title: "Blog title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      date: "DD MM YYYY",
      featured: false,
      subSections: [
        {
          title: "Sub title",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
        },
        {
          title: "Sub title",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
        },
        {
          title: "Sub title",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
        }
      ],
      creator: "Creator"
    },
    {
      id: 3,
      title: "Blog title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      date: "DD MM YYYY",
      featured: true,
      readMore: "View more",
      creator: "Creator"
    },
    {
      id: 4,
      title: "Blog title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      date: "DD MM YYYY",
      featured: true,
      readMore: "View more",
      creator: "Creator"
    }
  ];

const items = ["UI/UX", "Design", "Ideas", "Code", "Testing"];
const [active, setActive] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, 2000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
              Latest
            </span>
            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
              Marketing
            </span>
            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
              Development
            </span>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="card-hover">
                {post.featured ? (
                  // Featured post layout
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="aspect-video bg-gray-400 rounded-lg"></div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-bold text-primary">{post.title}</h2>
                        <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                          {post.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                      {post.readMore && (
                        <button className="text-primary hover:underline text-sm font-medium">
                          {post.readMore}
                        </button>
                      )}
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-sm text-muted-foreground">{post.creator}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Full-width detailed post layout
                  <div className="bg-gray-400 rounded-lg p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-3xl font-bold text-primary">{post.title}</h2>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {post.date}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {post.excerpt}
                    </p>

                    {post.subSections && (
                      <div className="space-y-8">
                        {post.subSections.map((section, index) => (
                          <div key={index}>
                            <h3 className="text-xl font-bold text-primary mb-4">
                              {section.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-end pt-8">
                      <span className="text-sm text-muted-foreground">{post.creator}</span>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>











  );
};

export default Blog;