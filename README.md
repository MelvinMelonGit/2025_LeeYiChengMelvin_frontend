# Coin Denomination Calculator App

# Frontend - Vite React App

This project contains a Vite-based React frontend application and served by Nginx inside a Docker container.

---

## Prerequisites

- Docker installed on your machine

---

## Clone Git Repository Into Local Machine
Clone this git repository into your local machine, into your preferred directory:

```bash
git clone https://github.com/MelvinMelonGit/2025_LeeYiChengMelvin_frontend.git
```

---

## Build Docker Image

To build the Docker image, run the following command in the root directory of the frontend project (where the Dockerfile is):

```bash
docker build -t coin-frontend .
```
---

## Run The Container

Run the container and map it on port 3000 on your local machine:

```bash
docker run -d -p 3000:80 --name coin-frontend-container coin-frontend
```

---

## Access The App

Open your web browser and visit:

```bash
http://localhost:3000
```

---

## Rebuild After Changes

If you modify your frontend source code, rebuild and restart the container:

```bash
docker build -t coin-frontend .
docker stop coin-frontend-container
docker rm coin-frontend-container
docker run -d -p 3000:80 --name coin-frontend-container coin-frontend
```

---

## Stop and Remove Container

To stop and remove the running container:

```bash
docker stop coin-frontend-container
docker rm coin-frontend-container
```