const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/api/v1/chat', (req, res) => {
    // messages가 배열인지 확인
    const messages = req.body.messages;
    if (Array.isArray(messages) && messages.length > 0) {
        res.send({
            messages: {
                role: "assistant",
                content: "I'm Good! " + messages.pop().content
            },
            ref: [
                "www.hansung/article/123",
                "https://www.hansung.ac.kr/bbs/hansung/143/264590/artclView.do?layout=unknown"
            ]
        });
    } else {
        // 오류 메시지 응답
        res.status(400).send({
            error: "Invalid request format. 'messages' must be a non-empty array."
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});