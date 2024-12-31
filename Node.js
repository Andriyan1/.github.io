app.get('/search', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter q is required' });
  }

  // Логіка для обробки запиту за query.q
  const results = [
    { name: 'Apple' },
    { name: 'Orange' },
    { name: 'Banana' }
  ];

  res.json(results);
});
