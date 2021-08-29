firebase google oauth

firebase/utils.js

    import firebase from 'firebase/app';
    import 'firebase/firestore';
    import 'firebase/auth';

      const firebaseConfig = {
        apiKey: 'AIzaSyAUBWrFOC_sXO-GavytWy4esBsYW9vJyD0',
        authDomain: 'crown-96772.firebaseapp.com',
        projectId: 'crown-96772',
        storageBucket: 'crown-96772.appspot.com',
        messagingSenderId: '816820484369',
        appId: '1:816820484369:web:dd015b5ee073f494af34b0',
      };

      firebase.initializeApp(firebaseConfig);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      export const provider = new firebase.auth.GoogleAuthProvider();
      export default firebase;

/signin/SignInForm.js
import { auth, provider } from '../../firebase/utils';

    // Handler
    const signInWithGoogle = () => {
      auth.signInWithPopup(provider).catch(alert);
    };


    // JSX
    <Button type="button" onClick={signInWithGoogle}>
        Sign with Google
    </Button>
