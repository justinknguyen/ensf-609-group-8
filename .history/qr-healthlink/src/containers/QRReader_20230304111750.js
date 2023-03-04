import { React, useState, useRef } from "react";
import jsQR from "jsqr"
import CryptoJS from 'crypto-js';

export default function QRReader()) {

	const [imgDataLink, setimgDataLink] = useState(null)
	const [imgData, setimgData] = useState(null);
	const [data, setData] = useState('');
	const encryptKey = useRef('123')
  
	const handleImgUpload = (e) => {
	  const file = e.target.files[0];
	  const reader = new FileReader();
  
	  reader.onloadend = () => {
		setimgDataLink(reader.result)
		loadDataFromImage(reader.result)
		decryptDataFromCode()
	  };
	  reader.readAsDataURL(file);
	};
  
  
	const loadDataFromImage = (file, callback) => {
	  const image = new Image()
  
	  image.onload = function() {
		const canvas = document.createElement('canvas');
		canvas.width = image.width;
		canvas.height = image.height;
		
		const context = canvas.getContext('2d');
		context.drawImage(image, 0, 0);
		
		const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

		setimgData({
			"data": imageData.data,
			"width": image.naturalWidth,
			"height": image.naturalHeight,
		})
	  };
  
	  
	  image.src = file
	}
  
	const decryptDataFromCode = () => {
		if (!imgData) return
		console.log(encryptKey.current.value.length)
		if (encryptKey.current.value.length !== 6) return
		const code = jsQR(imgData.data, imgData.width, imgData.height)
		if (code) {
			try {
				const info = decryptString(code.data, encryptKey.current.value)
				setData(info)
			} catch (error) {
				console.error(error);
			}
		}
	}

	
	const decryptString = (plaintext, key) => {
	  let decrypted = CryptoJS.AES.decrypt(plaintext, key);
	  return decrypted.toString(CryptoJS.enc.Utf8)
	}
  
	return (
	  <div className="Home">
		<div className="lander">
		  <h1>QR Code Reader</h1>
		  <input type="file" onChange={handleImgUpload} />
		  {imgDataLink && (
			<a href={imgDataLink} target="_blank" rel="noopener noreferrer">
			  <img src={imgDataLink} alt="QR uploaded" />
			</a>
		  )}
		</div>
		
		<div className="input-container">
			  <div className="input-field-container">
				<label htmlFor="name">Your Code:</label>
				<input type="text" id="name" className="input-field" ref={encryptKey} onChange={decryptDataFromCode}/>
			  </div>
			  <label htmlFor="summary">Summary:</label>
			  <textarea id="summary" className="input-field summary" value={data} readOnly/>
		</div>
  
	  </div>
	);
}