# File uploading testing

This was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
And is using React 18

## To test the UI/FE

1. Start the Flask basic file uploader
- in a terminal window, go to `be/app` directory
- run `python basicUploader.py`
_or python3, python3.10 - whatever you have aliased for python_

2. Start the React App
- in another terminal window, from the top level folder (file-upload-testing if you cloned without changes)
- run `npm start`

3. In a browser go to `http://localhost:3000/?`

_You can now select a file from your computer, click upload, and see the file be saved into your local /be/app/files folder_

## Notes

Note: UI does not currently show confirmation of success or failure, please use console/network in dev tools to check