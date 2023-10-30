const express = require('express');
const OpenAIApi = require('openai');

const app = express();
const openai = new OpenAIApi({ key: 'YOUR_OPENAI_API_KEY' });

// Sirve tu aplicación Angular
app.use(express.static('path-to-your-angular-dist-folder'));

// Endpoint para hacer la consulta a OpenAI
app.post('/ask-openai', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.complete({
      engine: 'davinci',
      prompt: prompt
    });
    
    res.json(response.data.choices[0].text);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
