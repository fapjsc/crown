firebase google oauth

firebase/utils.js

    import firebase from 'firebase/app';
    import 'firebase/firestore';
    import 'firebase/auth';

      const firebaseConfig = {
        //...
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
