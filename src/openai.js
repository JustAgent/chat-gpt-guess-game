require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function get(prompt, maxTokens = 100, temperature) {
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createCompletion({
      model: "text-curie-001",
      prompt: prompt,
      temperature: temperature,
      max_tokens: maxTokens,
    });
    const res = response.data.choices[0].text;
    return res;
  } catch (error) {
    console.log(err);
  }
}
