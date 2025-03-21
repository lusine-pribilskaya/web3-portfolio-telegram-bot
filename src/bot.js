import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { initFirebase } from './utils/firebase.js';
import { handleStart } from './commands/start.js';
import { handleSubmit } from './commands/submit.js';

dotenv.config();

initFirebase();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(handleStart);
bot.command('submit', handleSubmit);

bot.launch();
console.log('Bot is running...');