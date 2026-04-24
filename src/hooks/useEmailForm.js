import { useState } from 'react';

/**
 * Hook para gerir o estado e envio de formulários de email.
 * @param {string} endpoint - URL do backend para envio de email.
 * @returns {Object} - Estado do formulário e funções de manipulação.
 */
export const useEmailForm = (endpoint) => {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({});
      } else {
        throw new Error('Falha ao enviar email');
      }
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  return {
    formData,
    status,
    error,
    handleChange,
    handleSubmit,
    setFormData
  };
};
