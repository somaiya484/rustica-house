import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white mt-16">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
                {/* Contact Section */}
                <div className=" bg-[#1F2937] py-16 text-right pr-20">
                    <div className='text-center'>
                    <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                  
                </div>

                {/* Follow Us Section */}
                <div className="bg-[#111827] py-16 pl-20">
                    <h3 className="text-lg font-semibold mb-4">Follow US</h3>
                    <p className="mb-4">Join us on social media</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <p className="text-center py-4 text-gray-400">
                    Copyright © CulinaryCloud. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
