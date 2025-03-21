import { saveUserData } from '../utils/firebase.js';
import { generateHTML } from '../utils/generateHTML.js';
import fs from 'fs';

export async function handleSubmit(ctx) {
  const userId = ctx.from.id.toString();
  const username = ctx.from.username || 'anonymous';
  const portfolioData = {
    name: username,
    skills: ['Solidity', 'Node.js', 'Web3'],
    projects: ['NFT Staking', 'Telegram Bot', 'dApp']
  };

  await saveUserData(userId, portfolioData);

  const html = generateHTML(portfolioData);
  fs.writeFileSync(`public/${userId}.html`, html);

  ctx.reply(`Your portfolio is ready: https://yourdomain.web.app/${userId}.html`);
}
