# ihselectric

This is the website for IHS Electric, a Stratford Ontario-based electrical company. A node server and MailJet integration allows customers to send emails to the company via a web-based form.

Email forwarding is set up via CloudFlare to enable employees to receive emails at their @ihselectric.ca emails. MailJet allows employees to send email using their @ihselectric.ca emails by hooking up SMTP to their primary email.


## Building and running

### Requirements

- [docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [a configured and running traefik container](https://doc.traefik.io/traefik/getting-started/quick-start/)
- `make`


### Installation and running

1. Define env variables for the frontend in a .env file (located in the root of this repository)

> .env
```bash
VUE_APP_RECAPTHCA_SITE_KEY
VUE_APP_BASE_URL
IHSELECTRIC_FRONTEND_IMAGE=ihselectric-front:latest
IHSELECTRIC_API_IMAGE=ihselectric-api:latest
IHSELECTRIC_SRV_BASE=/srv/ihselectric
```

The recaptcha key comes from [Google](https://www.google.com/recaptcha) (type v2 invisible). Make sure that your app's base URL is set as one of the valid domains for the key; localhost is fine for development.


2. Define env variables for the API in api/.env

> api/.env
```bash
MAILJET_APIKEY_PUBLIC
MAILJET_APIKEY_PRIVATE
```

These keys can be obtained from [MailJet](https://dev.mailjet.com/email/guides/) once you've signed up for an account, which offers (at the time of writing) 200 free emails/day or 6000/month.


3. Build frontend and API docker containers

```bash
make
```


4. Up the containers

```bash
docker-compose up -d
```


The website should be available at `${VUE_APP_BASE_URL}`. The API is available at `${VUE_APP_BASE_URL}/api`; try a `GET` on the `/api/healthcheck` endpoint.



## Development
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

### Compiles and minifies for production
```
npm run build
```

### Run unit tests
```
npm run test:unit
```

