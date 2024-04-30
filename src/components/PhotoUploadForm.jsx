import { useState } from "react";
import ProgressBar from "./ProgressBar";

const PhotoUploadForm = ({ file, setFile }) => {
  const [error, setError] = useState(null);

  const allowedTypes = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selectedFile = e.target.files[0];
    
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile)
      setError("");
    } else {
      setFile(null);
      setError("Please select an PNG or JPEG file type")
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler}/>
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div>}
        { file && <ProgressBar file={file} setFile={setFile}/> }
      </div>
    </form>
  )
};

PhotoUploadForm.propTypes = null;

export default PhotoUploadForm;