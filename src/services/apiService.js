const API_URL = 'https://your-api-endpoint.com';

const apiService = {
  calculateLoan: async ({ amount, interest, term }) => {
    const response = await fetch(`${API_URL}/calculate-loan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, interest, term }),
    });
    if (!response.ok) throw new Error('Failed to calculate loan');
    return response.json();
  },
};

export default apiService;
