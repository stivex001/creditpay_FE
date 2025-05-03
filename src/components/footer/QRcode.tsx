import code from "@/assets/images/code.png";
export const QRCode = () => {
  return (
    <div className="bg-white p-1 rounded w-24 h-24 flex items-center justify-center">
      <img src={code} alt="QR Code" className="w-full h-full" />
    </div>
  );
};
