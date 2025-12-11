import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 60px 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  color: #282c34;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #61dafb;
  color: #282c34;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send formData to a backend service
    // like Formspree, Netlify Forms, or a custom API endpoint here.
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! (Check console for data)');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <ContactWrapper>
      <Title>Get In Touch</Title>
      <p>I'm available for freelance work and collaborations. Send me a message!</p>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactWrapper>
  );
}

export default Contact;