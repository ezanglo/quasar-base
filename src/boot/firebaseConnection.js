import firebaseServices from '../services/firebase'

export default async () => {
  console.log(process.env.QENV)
  const app = firebaseServices.fBInit(process.env.QENV.FIREBASE_CONFIG)

  // Validation that our service structure is working
  // with an initialize Firebase application and auth instance.
  console.log('Firebase App Instantiation:', app)
  console.log('Firebase Auth Module:', firebaseServices.auth())
}
