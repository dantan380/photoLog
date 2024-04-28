import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({file, setFile}) => {
  const { url, progress } = useStorage(file);
  
  //If URL exists, set 'file' to null to remove progress bar upon completion.
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

//To fix ESLint error with prop types.
ProgressBar.propTypes = null;

export default ProgressBar