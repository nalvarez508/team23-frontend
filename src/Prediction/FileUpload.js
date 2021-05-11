import React from "react";


function FileUpload() {
    // State to store uploaded file
    const [file, setFile] = React.useState("");

    // Handles file upload event and updates state
    function handleUpload(event) {
        setFile(event.target.files[0]);

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

        fetch('http://localhost:3030/Prediction', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                this.setState({ imageURL: `http://localhost:8000/${body.file}` });
            });
        });

    }

    return (
        <div id="upload-box">
            <input type="file" onChange={handleUpload} />
            <p>Filename: {file.name}</p>
            <p>File type: {file.type}</p>
            <p>File size: {file.size} bytes</p>
            {file && <ImageThumb image={file} />}
        </div>
    );
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
};


export default FileUpload;
//export default function App() {
//
//}