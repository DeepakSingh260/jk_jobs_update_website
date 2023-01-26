import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_qTCLf2Mh2O7UQEzVjBu9gkDcv_R2uik",
  authDomain: "jkjobupdate-9b085.firebaseapp.com",
  databaseURL: "https://jkjobupdate-9b085-default-rtdb.firebaseio.com",
  projectId: "jkjobupdate-9b085",
  storageBucket: "jkjobupdate-9b085.appspot.com",
  messagingSenderId: "412534451893",
  appId: "1:412534451893:web:b85e78b525a330b5d458fc",
  measurementId: "G-RQ8XCQDYSM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;