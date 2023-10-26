const express = require('express');
const cors = require('cors');
const axios = require("axios");

const url = `https://api.sendblue.co/api/send-message`;
const port = 9000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/receiveMessage', (req, res) => {
    console.log(req.headers,req.body);
    console.log(req)
     axios
        .post(
            url,
            {
                number: "+918368962485",
                content: "Hello world!",
            },
            {
                headers: {
                    "sb-api-key-id": "1a06e1b4bf99aaf7f406242a14e20c52",
                    "sb-api-secret-key": "bb93482e564390d8689b06d4c4e1ef59",
                    "content-type": "application/json",
                },
            }
        )
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    res.json({ status: 'ok' });
});
app.use('/postMessage', (req, res) => {
    axios
        .post(
            url,
            {
                number: "+918368962485",
                content: "Hello world!",
                send_style: "invisible",
                media_url: "https://picsum.photos/200/300.jpg",
                status_callback: "https://example.com/message-status/1234abcd",
            },
            {
                headers: {
                    "sb-api-key-id": "1a06e1b4bf99aaf7f406242a14e20c52",
                    "sb-api-secret-key": "bb93482e564390d8689b06d4c4e1ef59",
                    "content-type": "application/json",
                },
            }
        )
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    res.end('ok');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err, 'err occurred');
    }
    else {
        console.log('server up and running on port ', port);
    }
})


