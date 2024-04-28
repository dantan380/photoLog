import './App.css'
import Title from './components/Title'
import PhotoUploadForm from './components/PhotoUploadForm';
import ImageGrid from './components/ImageGrid';
import FullPage from './components/FullPage';
import { useState } from 'react';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='App'>
      <Title/>
      <PhotoUploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <FullPage selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;
