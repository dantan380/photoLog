import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      { docs && docs.map(doc => (
          <motion.div className="img-wrap" key={doc.id}
            layout transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            onClick={() => setSelectedImg(doc.url) }
          >
            <motion.img src={doc.url} alt="uploaded img" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
          </motion.div>
      )) }
    </div>
  )
};

ImageGrid.propTypes = null;

export default ImageGrid;