import logo from './logo.svg';
import './App.css';
import {useEffect, useRef,useState} from 'react';
import { uploadFile } from './services/api';

function App() {
  const[file,setFile] = useState('');
  const[result,setResult] = useState('');
  const fileInputRef = useRef();
  const onUploadClick = ()=>{
    fileInputRef.current.click();


  }
  console.log(file)
useEffect(()=>{
  const getImage = async()=>{
    if(file){
      const data = new FormData();
      data.append('name', file.name);
      data.append('file', file);

     let response = await uploadFile(data);
     setResult(response.path);
    }

  }
  getImage();

},[file])
  
  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>simple file sharing</h1>
        <p><u>Upload files and share them with others</u></p>

        <button onClick={()=>onUploadClick()} >upload file</button>
        <input className='u' type='file'
        ref={fileInputRef}
        style={{display:'none'}}
        onChange={(e)=>setFile(e.target.files[0])}
        />
        <a href={result} target='blank'>{result}</a>

      </div>
     
    </div>
  );
}

export default App;
