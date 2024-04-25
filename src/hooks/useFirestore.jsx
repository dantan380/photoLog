import { useState, useEffect } from "react";
import { projFirestore } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const useFirestore = (kollection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //Collection reference
    const collectionRef = collection(projFirestore, kollection);

    //Collection query
    const q = query(collectionRef, orderBy('timestamp', 'desc'));

    //Real-time snapshot of each document in the collection.
    const unsub = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id})
      });
      setDocs(documents);
    });

    return () => unsub();

  }, [kollection])

  return { docs }
};

export default useFirestore;