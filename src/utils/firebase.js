import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

export function initFirebase() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      })
    });
  }
}

export async function saveUserData(userId, data) {
  const db = admin.firestore();
  await db.collection('portfolios').doc(userId).set(data);
}