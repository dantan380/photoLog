import { motion } from "framer-motion";
import { projStorage } from "../firebase/config";
import { deleteObject } from "firebase/storage";

const FullPage = ({ selectedImg, setSelectedImg }) => {

  const handleClick = () => {
    setSelectedImg(null);
  }

  const deleteImage = () => {
    console.log(selectedImg);
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