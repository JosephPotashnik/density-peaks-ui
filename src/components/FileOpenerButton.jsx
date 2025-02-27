import { useRef } from "react";

const FileOpenerButton = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <button onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">
        Open File
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => console.log(e.target.files[0])} // Handle the selected file
      />
    </div>
  );
};

export default FileOpenerButton;