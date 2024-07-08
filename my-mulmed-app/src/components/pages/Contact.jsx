import React from 'react';

const Contact = () => (
  <div className="container mx-auto py-8">
    <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
    <p className='mb-10'>If you have any questions or feedback, feel free to reach out to us. We'd love to hear from you!</p>
    <form className="bg-blue-100 p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-bold mb-2">Name:</label>
        <input type="text" id="name" className="w-full p-2 border border-blue-300 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold mb-2">Email:</label>
        <input type="email" id="email" className="w-full p-2 border border-blue-300 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-bold mb-2">Message:</label>
        <textarea id="message" className="w-full p-2 border border-blue-300 rounded"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  </div>
);

export default Contact;
