import QR from "qrcode";
import { useState } from "react";

export const QRGenerator = () => {
  const [info, setInfo] = useState("");
  let [qr, setQr] = useState(null);

  return (
    <div>
      <h1>QRGenerator</h1>
      <label>
        Information
        <input
          type="text"
          value={info}
          placeholder="info"
          onChange={(event) => {
            setInfo(event.target.value);

            // TODO: encrypt
            const encrypted = info;

            QR.toDataURL(encrypted, (_, url) => {
              setQr(url);
            });
          }}
        />
      </label>
      <img src={qr} />
    </div>
  );
};
