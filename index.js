const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/api/v1/chat', (req, res) => {
    res.send({
        messages : {
            role : "assistant",
            content : "I'm Good! " + req.body.messages.pop().content
        },
        ref : [
            "www.hansung/article/123",
            "https://www.hansung.ac.kr/bbs/hansung/143/264590/artclView.do?layout=unknown"
        ]
    });
});

app.listen(port);