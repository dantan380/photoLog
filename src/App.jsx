import './App.css'
import Title from './components/Title'
import PhotoUploadForm from './components/PhotoUploadForm';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div className='App'>
      <Title/>
      <PhotoUploadForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;
