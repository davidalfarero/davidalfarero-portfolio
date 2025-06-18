import { BrevoIcon, DaisyIcon, ExpressIcon, JWTIcon, MongoDBIcon, NodeIcon, ReactIcon, SocketIcon, TawilwindIcon } from "../../icons/TechIcons";

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
      'A full-stack real-time messaging app built with the MERN stack, featuring email verification, live chat with Socket.IO, and dynamic theme support.',
    details: `Chat Buddy is a real-time messaging platform built using the powerful MERN stack (MongoDB, Express, React, Node.js). It features secure user authentication, including email verification via Brevo, password resets, and JWT-based route protection. Real-time chat functionality is powered by Socket.IO, complete with typing indicators and instant message updates. Chat data and user profiles are persisted in MongoDB, ensuring a seamless experience across sessions.

    On the frontend, Chat Buddy uses React with Vite for fast performance, styled with TailwindCSS and DaisyUI to support over 30 dynamic themes. Global state is managed through Zustand, and API communication is handled via Axios. The project is fully deployed using Render, with assets optionally served via Cloudinary. Designed to demonstrate full-stack capabilities and clean architecture, Chat Buddy serves as a polished, production-ready portfolio piece that highlights real-world development skills.`,
    github: 'https://github.com/davidalfarero/chat-app',
    demo: 'https://chat-app-ke5h.onrender.com/',
  },
];
