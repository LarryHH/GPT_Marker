// import axios from 'axios';
// import { NextApiRequest, NextApiResponse } from 'next';

// // eslint-disable-next-line import/no-anonymous-default-export
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     const { apiKey, prompt } = req.body;

//     // Set up headers for the OpenAI API
//     const headers = {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${apiKey}`,
//     };

//     // Replace with the appropriate GPT-4 API endpoint
//     const gpt4ApiUrl = 'https://api.openai.com/v1/...';

//     // Set up the payload for the GPT-4 API
//     const payload = {
//       // Configure the payload as needed for GPT-4 API
//     };

//     try {
//       const response = await axios.post(gpt4ApiUrl, payload, { headers });
//       const generated_text = response.data.choices[0].text.trim();
//       res.status(200).json({ generated_text });
//     } catch (error) {
//       console.error('Error generating response:', error);
//       res.status(500).json({ error: 'Error generating response' });
//     }
//   }
// }