// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCuBisPWcMafRKJL7MM9UZ8Pw4ox3UiXQ',
  authDomain: 'chureads-df883.firebaseapp.com',
  projectId: 'chureads-df883',
  storageBucket: 'chureads-df883.appspot.com',
  messagingSenderId: '1027986528597',
  appId: '1:1027986528597:web:0afc8487baab3f4a8cf7dc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 우리 프로젝트에 대한 인증 서비스를 이용하겠다는 의미
export const auth = getAuth(app);
