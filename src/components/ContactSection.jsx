import emailjs from '@emailjs/browser';
import { LoaderCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useRef, useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { toast } from 'react-toastify';

export const ContactSection = () => {
  const form = useRef();
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);

    emailjs.sendForm(
      'service_2mjf153',
      'template_pzk56bh',
      form.current,
      'blK9AkpoRTAL_qOwb'
    )
      .then((result) => {
        toast.success('Message sent!', {
          style: {
            background: '#1e1e2f',
            color: '#f4f4f4',
            fontFamily: 'Poppins, sans-serif',
          },
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
        form.current.reset();
        setIsloading(false);
      })
      .catch((error) => {
        toast.error('Failed to send message', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      });
  };

  return (
    <section id="contact" className="p-2 bg-base-100">
      <div className="section-container">
        <h2 className="section-title">Connect With <span className="text-primary">Me</span></h2>
        <p className="section-description mb-10 md:mb-20">Got a project or idea you'd like to share? I'd love to hear from you and see how we can collaborate.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col justify-between items-start">
            <div>
              <h3 className="text-center text-xl text-base-content font-bold mb-5">Contact Information</h3>
              <div className="flex items-center justify-start space-x-5 mb-5">
                <div className="p-3 rounded-[50%] bg-card">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-base-content">Email</p>
                  <p className="text-base-content">david.alfarero@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center justify-start space-x-5 mb-5">
                <div className="p-3 rounded-[50%] bg-card">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-base-content">Phone</p>
                  <p className="text-base-content">&#40;+63&#41; 969-3662-932</p>
                </div>
              </div>
              <div className="flex items-center justify-start space-x-5 mb-5">
                <div className="p-3 rounded-[50%] bg-card">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-base-content">Location</p>
                  <p className="text-base-content">San Pablo City, Laguna, Philippines</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-blue-500 p-2 rounded-3xl">
                <a href="" target="_blank"><FaLinkedin size={30} /></a>
              </div>

              <div className="bg-green-500 p-2 rounded-3xl">
                <a href="" target="_blank"><FaUpwork size={30} /></a>
              </div>

              <div className="bg-blue-500 p-2 rounded-3xl">
                <a href="" target="_blank"><FaFacebook size={30} /></a>
              </div>

              <div className="bg-base-300 p-2 rounded-3xl">
                <a href="" target="_blank"><FaGithub size={30} /></a>
              </div>
            </div>
          </div>

          <div
            className="p-4 sm:p-6 md:p-8 bg-card w-full rounded max-w-[450px]"
          >
            <h3 className="text-center text-base-content text-xl font-bold mb-5">Send a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col justify-between">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
                autoComplete="off"
                className="p-2 rounded bg-input placeholder-base-content/50 border border-base-content/50 mb-5 focus:outline-none focus:border-primary"
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@mail.com"
                required
                autoComplete="off"
                className="p-2 rounded bg-input placeholder-base-content/50 border border-base-content/50 mb-5 focus:outline-none focus:border-primary"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                className="p-2 rounded bg-input placeholder-base-content/50 border border-base-content/50 mb-5 focus:outline-none focus:border-primary resize-none "
              ></textarea>
              <button
                type="submit"
                className={`w-full bg-primary text-white p-2 rounded font-medium overflow-hidden cursor-pointer
                  ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-primary'}
                  `}
                disabled={isLoading}
              >
                {isLoading ? <LoaderCircle className='animate-spin mx-auto' /> : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};