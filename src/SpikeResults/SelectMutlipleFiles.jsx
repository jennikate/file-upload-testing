import React, { useState } from 'react';
import './App.css'

const MAX_COUNT = 5;
const MAX_FILE_SIZE = 15000;

function App() {
  const [fileLimit, setFileLimit] = useState(false); // set a limit on how many files can be uploaded at one time
  const [selectedFiles, setSelectedFiles] = useState([]) // create an array of the files selected to be uploaded

  const handleUploadFiles = (files) => {
    if (selectedFiles.length + files.length > MAX_COUNT) { // stop the function if trying to upload more than max in one go
      alert('Too many files selected')
    } else {
      const selected = files.flatMap((file) => { // flat map lets you return the empty array when the if condition is not met, and flattens it (rather than using reduce, or map+filter)
        if (file.size > MAX_FILE_SIZE) { // can test the file size and prevent a file that's too big being selected
          alert(`${file.name} too big`);
          return [];
        } else if (selectedFiles.findIndex((f) => f.name === file.name) === -1) { // check if file already in list to prevent duplicate files being added
          return file;
        } else {
          return [];
        }
      });

      setSelectedFiles([...selectedFiles, ...selected])
    }
  }

  console.log(selectedFiles)

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files) // convert to an array
    handleUploadFiles(chosenFiles);
  }

  return (
    <div className="App">
      <form>
        <h3>React Multiple File Upload</h3>
        <div className="form-group">
          <input
            id='fileUpload'
            type='file'
            multiple
            // accept='application/pdf, image/png' : can use 'accept' to limit which file extensions you can select for upload, however not on Android or Opera mobile browser (prevents any file being uploaded) so if we want to use it we need to have browser overrides
            onChange={handleFileEvent}
            disabled={fileLimit}
          />
        </div>
        {fileLimit && <p>Max files selected</p>}
        <div className="form-group">
          <button type="submit">Upload</button>
        </div>
      </form>

      <div className="uploaded-files-list">
        {selectedFiles.map(file => (
          <div key={file.name}>
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
