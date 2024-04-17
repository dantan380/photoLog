
const PhotoUploadForm = () => {

  const changeHandler = () => {
    console.log('changed');
  }

  return (
    <form>
      <input type="file" onChange={changeHandler}/>
    </form>
  )
};

export default PhotoUploadForm;