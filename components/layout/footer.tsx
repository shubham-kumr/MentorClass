import Link from 'next/link';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-violet-700 text-white backdrop-blur-lg py-10 mt-16 shadow-lg w-11/12 mx-auto rounded-t-3xl">      
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white relative z-10 mx-auto justify-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">MentorClass</h2>
            <p className="mt-2 text-sm">© 2024 MentorClass, Inc.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Learn</h3>
            <ul className="mt-2 space-y-1">
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">Mentorship Programs</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">Workshops</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">Resources</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-1">
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">About Us</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">Mentors</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">Careers</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">Blog</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-2 space-y-1">
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">Help Center</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">Privacy Policy</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">Terms of Service</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500">Contact Us</a></Link></li>
            </ul>
          </div>
        </div>
        <div className='lg:text-[140px] md:text-[100px] sm:text-[90px] text-[60px] font-semibold mx-auto text-center p-4 tracking-tighter'>
          <h1>MentorClass</h1>
        </div>

        {/* <div className="mt-0 flex space-x-10 text-white justify-center">
          <a href="#"><FaYoutube className="w-10 h-10 hover:text-blue-500" /></a>
          <a href="#"><FaTwitter className="w-10 h-10 hover:text-blue-500" /></a>
          <a href="#"><FaInstagram className="w-10 h-10 hover:text-blue-500" /></a>
          <a href="#"><FaFacebook className="w-10 h-10 hover:text-blue-500" /></a>
        </div> */}
      </div>
    </footer>
  );
}
