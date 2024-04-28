import { motion } from "framer-motion";

const FullPage = ({ selectedImg, setSelectedImg }) => {

  const handleClick = (e) => {
    setSelectedImg(null);
  }
  
  return (
    <motion.div className='fullImageContainer' onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={selectedImg} alt='full size image'/>
      <button>Back</button>
    </motion.div>
  )
};

FullPage.propTypes = null;

export default FullPage;