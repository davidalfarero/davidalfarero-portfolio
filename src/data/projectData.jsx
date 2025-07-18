import { BrevoIcon, DaisyIcon, ExpoIcon, ExpressIcon, JWTIcon, MongoDBIcon, NodeIcon, ReactIcon, SocketIcon, TawilwindIcon } from "../components/TechIcons";

export const projectData = [
  {
    image: [
      '/chat_app/chatapp(1).webp',
      '/chat_app/chatapp-homepage.webp',
      '/chat_app/chatapp-homepage-darkmode.webp',
      '/chat_app/chatapp-homepage-aquamode.webp',
      '/chat_app/chatapp-homepage-synthwavemode.webp',
      '/chat_app/chatapp-loginpage.webp',
      '/chat_app/chatapp-signuppage.webp',
      '/chat_app/chatapp-verifyemail.webp',
      '/chat_app/chatapp-emailverified.webp',
      '/chat_app/chatapp-resetpassword.webp',
      '/chat_app/chatapp-resetsuccess.webp',
      '/chat_app/chatapp-settingspage.webp',
      '/chat_app/chatapp-profilepage.webp',
    ],
    Icon: [MongoDBIcon, ExpressIcon, ReactIcon, NodeIcon, BrevoIcon, JWTIcon, SocketIcon, TawilwindIcon, DaisyIcon],
    tags: ['Mongo', 'press', 'React', 'Nodejs', 'Brevo', 'JWT', 'Socket.io', 'TailwindCSS', 'DaisyUI'],
    title: 'Chat Buddy',
    description:
      'A full-stack real-time messaging app built with the MERN stack.',
    details: `Chat Buddy is a real-time messaging platform built using the powerful MERN stack (MongoDB, Express, React, Node.js). It features secure user authentication, including email verification via Brevo, password resets, and JWT-based route protection. Real-time chat functionality is powered by Socket.IO, complete with typing indicators and instant message updates. Chat data and user profiles are persisted in MongoDB, ensuring a seamless experience across sessions.

    On the frontend, Chat Buddy uses React with Vite for fast performance, styled with TailwindCSS and DaisyUI to support over 30 dynamic themes. Global state is managed through Zustand, and API communication is handled via Axios. The project is fully deployed using Render, with assets optionally served via Cloudinary. Designed to demonstrate full-stack capabilities and clean architecture, Chat Buddy serves as a polished, production-ready portfolio piece that highlights real-world development skills.`,
    github: 'https://github.com/davidalfarero/chat-app',
    demo: 'https://chat-app-ke5h.onrender.com/',
    buttonType: "demo",
    previewButton: "both",
  },

  {
    image: [
      '/dental_app/dental_app(1).webp',
      '/dental_app/dental_app(2).webp',
      '/dental_app/dental_app(3).webp',
      '/dental_app/dental_app(4).webp',
      '/dental_app/dental_app(5).webp',
      '/dental_app/dental_app(6).webp',
      '/dental_app/dental_app(7).webp',
      '/dental_app/dental_app(8).webp',
    ],
    Icon: [ReactIcon, NodeIcon, ExpressIcon, BrevoIcon, TawilwindIcon, DaisyIcon],
    tags: ['React', 'Nodejs', 'press', 'Brevo', 'TailwindCSS', 'DaisyUI'],
    title: 'Dental Management System',
    description:
      'Manage dental clinic data and accept guest inquiries online.',
    details: `The Dental Management System is a streamlined web application built to centralize and simplify essential clinic operations. It focuses on managing core information such as clinic details, dentist profiles, and staff records in an organized, easy-to-navigate dashboard. Designed with simplicity and clarity in mind, the system allows clinic administrators to view, update, and maintain data efficiently without unnecessary complexity.

    For potential patients, the system includes a public-facing feature where guests can submit appointment requests or general inquiries. This ensures a smooth communication channel between the clinic and its clients without requiring logins or sign-ups. While the app keeps features minimal and focused, it lays the foundation for future enhancements such as appointment scheduling or patient tracking. It's a practical tool for small to mid-sized dental practices seeking a clean, functional way to manage internal information and receive client requests online.`,
    github: 'https://github.com/davidalfarero/dental-management-system',
    demo: 'https://dental-clinic-8503.onrender.com/',
    buttonType: "demo",
    previewButton: "both",
  },

  {
    image: [
      '/wallet_app/wallet_app(1).webp',
      '/wallet_app/wallet_app(2).webp',
    ],
    Icon: [NodeIcon, ExpressIcon, MongoDBIcon, ReactIcon, ExpoIcon],
    tags: ['Nodejs', 'press', 'Mongo', 'React Native', 'Expo'],
    title: 'Mobile Wallet',
    description:
      'A mobile app for tracking income and expenses with category selection, authentication, and real-time data syncing.',
    details: `Wallet App is a mobile expense tracker built with React Native and Expo, designed to help users manage their daily finances on the go. It features email authentication using Clerk, allowing users to securely create an account and manage their personal budget. The app supports a clean and intuitive transaction flow where users can quickly add or delete entries, each tagged with specific categories like Income, Food, Bills, Transport, Entertainment, Shopping, or Other. Every transaction includes a title, amount, category, and a timestamp to help users stay organized and aware of their spending habits.

    Behind the scenes, Wallet App connects to a server-powered MongoDB database, ensuring all transactions are saved in real-time and accessible across sessions. While charts and analytics aren’t included (yet), the app provides a detailed view of every logged transaction in a simple list format. With its minimalist design and efficient structure, Wallet App focuses on doing one thing well: helping users take full control of their money—without the clutter.`,
    github: 'https://github.com/davidalfarero/wallet-mobile',
    buttonType: "github",
    previewButton: "github",
  },
];
