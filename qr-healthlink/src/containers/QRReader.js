import { React, useState, useEffect } from "react";
import jsQR from "jsqr";
import CryptoJS from "crypto-js";
import { Form, Input, Centered, Layout, Title, Sep } from "../styles";
import { InputLabel } from "@mui/material";

export default function QRReader() {
  const [imgDataLink, setimgDataLink] = useState(null);
  const [imgData, setimgData] = useState(null);
  const [data, setData] = useState({ error: "Invalid key" });
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
        setData({ error: "invalid key" });
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
            <input type="file" onChange={handleImgUpload} />
          </Centered>
          <Centered>
            {imgDataLink && (
              <a href={imgDataLink} target="_blank" rel="noopener noreferrer">
                <img src={imgDataLink} alt="QR uploaded" />
              </a>
            )}
          </Centered>
          <br />
          <br />
          <Sep />
          <br />
          <label>
            <InputLabel>Your Code</InputLabel>
            <Input
              type="text"
              onChange={(event) => {
                encryptKeySet(event.target.value);
              }}
            />
          </label>
          {data.error ? (
            <InputLabel>Error: {data.error}</InputLabel>
          ) : (
            <>
              <label>
                <InputLabel>Name</InputLabel>
                <Input value={data.name} readOnly />
              </label>
              <label>
                <InputLabel>Date of Birth</InputLabel>
                <Input value={data.dateOfBirth} readOnly />
              </label>
              <label>
                <InputLabel>Alberta Health Number</InputLabel>
                <Input value={data.albertaHealthNumber} readOnly />
              </label>
              <label>
                <InputLabel>Email</InputLabel>
                <Input value={data.email} readOnly />
              </label>
              <label>
                <InputLabel>Phone</InputLabel>
                <Input value={data.phone} readOnly />
              </label>
              <label>
                <InputLabel>Summary</InputLabel>
                <Input value={data.summary} readOnly />
              </label>
            </>
          )}
        </div>
      </Form>
    </Layout>
  );
}
