import React from 'react';
import { z } from 'zod';
import { Form, ThemeProvider, FormConfig } from './lib';

const formConfig: FormConfig = {
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'John',
      validation: z.string().min(2, 'First name must be at least 2 characters'),
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Doe',
      validation: z.string().min(2, 'Last name must be at least 2 characters'),
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'john@example.com',
      validation: z.string().email('Invalid email address'),
      fullWidth: true,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Your message here...',
      validation: z.string().min(10, 'Message must be at least 10 characters'),
      fullWidth: true,
    },
  ],
  onSubmit: async (data) => {
    console.log('Form submitted:', data);
  },
  onSuccess: (data) => {
    console.log('Success:', data);
    alert('Form submitted successfully!');
  },
  onError: (error) => {
    console.error('Error:', error);
    alert('An error occurred while submitting the form.');
  },
};

const customTheme = {
  input: {
    base: 'block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-200',
  },
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Form Engine Demo</h1>
        <ThemeProvider theme={customTheme}>
          <Form config={formConfig} />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;