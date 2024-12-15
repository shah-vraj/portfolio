import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lastSubmittedData && JSON.stringify(lastSubmittedData) === JSON.stringify(formData)) {
      alert("Please change your message or email before resending.");
      return;
    }

    emailjs.send('service_ueyeq0t', 'template_nlpsxmf', formData, '_mrwQrIKrjSK8f89n')
      .then((response) => {
        console.log('Message sent successfully!', response.status, response.text);
        setIsSubmitted(true);
        setLastSubmittedData(formData);
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('Failed to send message. Error:', error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact"
             className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex justify-center">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mt-6">Contact</h2>
        <p className="text-lg mt-4 text-center">
          Let's get in touch! Feel free to reach out.
        </p>
        <div className="flex justify-center mt-6">
          <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-4">
            {isSubmitted &&
              <p className="text-green-500 dark:text-green-400 text-center mb-4">Message sent successfully!</p>}
            <div className="mb-4 space-y-2">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
              <input
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors duration-300"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 space-y-2">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
              <input
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors duration-300"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 space-y-2">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="message">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors duration-300"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 text-white font-bold py-4 px-4 rounded transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
