const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const mailjet_apikey_public = process.env.MAILJET_APIKEY_PUBLIC;
const mailjet_apikey_private = process.env.MAILJET_APIKEY_PRIVATE;
const bcc_email = process.env.BCC_EMAIL;
const bcc_name = process.env.BCC_NAME;

const mailjet = require ('node-mailjet').connect(mailjet_apikey_public, mailjet_apikey_private);

var app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/api/healthcheck", (req, res) => {
	res.json({"status": "healthy"});
});

app.post("/api/send_email", (req, res) => {
	console.log(`Incoming request body: ${req.body}`);
	var post_body = {
			"Messages":[
				{
					"From": {
						"Email": "sitemaster@ihselectric.ca",
						"Name": "IHS Electric"
					},
					"To": [
						{
							"Email": "sitemaster@ihselectric.ca",
							"Name": "IHS Electric"
						},
					],
					"BCC": [
						{
							"Email": bcc_email,
							"Name": bcc_name
						}
					],
					"TemplateID": 3850008,
					"TemplateLanguage": true,
					"Subject": `[ihselectric.ca] ${req.body.subject}`,
					"Variables": {
						"message": req.body.message,
						"sender_name": req.body.sender_name,
						"sender_email": req.body.sender_email,
						"sender_phone_number": req.body.sender_phone_number
					}
				}
			]
		}

	if (req.body.copy_sender === true) {
		post_body["Messages"][0]["CC"] = [{"Email": req.body.sender_email, "Name": req.body.sender_name}];
	};

	const request = mailjet
		.post("send", {'version': 'v3.1'})
		.request(post_body)
	request
		.then((result) => {
			console.log(result.response.statusCode, result.response.text);
			res.json(result.response.statusCode);
		})
		.catch((err) => {
			console.log(err.statusCode);
			res.json(err.statusCode);
		})
});
