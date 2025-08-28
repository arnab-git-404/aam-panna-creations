'use client'

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

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js. This comprehensive guide covers everything from setup to deployment, including best practices for performance optimization and SEO.",
    date: "15 Dec 2023",
    tags: ["Latest", "Development", "React"],
    featured: true,
    readMore: "View more",
    creator: "John Doe",
    content: `
      <h2>Introduction</h2>
      <p>Next.js is a powerful React framework that makes building web applications easier and more efficient. In this comprehensive guide, we'll explore all the features that make Next.js the go-to choice for modern web development.</p>
      
      <h3>Why Choose Next.js?</h3>
      <p>Next.js offers several advantages including server-side rendering, automatic code splitting, and built-in optimization features. These capabilities help you build faster, more SEO-friendly applications.</p>
      
      <h3>Getting Started</h3>
      <p>To get started with Next.js, you'll need Node.js installed on your system. Then you can create a new project using the create-next-app command.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Server-side rendering (SSR)</li>
        <li>Static site generation (SSG)</li>
        <li>API routes</li>
        <li>Automatic code splitting</li>
        <li>Built-in CSS support</li>
      </ul>
    `,
    fullContent: [
      {
        title: "Server-Side Rendering",
        content: "Next.js provides excellent support for server-side rendering, which improves initial page load times and SEO performance. This feature allows your pages to be rendered on the server before being sent to the client."
      },
      {
        title: "Static Site Generation", 
        content: "With static site generation, you can pre-render pages at build time, resulting in incredibly fast loading times and better performance for your users."
      },
      {
        title: "API Routes",
        content: "Next.js allows you to create API endpoints within your application, eliminating the need for a separate backend in many cases."
      }
    ]
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    excerpt:
      "Explore advanced React patterns and techniques that will help you write more maintainable and scalable code. Learn about compound components, render props, and custom hooks.",
    date: "10 Dec 2023",
    featured: false,
    creator: "Jane Smith",
    content: `
      <h2>Advanced React Patterns</h2>
      <p>As your React applications grow in complexity, it becomes crucial to understand and implement advanced patterns that promote code reusability and maintainability.</p>
      
      <h3>Compound Components</h3>
      <p>Compound components allow you to create flexible and reusable component APIs that work together seamlessly.</p>
      
      <h3>Render Props</h3>
      <p>The render props pattern enables you to share code between components using a prop whose value is a function.</p>
    `,
    fullContent: [
      {
        title: "Compound Components Pattern",
        content: "Compound components provide a flexible way to build reusable UI components. This pattern allows you to create components that work together while maintaining a clean and intuitive API."
      },
      {
        title: "Render Props Pattern", 
        content: "Render props is a technique for sharing code between React components using a prop whose value is a function. This pattern is particularly useful for creating reusable logic."
      },
      {
        title: "Custom Hooks",
        content: "Custom hooks allow you to extract component logic into reusable functions, promoting code reuse and separation of concerns in your React applications."
      }
    ]
  },
  {
    id: 3,
    title: "Building Responsive Web Design",
    excerpt:
      "Master the art of responsive web design with modern CSS techniques. Learn about CSS Grid, Flexbox, and mobile-first design principles to create websites that work on all devices.",
    date: "05 Dec 2023",
    featured: true,
    readMore: "View more",
    creator: "Mike Johnson",
    content: `
      <h2>Responsive Web Design</h2>
      <p>Creating websites that work seamlessly across all devices is essential in today's multi-device world. This guide covers the fundamental principles and modern techniques for responsive design.</p>
      
      <h3>Mobile-First Approach</h3>
      <p>Starting your design process with mobile devices in mind ensures better performance and user experience across all screen sizes.</p>
      
      <h3>CSS Grid and Flexbox</h3>
      <p>Modern CSS layout techniques provide powerful tools for creating flexible and responsive layouts without the need for complex media queries.</p>
    `,
    fullContent: [
      {
        title: "CSS Grid Layout",
        content: "CSS Grid provides a two-dimensional layout system that makes it easier to design complex responsive layouts. It's particularly useful for creating card-based designs and complex page layouts."
      },
      {
        title: "Flexbox Fundamentals",
        content: "Flexbox is perfect for one-dimensional layouts and component-level design. It excels at distributing space and aligning items within containers."
      },
      {
        title: "Media Queries Best Practices",
        content: "Learn how to write efficient media queries that create smooth breakpoints and maintain design consistency across different screen sizes."
      }
    ]
  },
  {
    id: 4,
    title: "JavaScript Performance Optimization",
    excerpt:
      "Discover techniques to optimize JavaScript performance in web applications. Learn about code splitting, lazy loading, and memory management to create faster, more efficient applications.",
    date: "01 Dec 2023",
    featured: true,
    readMore: "View more",
    creator: "Sarah Wilson",
    content: `
      <h2>JavaScript Performance Optimization</h2>
      <p>Performance is crucial for user experience. This comprehensive guide covers various techniques to optimize JavaScript performance in modern web applications.</p>
      
      <h3>Code Splitting</h3>
      <p>Break your code into smaller chunks that can be loaded on demand, reducing initial bundle size and improving loading times.</p>
      
      <h3>Memory Management</h3>
      <p>Understanding how JavaScript manages memory and how to avoid memory leaks is essential for building performant applications.</p>
    `,
    fullContent: [
      {
        title: "Bundle Optimization",
        content: "Learn how to analyze and optimize your JavaScript bundles using tools like webpack-bundle-analyzer and implementing effective code splitting strategies."
      },
      {
        title: "Lazy Loading Techniques",
        content: "Implement lazy loading for components, images, and other resources to improve initial page load times and reduce bandwidth usage."
      },
      {
        title: "Memory Leak Prevention",
        content: "Understand common causes of memory leaks in JavaScript applications and learn techniques to prevent them, including proper event listener cleanup and avoiding circular references."
      }
    ]
  },
];

