import { initializeApp} from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDF43Bk3CJQdiljqsuaOwgG3VtCe5crY7Y",
  authDomain: "byte-blaze-blog.firebaseapp.com",
  projectId: "byte-blaze-blog",
  storageBucket: "byte-blaze-blog.appspot.com",
  messagingSenderId: "585314519187",
  appId: "1:585314519187:web:4bcc6bb144e30f34d66566",
  measurementId: "G-PMJ708F59D"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProviter = new GithubAuthProvider()