import './style.css'
import './basic.css'
import './dropzone.css'
import './tailwind.css'

import Dropzone from './dropzone'

let myDropzone = new Dropzone("#dropzone-container", {
    url: "https://air.anselbrandt.net/api/files/upload",
    paramName: "file_uploads"
});
