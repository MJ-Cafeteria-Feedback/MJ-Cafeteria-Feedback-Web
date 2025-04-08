export const getGPTQuestion = async (menuName: string): Promise<string> => {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 대기

	const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
	const response = await fetch("https://api.openai.com/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
			"OpenAI-Project": "proj_GqFQUyvIEXk1yOB6VnpSFAWH",
		},
		body: JSON.stringify({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content: `${menuName}에 대해 사용자에게 물어볼 창의적인 질문 하나를 만들어줘.`,
				},
			],
			max_tokens: 60,
		}),
	});

	if (!response.ok) {
		const error = await response.json();
		console.error("GPT 요청 에러:", error);
		throw new Error("GPT 요청 실패");
	}

	const data = await response.json();
	return data.choices?.[0]?.message?.content?.trim() || "질문 생성 실패";
};
