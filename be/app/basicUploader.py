import os
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './files'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
    # check if the post request has the file part
    if 'file' not in request.files:
      return 'missing file part'

    f = request.files['file']
    # check if file was selected
    if f.filename == '':
      return 'no file selected'

    filename = secure_filename(f.filename)
    f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    return 'file uploaded successfully'
		
if __name__ == '__main__':
   app.run(debug = True)