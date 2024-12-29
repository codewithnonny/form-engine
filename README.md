# Form Engine SDK

A flexible form engine for React applications with theme support and validation.

## Installation

```bash
npm install @yourusername/form-engine-sdk
```

## Usage

```tsx
import { Form, ThemeProvider, FormConfig } from '@yourusername/form-engine-sdk';
import { z } from 'zod';

const formConfig: FormConfig = {
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      validation: z.string().email(),
      fullWidth: true
    }
  ],
  onSubmit: async (data) => {
    // Handle submission
  },
  onSuccess: (data) => {
    console.log('Success:', data);
  },
  onError: (error) => {
    console.error('Error:', error);
  }
};

function MyForm() {
  return (
    <ThemeProvider>
      <Form config={formConfig} />
    </ThemeProvider>
  );
}
```

## Features

- 🎨 Customizable theming
- ✅ Built-in validation with Zod
- 📱 Responsive layout
- 🔧 Multiple field types
- 🎯 Type-safe configurations

## Documentation

[Link to your documentation]

## License

MIT