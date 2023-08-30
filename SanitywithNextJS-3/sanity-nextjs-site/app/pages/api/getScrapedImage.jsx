import fetch from 'isomorphic-unfetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('http://localhost:8000/scrape'); // Replace with your Express.js server URL
    const blob = await response.blob();
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(blob);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the image.' });
  }
}
