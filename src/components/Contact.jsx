import React, { useState } from 'react';

const Contact = () => {
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setError(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('idle');
            setError('Failed to send message. Please try again later.');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex text-sm text-gray-800 bg-white shadow-sm gap-4 p-5 px-10 m-4">
                <div className="flex-none items-left gap-4 py-10 w-full md:w-200 px-5 md:px-25">
                    <div className="bg-white rounded-lg w-full">

                        <h2 className="text-2xl mb-3">Contact</h2>
                        <p className="text-sm text-blue my-4">
                            Thank you for reaching out! I will get back to you soon.
                        </p>
                        <div className="mt-8 text-gray-500">
                            <p>Or email me directly at <a href="mailto:aryan01eio@gmail.com" className="text-blue hover:underline underline-offset-4">hi@aryanraj.me</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex text-sm text-gray-800 bg-white shadow-sm gap-4 p-5 px-10 m-4">
            <div className="flex-none items-left gap-4 py-10 w-full md:w-200 px-5 md:px-25">
                <div className="bg-white rounded-lg w-full">
                    <h2 className="text-2xl mb-3">Contact</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue transition-colors duration-200" />
                        </div>

                        <div className="mb-3">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue transition-colors duration-200" />
                        </div>

                        <div className="mb-3">
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue transition-colors duration-200 resize-none" />
                        </div>

                        <button type="submit" className="bg-blue text-white px-3 py-2 rounded hover:bg-blue transition-colors duration-200" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {error && (
                            <div className="mt-2 text-red-500 text-sm">{error}</div>
                        )}
                    </form>
                </div>

                <div className="mt-8 text-gray-500">
                    <p>Or email me directly at <a href="mailto:aryan01eio@gmail.com" className="text-blue hover:underline underline-offset-4">hi@aryanraj.me</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
