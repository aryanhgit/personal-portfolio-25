import React from 'react';

const Contact = () => {
    return (
        <div className="flex text-sm text-gray-800 bg-white shadow-sm gap-4 p-5 px-10 m-4">
            <div className="flex-none items-left gap-4 px-25 py-10 w-200">
                <div className="bg-white rounded-lg">
                    <h2 className="text-2xl mb-3">Contact</h2>

                    <form action="#" method="POST">
                        <div className="mb-3">
                            <label htmlFor="name" className="sr-only">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200" />
                        </div>  

                        <div className="mb-3">
                            <label htmlFor="email" className="sr-only">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="sr-only">Your Message</label>
                            <textarea id="message" name="message" rows="6" placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 resize-none"></textarea>
                        </div>

                        <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-gray-500">
                    <p>Or email me directly at <a href="mailto:aryan01eio@gmail.com" className="text-blue-600 hover:underline">hi@aryanraj.me</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;