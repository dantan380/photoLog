import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { projStorage, projFirestore } from "../firebase/config";
import { deleteObject, ref } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";

const FullPage = ({ selectedImg, setSelectedImg }) => {

  //Create reference to document storage.
  const { docs } = useFirestore('images');

  const handleClick = () => {
    setSelectedImg(null);
  }

  const deleteImage = () => {
    for (let image of docs) {
      if (image.url === selectedImg) {
        //Create image reference.
        const imageRef = ref(projStorage, image.name);

        //Call deleteObject to delete the image.
        deleteObject(imageRef).then(() => {
          //Create document reference.
          const docRef = doc(projFirestore, 'images', image.id);

          //Call deleteDoc to delete the document.
          deleteDoc(docRef).then(() => {
            console.log('document deletion successful.');
          })

          //Once both document and image are deleted, return to image grid.
          console.log('image deletion successful.');
          setSelectedImg(null);

        }).catch((error) => {
          console.log(error);
        })
      }
    }
  }
  
  return (
    <motion.div className='fullImageContainer'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={selectedImg} alt='full size image'/>
      <button onClick={handleClick}>Back</button>
      <button onClick={deleteImage}>Delete</button>
    </motion.div>
  )
};

FullPage.propTypes = null;

export default FullPage;