# Web3 Portfolio Generator Telegram Bot

A simple Telegram bot that collects Web3 developer info and generates a portfolio page hosted on Firebase.

## Features
- Node.js + Telegraf.js bot
- Firebase Firestore for storage
- HTML portfolio generation
- Firebase Hosting deployment

## Setup
1. Clone the repo
2. Fill out `.env` using `.env.example`
3. Install dependencies:
```bash
npm install
```
4. Start the bot:
```bash
npm start
```
5. Deploy `public` folder to Firebase Hosting:
```bash
firebase deploy
```

## Commands
- `/start` — Welcome message
- `/submit` — Generates portfolio and sends link

## Example Portfolio Output
`https://yourdomain.web.app/123456789.html`