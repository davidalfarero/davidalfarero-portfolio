export const MongoDBIcon = ({ fill }) => (
  <svg fill={fill} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>MongoDB</title>
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
  </svg>
);

export const ExpressIcon = ({ fill }) => (
  <svg fill={fill} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Express</title>
    <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
  </svg>
);



// === PROJECT DATA ===
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
    Icon: [
      {
        name: 'MongoDB',
        color: '#47A248',
        icon: MongoDBIcon,
      },
      {
        name: 'Express',
        color: '#000000',
        icon: ExpressIcon,
      },
    ],
    tags: ['MongoDB', 'Express'],
    title: 'Chat Buddy 💬',
    description:
      'A full-stack real-time messaging app built with the MERN stack, featuring email verification, live chat with Socket.IO, and dynamic theme support.',
    details: `Chat Buddy is a real-time messaging platform built using the powerful MERN stack (MongoDB, Express, React, Node.js). It features secure user authentication, including email verification via Brevo, password resets, and JWT-based route protection. Real-time chat functionality is powered by Socket.IO, complete with typing indicators and instant message updates. Chat data and user profiles are persisted in MongoDB, ensuring a seamless experience across sessions. On the frontend, Chat Buddy uses React with Vite for fast performance, styled with TailwindCSS and DaisyUI to support over 30 dynamic themes. Global state is managed through Zustand, and API communication is handled via Axios.The project is fully deployed using Render, with assets optionally served via Cloudinary. Designed to demonstrate full-stack capabilities and clean architecture, Chat Buddy serves as a polished, production-ready portfolio piece that highlights real-world development skills.`,
    github: 'https://github.com/davidalfarero/chat-app',
    demo: 'https://chat-app-ke5h.onrender.com/',
  },
];
