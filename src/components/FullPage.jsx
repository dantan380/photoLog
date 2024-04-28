const FullPage = ({ selectedImg, setSelectedImg }) => {

  const handleClick = (e) => {
    setSelectedImg(null);
  }
  
  return (
    <div className='fullImageContainer' onClick={handleClick}>
      <img src={selectedImg} alt='full size image'/>
      <button>Back</button>
    </div>
  )
};

FullPage.propTypes = null;

export default FullPage;