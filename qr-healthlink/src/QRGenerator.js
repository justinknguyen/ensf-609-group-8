import QR from "qrcode";
import { useEffect, useState } from "react";

export const QRGenerator = () => {
  const [info, setInfo] = useState("");
  let [qr, setQr] = useState(null);

  // TODO: encrypt
  const encrypted = info;

  useEffect(() => {
    QR.toDataURL(encrypted, (_, url) => {
      setQr(url);
    });
  }, [encrypted]);

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
          }}
        />
      </label>
      <img src={qr} />
    </div>
  );
};
