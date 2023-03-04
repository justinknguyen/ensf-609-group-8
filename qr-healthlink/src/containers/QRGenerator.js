import QR from "qrcode";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import "./QRGenerator.css";
import {
  Code,
  Input,
  InputTitle,
  Layout,
  Form,
  Title,
  Centered,
  Sep,
  BigInput,
} from "../styles";

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

  const checkValidInputs = () => {
    if (!name) {
      alert("Please Enter a Valid Name")
      return false
    }

    if (albertaHealthNumber.toString().replace(/\D/g,'').length !== 9) {
      alert("Enter a Valid Alberta Health Number")
      return false
    }

    if (!email && !phone) {
      alert("Either a Phone Number or Email Must be Entered")
      return false
    }

    if (email) {
      const validEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      if (!validEmail){
        alert("Enter a Valid Email")
        return false
      }
    }

    if (phone) {
      if (phone.toString().replace(/\D/g,'').length !== 10){
        alert("Enter a Valid phone number")
        return false
      }
    }

    if (!summary) {
      alert("Enter Some Information in The Summary Box")
      return false
    }

    return true

  }

  const handleDownload = () => {
    if (!checkValidInputs()) return
    const link = document.createElement("a");
    link.download = key + '.png';
    link.href = qr;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Layout>
      <Form>
        <Title>QR Generator</Title>
        <div>
          <label>
            <InputTitle>Name</InputTitle>
            <Input
              type={"text"}
              value={name}
              placeholder={"Patient Name"}
              maxLength={30}
              onChange={(event) => {
                nameSet(event.target.value);
              }}
            />
          </label>
          <label>
            <InputTitle>Date of Birth</InputTitle>
            <Input
              type={"date"}
              value={dateOfBirth}
              placeholder={"DD/MM/YEAR"}
              maxLength={10}
              onChange={(event) => {
                dateOfBirthSet(event.target.value);
              }}
            />
          </label>
          <label>
            <InputTitle>Alberta Health Number</InputTitle>
            <Input
              type={"text"}
              value={albertaHealthNumber}
              placeholder={"Number"}
              maxLength={9}
              onChange={(event) => {
                albertaHealthNumberSet(event.target.value);
              }}
            />
          </label>
          <label>
            <InputTitle>Email</InputTitle>
            <Input
              type={"text"}
              value={email}
              placeholder={"Patient Email"}
              maxLength={30}
              onChange={(event) => {
                emailSet(event.target.value);
              }}
            />
          </label>
          <label>
            <InputTitle>Phone</InputTitle>
            <Input
              type={"text"}
              value={phone}
              placeholder={"XXX XXX XXXX"}
              maxLength={12}
              onChange={(event) => {
                phoneSet(event.target.value);
              }}
            />
          </label>
          <label>
            <InputTitle>
              Summary (Characters Remaining {2909 - summary.length})
            </InputTitle>
            <BigInput
              type={"text"}
              value={summary}
              maxLength={2909}
              rows={4}
              placeholder={"Description of Patients Issues..."}
              onChange={(event) => {
                summarySet(event.target.value);
              }}
            />
          </label>
        </div>
        <br />
        <Sep />
        <div>
          <Centered>
            <InputTitle>Encryption code</InputTitle>
            <Code>{key}</Code>
            <InputTitle>QR</InputTitle>
            <img alt="qr" src={qr} />
            <btn className="Download" onClick={handleDownload}>
              Download
            </btn>
          </Centered>
        </div>
      </Form>
    </Layout>
  );
}
