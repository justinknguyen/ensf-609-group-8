import QR from "qrcode";
import { useEffect, useState } from "react";

export default function QrGenerator() {
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
        { label: "Name", value: name, set: nameSet },
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
        },
        {
          label: "Email",
          value: email,
          set: emailSet,
        },
        {
          label: "Phone",
          value: phone,
          set: phoneSet,
        },
        {
          label: "Summary",
          value: summary,
          set: summarySet,
        },
      ].map(({ label, value, set }) => (
        <div>
          <label>
            {label}
            <input
              type="text"
              value={value}
              placeholder="info"
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
