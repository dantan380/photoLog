import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({file, setFile}) => {
  const { url, progress } = useStorage(file);
  
  //If URL exists, set 'file' to null to remove progress bar upon completion.
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])

  return (
    <div className="progress-bar" style={{ width: progress + '%' }}></div>
  )
}

//To fix ESLint error with prop types.
ProgressBar.propTypes = null;

export default ProgressBar