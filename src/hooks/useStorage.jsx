import { useState, useEffect } from "react";
import { projStorage, projFirestore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const metadata = {
    contentType: 'image/jpeg'
  };

    //Create reference for storage and upload path for each file.
    const storageRef = ref(projStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    //Create reference to collection.
    const imagesCollectionRef = collection(projFirestore, 'images');

    //After each state change for the upload, take a snap shot, which is the current percentage.
    uploadTask.on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, () => {
       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        const createdAt = serverTimestamp();

        //Add record of the image as a document with the timestamp and url to the 'images' collection.
        const docRef = addDoc(imagesCollectionRef, {
          timestamp: createdAt,
          url: downloadURL
        })
        console.log('Document has been created at: ', docRef.createdAt);
        setUrl(downloadURL);
      });
    })
  }, [file])

  return { progress, url, error };

}

export default useStorage;