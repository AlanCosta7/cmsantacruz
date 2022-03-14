import firebase from 'firebase/app'
import 'firebase/analytics'
import "firebase/performance"


const firebaseConfig = {
  apiKey: "AIzaSyATf0nL0Zj2CfC4LnQJ2cGDUzwyiWQepUo",
  authDomain: "dr-ricardosouza.firebaseapp.com",
  projectId: "dr-ricardosouza",
  storageBucket: "dr-ricardosouza.appspot.com",
  messagingSenderId: "294530344296",
  appId: "1:294530344296:web:558091a8969ed27254e2dd",
  measurementId: "G-22VHFT8GKY"
};
// initialize Firebase from settings
firebase.initializeApp(firebaseConfig);


const $analytics = firebase.analytics()
const $performance = firebase.performance();

export default ({Vue}) => {
  Vue.prototype.$analytics = $analytics;
  Vue.prototype.$performance = $performance;
};

export { $analytics }
