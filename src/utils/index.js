import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc, updateDoc } from "@firebase/firestore";

export const addData = async (collectionName, docId, payload) => {
  let res = null;
  await setDoc(doc(db, collectionName, docId), payload)
    .then(() => {
      res = true;
    })
    .catch((err) => {
      res = false;
      console.log("===>>>err", err)
    });
  return res;
};

export const getData = async (collectionName, docId) => {
  let res = null;

  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    res = docSnap.data();
  } else {
    console.log("No such document!");
  }
  return res;
};

export const updateDocument = async (collectionName, docId, payload) => {
  const docRef = doc(db, collectionName, docId);
  let res = null;
  await updateDoc(docRef, payload)
    .then(() => {
      res = true;
    })
    .catch((err) => {
      res = false;
      console.log("===>>>err", err);
    });
  return res;
};
