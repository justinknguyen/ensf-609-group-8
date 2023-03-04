import { React, useState, useEffect } from "react";
import jsQR from "jsqr";
import CryptoJS from "crypto-js";
import {
  BigInput,
  Form,
  Input,
  Centered,
  InputTitle,
  Layout,
  Title,
  Sep,
} from "../styles";

export default function QRReader() {
  const [imgDataLink, setimgDataLink] = useState(null);
  const [imgData, setimgData] = useState(null);
  const [data, setData] = useState({ error: "Enter a Valid Key" });
  const [encryptKey, encryptKeySet] = useState("");

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setimgDataLink(reader.result);
      loadDataFromImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const loadDataFromImage = (file) => {
    const image = new Image();

    image.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;

      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

      setimgData({
        data: imageData.data,
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    };

    image.src = file;
  };

  useEffect(() => {
    if (!imgData) return;
    const code = jsQR(imgData.data, imgData.width, imgData.height);
    if (code) {
      try {
        const info = CryptoJS.AES.decrypt(code.data, encryptKey).toString(
          CryptoJS.enc.Utf8
        );
        setData(JSON.parse(info));
      } catch (error) {
        setData({ error: "Enter a Valid Key" });
        console.error(error);
      }
    }
  }, [encryptKey, imgData]);

  return (
    <Layout>
      <Form>
        <Title>QR Reader</Title>
        <div>
          <br />
          <Centered>
            {imgDataLink && (
              <a href={imgDataLink} target="_blank" rel="noopener noreferrer">
                <img src={imgDataLink} alt="QR uploaded" />
              </a>
            )}
          </Centered>
          <Centered>
            <input type="file" onChange={handleImgUpload} />
          </Centered>
          <br />
          <br />
          <Sep />
          <br />
          <label>
            <InputTitle>Your Code</InputTitle>
            <Input
              type="text"
              onChange={(event) => {
                encryptKeySet(event.target.value);
              }}
            />
          </label>
          {data.error ? (
            <InputTitle>Error: {data.error}</InputTitle>
          ) : (
            <>
              <label>
                <InputTitle>Name</InputTitle>
                <Input value={data.name} readOnly />
              </label>
              <label>
                <InputTitle>Date of Birth</InputTitle>
                <Input value={data.dateOfBirth} readOnly />
              </label>
              <label>
                <InputTitle>Alberta Health Number</InputTitle>
                <Input value={data.albertaHealthNumber} readOnly />
              </label>
              <label>
                <InputTitle>Email</InputTitle>
                <Input value={data.email} readOnly />
              </label>
              <label>
                <InputTitle>Phone</InputTitle>
                <Input value={data.phone} readOnly />
              </label>
              <label>
                <InputTitle>Summary</InputTitle>
                <BigInput type={"text"} rows={4} value={data.summary} readOnly />
              </label>
            </>
          )}
        </div>
      </Form>
    </Layout>
  );
}
