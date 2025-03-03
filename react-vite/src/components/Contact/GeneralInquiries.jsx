import { useState } from 'react';

function GeneralInquiries() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Inquiry submitted successfully');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to submit inquiry');
    }
  };

  return (
    <section className="mb-8 pt-24">
      <h2 className="text-3xl font-bold mb-4">General Inquiries</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
      </form>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-2">ITC Team and Leadership Contact Information</h3>
        <p className="text-lg">For specific questions about ITC programs, please contact our team.</p>
      </div>
    </section>
  );
}

export default GeneralInquiries;
