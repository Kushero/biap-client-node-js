import admin from "firebase-admin";

/**
 * initialize firebase
 */
const initializeFirebase = () => {
  console.log("Initializing Firebase");
  console.log(
    "Firebase Admin Service Account:",
    process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT
  );
  admin.initializeApp({
    credential: admin.credential.cert(
      process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT
    ),
  });
};

export default initializeFirebase;
