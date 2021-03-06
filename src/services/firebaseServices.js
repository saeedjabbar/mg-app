import { firebase, FieldValue } from '../lib/firebaseConfig';

export async function doesUsernameExist(email) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('email', '==', email)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}