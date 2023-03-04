import QR from "qrcode";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export default function QRGenerator() {
  const [name, nameSet] = useState("");
  const [dateOfBirth, dateOfBirthSet] = useState("2000-01-01");
  const [albertaHealthNumber, albertaHealthNumberSet] = useState("");
  const [email, emailSet] = useState("");
  const [phone, phoneSet] = useState("");
  const [summary, summarySet] = useState("");

  const [qr, qrSet] = useState(null);
  const [key, keySet] = useState(null);

  const plaintext = JSON.stringify({
    name,
    dateOfBirth,
    albertaHealthNumber,
    email,
    phone,
    summary,
  });

  useEffect(() => {
    const key = Math.floor(100000 + Math.random() * 900000).toString();
    // const salt = CryptoJS.lib.WordArray.random(128 / 8);
    // const password = CryptoJS.PBKDF2(key, salt, {
    //   keySize: 512 / 32,
    //   iterations: 1000,
    // });
    const password = key;
    const encrypted = CryptoJS.AES.encrypt(plaintext, password).toString();

    keySet(key);
    QR.toDataURL(encrypted, (_, url) => {
      qrSet(url);
    });
  }, [plaintext]);

  return (
    <div>
      <h1>QRGenerator</h1>
      <div>
        <label>
          <p>Name</p>
          <input
            type={"text"}
            value={name}
            placeholder={"e.g. Jane Doe"}
            onChange={(event) => {
              nameSet(event.target.value);
            }}
          />
        </label>
        <label>
          <p>Date of Birth</p>
          <input
            type={"text"}
            value={dateOfBirth}
            onChange={(event) => {
              dateOfBirthSet(event.target.value);
            }}
          />
        </label>
        <label>
          <p>Alberta Health Number</p>
          <input
            type={"text"}
            value={albertaHealthNumber}
            placeholder={"e.g. 123"}
            onChange={(event) => {
              albertaHealthNumberSet(event.target.value);
            }}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type={"text"}
            value={email}
            placeholder={"e.g. someone@gmail.com"}
            onChange={(event) => {
              emailSet(event.target.value);
            }}
          />
        </label>
        <label>
          <p>Phone</p>
          <input
            type={"text"}
            value={phone}
            placeholder={"e.g. +1 123 456 7890"}
            onChange={(event) => {
              phoneSet(event.target.value);
            }}
          />
        </label>
        <label>
          <p>Summary</p>
          <input
            type={"text"}
            value={summary}
            placeholder={"e.g. Leg fracture"}
            onChange={(event) => {
              summarySet(event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <p>Encryption code: {key}</p>
        <p>QR:</p>
        <img alt="qr" src={qr} />
        <div>
          <a href={qr} download={`${key}.png`}>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
