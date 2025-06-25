import { BrevoIcon, DaisyIcon, ExpressIcon, JWTIcon, MongoDBIcon, NodeIcon, ReactIcon, SocketIcon, TawilwindIcon } from "../icons/TechIcons";

export const projectData = [
  {
    image: [
      '/chatbuddy/chatapp-homepage.png',
      '/chatbuddy/chatapp-homepage-darkmode.png',
      '/chatbuddy/chatapp-homepage-aquamode.png',
      '/chatbuddy/chatapp-homepage-synthwavemode.png',
      '/chatbuddy/chatapp-loginpage.png',
      '/chatbuddy/chatapp-signuppage.png',
      '/chatbuddy/chatapp-verifyemail.png',
      '/chatbuddy/chatapp-emailverified.png',
      '/chatbuddy/chatapp-resetpassword.png',
      '/chatbuddy/chatapp-resetsuccess.png',
      '/chatbuddy/chatapp-settingspage.png',
      '/chatbuddy/chatapp-profilepage.png',
    ],
    Icon: [MongoDBIcon, ExpressIcon, ReactIcon, NodeIcon, BrevoIcon, JWTIcon, SocketIcon, TawilwindIcon, DaisyIcon],
    tags: ['MongoDB', 'press', 'React', 'Nodejs', 'Brevo', 'JWT', 'Socket.io', 'TailwindCSS', 'DaisyUI'],
    title: 'Chat Buddy 💬',
    description:
      'A full-stack real-time messaging app built with the MERN stack.',
    details: `Chat Buddy is a real-time messaging platform built using the powerful MERN stack (MongoDB, Express, React, Node.js). It features secure user authentication, including email verification via Brevo, password resets, and JWT-based route protection. Real-time chat functionality is powered by Socket.IO, complete with typing indicators and instant message updates. Chat data and user profiles are persisted in MongoDB, ensuring a seamless experience across sessions.

    On the frontend, Chat Buddy uses React with Vite for fast performance, styled with TailwindCSS and DaisyUI to support over 30 dynamic themes. Global state is managed through Zustand, and API communication is handled via Axios. The project is fully deployed using Render, with assets optionally served via Cloudinary. Designed to demonstrate full-stack capabilities and clean architecture, Chat Buddy serves as a polished, production-ready portfolio piece that highlights real-world development skills.`,
    github: 'https://github.com/davidalfarero/chat-app',
    demo: 'https://chat-app-ke5h.onrender.com/',
  },

  {
    image: [
      '/dental-management-system/dental_app(1).png',
      '/dental-management-system/dental_app(2).png',
      '/dental-management-system/dental_app(3).png',
      '/dental-management-system/dental_app(4).png',
    ],
    Icon: [ReactIcon, NodeIcon, ExpressIcon, BrevoIcon, TawilwindIcon, DaisyIcon],
    tags: ['React', 'Nodejs', 'press', 'Brevo', 'TailwindCSS', 'DaisyUI'],
    title: 'Dental Management System 🦷',
    description:
      'Manage dental clinic data and accept guest inquiries online.',
    details: `The Dental Management System is a streamlined web application built to centralize and simplify essential clinic operations. It focuses on managing core information such as clinic details, dentist profiles, and staff records in an organized, easy-to-navigate dashboard. Designed with simplicity and clarity in mind, the system allows clinic administrators to view, update, and maintain data efficiently without unnecessary complexity.

    For potential patients, the system includes a public-facing feature where guests can submit appointment requests or general inquiries. This ensures a smooth communication channel between the clinic and its clients without requiring logins or sign-ups. While the app keeps features minimal and focused, it lays the foundation for future enhancements such as appointment scheduling or patient tracking. It's a practical tool for small to mid-sized dental practices seeking a clean, functional way to manage internal information and receive client requests online.`,
    github: 'https://github.com/davidalfarero/dental-management-system',
    demo: 'https://dental-clinic-8503.onrender.com/',
  },
];
