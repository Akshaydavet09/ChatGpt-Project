import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const aiResponse = async function (msg) {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: msg }],
  });
  return completion.choices[0].message.content;
  // return aiResponse.choices[0].message.content;
}

export default aiResponse;


