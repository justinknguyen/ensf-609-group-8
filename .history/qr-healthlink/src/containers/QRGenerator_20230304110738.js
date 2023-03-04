import QR from "qrcode";
import { useEffect, useState } from "react";

export default function QRGenerator() {
  const [name, nameSet] = useState("");
  const [dateOfBirth, dateOfBirthSet] = useState("2000-01-01");
  const [albertaHealthNumber, albertaHealthNumberSet] = useState("");
  const [email, emailSet] = useState("");
  const [phone, phoneSet] = useState("");
  const [summary, summarySet] = useState("");

  let [qr, setQr] = useState(null);

  // TODO: encrypt
  const encrypted = JSON.stringify({
    name,
    dateOfBirth,
    albertaHealthNumber,
    email,
    phone,
    summary,
  });

  useEffect(() => {
    QR.toDataURL(encrypted, (_, url) => {
      setQr(url);
    });
  }, [encrypted]);

  return (
    <div>
      <h1>QRGenerator</h1>
      {[
        {
          label: "Name",
          value: name,
          set: nameSet,
          placeholder: "e.g. Jane Doe",
        },
        {
          label: "Date of Birth",
          value: dateOfBirth,
          set: dateOfBirthSet,
          type: "date",
        },
        {
          label: "Alberta Health Number",
          value: albertaHealthNumber,
          set: albertaHealthNumberSet,
          placeholder: "e.g. 123",
        },
        {
          label: "Email",
          value: email,
          set: emailSet,
          placeholder: "e.g. someone@gmail.com",
        },
        {
          label: "Phone",
          value: phone,
          set: phoneSet,
          placeholder: "e.g. +1 123 456 7890",
        },
        {
          label: "Summary",
          value: summary,
          set: summarySet,
          placeholder: "e.g. Leg fracture",
        },
      ].map(({ label, value, set, placeholder, type }) => (
        <div>
          <label>
            {label}
            <input
              type={type || "text"}
              value={value}
              placeholder={placeholder}
              onChange={(event) => {
                set(event.target.value);
              }}
            />
          </label>
        </div>
      ))}
      <div>
        <p>QR:</p>
        <img src={qr} />
      </div>
    </div>
  );
};