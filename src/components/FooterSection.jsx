import { Mail, Phone, SquareChevronUp } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const FooterSection = () => {
  const iconClass = "w-5 h-5 text-white";

  return (
    <footer className="bg-base-300 p-6 w-full">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-between">

        {/* Logo */}
        <div className="space-y-2">
          <a href='#home' className="text-lg flex items-center gap-2">
            <div className="avatar">
              <div className="w-10">
                <img src="/logo.svg" alt="Logo" />
              </div>
            </div>
            <span className='text-sm text-primary font-black'>avid Alfarero</span>
          </a>
          <p className="w-[200px] text-base-content/60 text-xs">Turning code into conversations, one project at a time.</p>
        </div>

        <div className="md:hidden w-full border-1 border-base-content/20 my-8"></div>

        <div className="text-center">
          <p className="font-semibold mb-4 text-sm">Quick Links</p>
          <ul className="text-base-content/60 text-xs">
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#about" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#projects" className="hover:underline">Projects</a></li>
            <li className="mb-2"><a href="#skills" className="hover:underline">Skills</a></li>
          </ul>
        </div>

        <div className="md:hidden w-full border-1 border-base-content/20 my-8"></div>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-sm mb-2">Get In Touch</p>
            <div className="flex gap-2 mb-2">
              <Phone className="size-4 text-primary" />
              <p className="text-base-content/60 text-xs">+639-693-662-932</p>
            </div>
            <div className="flex gap-2">
              <Mail className="size-4 text-primary" />
              <p className="text-base-content/60 text-xs">david.alfarero@gmail.com</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm mb-2">Social Links</p>
            <div className="flex gap-3 items-center">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full flex items-center justify-center w-10 h-10"
                aria-label="GitHub"
              >
                <FaGithub className={`${iconClass} text-black`} />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-2 rounded-full flex items-center justify-center w-10 h-10"
                aria-label="LinkedIn"
              >
                <FaLinkedin className={iconClass} />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full flex items-center justify-center w-10 h-10"
                aria-label="Upwork"
              >
                <FaUpwork className={iconClass} />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-2 rounded-full flex items-center justify-center w-10 h-10"
                aria-label="Facebook"
              >
                <FaFacebook className={iconClass} />
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-4xl mx-auto border-1 border-base-content/20 my-8"></div>

      <div className="max-w-4xl mx-auto flex justify-between items-center gap-4">
        <p className="text-base-content/60 text-sm font-semibold">@ 2025. All Rights Reserved.</p>

        <div className="cursor-pointer p-2 rounded-xl hover:bg-base-200 transition-colors">
          <a href="#home"><SquareChevronUp className="size-5 text-primary" /></a>
        </div>

        <div className="flex gap-4">
          <p className="text-base-content/60 text-xs">Terms of Use</p>
          <p className="text-base-content/60 text-xs">Privacy Policy</p>
        </div>
      </div>

    </footer>
  );
};
export default FooterSection;