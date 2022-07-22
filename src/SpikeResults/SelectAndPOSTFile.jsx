import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState()

  function handleChange(event) {
    // recognise a file has been uploaded and set it to state
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile'; // end point to post to, will be whatever we setup in BE
    const formData = new FormData(); // create a new form object

    formData.append('file', file); // add the file and it's name to the form object
    formData.append('fileName', file.name);

    const config = {
      headers: {
        'content-type': 'multipart/form-data', // In order to upload files, the ‘content-type’ header must be set to ‘multipart/form-data’.
      },
    };

    axios.post(url, formData, config).then((response) => { // post to endpoint, with file in formData, and content-type as our config
      console.log(response.data);
    });
  }


  return (
    <div className="App">
        <form onSubmit={handleSubmit} >
          <h1>React File Upload</h1>
          <input
            type="file"
            onChange={handleChange}
          />
          <button type="submit">Upload</button>
        </form>
    </div>
  );
}

export default App;