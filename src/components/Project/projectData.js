import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const projectData = [
  {
    image: ['/images/sample-1.jpg', '/images/sample-2.jpeg', '/images/sample-3.jpeg', '/images/sample-4.jpg'],
    TagIcons: [DiMongodb,],
    tags: ['MongoDB', 'Express'],
    title: 'Chat Buddy 💬',
    description: 'a full-stack real-time messaging app built with the MERN stack, featuring email verification, live chat with Socket.IO, and dynamic theme support.',
    details: 'Chat Buddy is a real-time messaging platform built using the powerful MERN stack (MongoDB, Express, React, Node.js). It features secure user authentication, including email verification via Brevo, password resets, and JWT-based route protection. Real-time chat functionality is powered by Socket.IO, complete with typing indicators and instant message updates. Chat data and user profiles are persisted in MongoDB, ensuring a seamless experience across sessions.On the frontend, Chat Buddy uses React with Vite for fast performance, styled with TailwindCSS and DaisyUI to support over 30 dynamic themes. Global state is managed through Zustand, and API communication is handled via Axios. The project is fully deployed using Render, with assets optionally served via Cloudinary. Designed to demonstrate full-stack capabilities and clean architecture, Chat Buddy serves as a polished, production-ready portfolio piece that highlights real-world development skills.',
    github: 'https://github.com/davidalfarero/react-portfolio',
    demo: ''
  },

  {
    image: ['/images/sample-1.jpg', '/images/sample-2.jpeg', '/images/sample-3.jpeg', '/images/sample-4.jpg'],
    TagIcons: [FaReact, RiTailwindCssFill],
    tags: ['React', 'Nextjs'],
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, natus!',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid nesciunt, placeat natus harum fugiat illum modi dolor expedita, facilis voluptatibus ducimus amet at cupiditate eos! Modi perspiciatis quisquam optio ad nemo est voluptates dignissimos consectetur quaerat repudiandae, quis inventore debitis, cupiditate eaque harum nobis accusantium consequatur illum maxime eligendi delectus? Quae, nobis. Velit eaque, hic culpa architecto fuga illo!',
    github: 'https://github.com/davidalfarero/react-portfolio',
    demo: ''
  },
];