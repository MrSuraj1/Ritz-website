import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full text-white flex h-[700px]">

      {/* LEFT DARK PANEL */}
      <div className="bg-[#08142c] text-lg w-[350px] px-14 py-20">
        <img src="https://ritzmediaworld.com/rmw-final-logo.png" alt="logo" className="w-24 mb-6" />

        <h3 className="font-semibold mb-2">Address</h3>
        <p className="text-lg text-gray-300 leading-6 mb-4">
          402 - 404,<br />
          4th floor Corporate Park,<br />
          Tower A1 Sector 142,<br />
          Noida
        </p>

        <h3 className="font-semibold mb-1 text-lg">Email us</h3>
        <p className="flex items-center gap-2 text-lg  text-gray-300 mb-4">
          <MdEmail /> info@ritzmediaworld.com
        </p>

        <h3 className="font-semibold mb-1 text-lg">Call us</h3>
        <p className="flex items-center gap-2 text-lg text-gray-300">
          <MdPhone /> +91 9220516777
        </p>
        <p className="flex items-center gap-2 text-lg text-gray-300">
          <MdPhone /> +91 7290002168
        </p>
      </div>

      {/* DIVIDER */}
      <div className="w-[1px] bg-gray-600"></div>

      {/* RIGHT MAIN SECTION */}
      <div className="bg-[#0d1f4a] flex-1 px-10 py-10">

        {/* TOP TEXT */}
        <p className="text-gray-300 text-lg max-w-4xl mb-8 leading-6">
          Accelerate your journey to success with result-oriented solutions for Digital Advertising,
          Social Media Management, SEO, and Compelling Content backed by more than 17 years of advertising wisdom with a wide array of clients spanning across all industries throughout the Indian subcontinent.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Home</li>
              <li>• About</li>
              <li>• Our Work</li>
              <li>• Blogs</li>
              <li>• Web Stories</li>
              <li>• Contact</li>
              <li>• Career</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Digital Marketing</li>
              <li>• Print Advertising</li>
              <li>• Radio Advertising</li>
              <li>• Creative Services</li>
              <li>• Content Marketing</li>
              <li>• Web Development</li>
              <li>• Celebrity Endorsements</li>
              <li>• Influencer Marketing</li>
            </ul>
          </div>

          {/* GOOGLE REVIEW + SOCIAL */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="data:image/png;base64,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" 
              className="w-10 mix-blend-multiply" alt="google" />
              <div>
                <p className="text-lg">Google reviews</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">4.9</span>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <div key={i} className="bg-black p-2 rounded">
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW (NO BORDER!) */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">

          
          {/* COPYRIGHT */}
          <p className="text-lg text-left text-gray-400">
            © 2026 <span className="text-white font-black"> RITZ Media World.</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}