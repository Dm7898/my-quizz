import { openDB } from "idb";

const DB_NAME = "quizApp";
const STORE_NAME = "attempts";

// Initialize IndexedDB
const initDB = async () => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "attemptId",
          autoIncrement: true,
        });
      }
    },
  });
  return db;
};

export const saveAttempt = async (attempt) => {
  const db = await initDB();
  const existingAttempts = await db.getAll(STORE_NAME);

  // Check if the same attempt is already saved
  if (!existingAttempts.some((a) => a.attemptId === attempt.attemptId)) {
    await db.add(STORE_NAME, attempt);
  }
};

// Get all attempts
export const getAttempts = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};
