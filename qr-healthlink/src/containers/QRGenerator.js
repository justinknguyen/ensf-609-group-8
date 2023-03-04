import QR from "qrcode";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import styled from "styled-components";

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

const Form = styled.div`
  /* display: "block"; */
  max-width: 30rem;
  width: 100%;
  padding: 1rem;
`;

const InputTitle = styled.p`
  font-weight: 500;
`;

const Input = styled.input`
  border-radius: 0.25rem;
  padding: 0 1rem;
  width: 100%;
`;

const Centered = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Code = styled.p`
  /* font-size: 2rem; */
`;
const Download = styled.a`
  /* background-color: #1976d2; */
  border-radius: 0.75rem;
  color: #1976d2;
  font-weight: 500;
  text-decoration: none;
  padding: 1rem;
`;

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

  const charCount = summary.length;

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
              Summary (Characters Remaining {2909 - charCount})
            </InputTitle>
            <Input
              type={"text"}
              value={summary}
              maxLength={2909}
              placeholder={"Description of Patients Issues..."}
              onChange={(event) => {
                summarySet(event.target.value);
              }}
            />
          </label>
        </div>
        <br />
        <hr />
        <div>
          <Centered>
            <InputTitle>Encryption code</InputTitle>
            <Code>{key}</Code>
            <InputTitle>QR</InputTitle>
            <img alt="qr" src={qr} />
            <Download href={qr} download={`${key}.png`}>
              Download
            </Download>
          </Centered>
        </div>
      </Form>
    </Layout>
  );
}
