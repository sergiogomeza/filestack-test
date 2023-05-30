import { useState } from "react";
import { PickerOverlay } from "filestack-react";
import "./CustomFileStack.css";

const CustomFilestack = () => {
  const YOUR_API = import.meta.env.VITE_API_KEY;
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const pickerOptions = {
    onClose,
  };

  function onClose() {
    setIsPickerVisible(false);
  }

  function showPicker() {
    setIsPickerVisible(true);
  }

  return (
    <div>
      {isPickerVisible && (
        <PickerOverlay
          apikey={YOUR_API}
          pickerOptions={pickerOptions}
          onError={(error) => console.log("error: ", error)}
          onUploadDone={(res) => console.log("upload: ", res)}
          onClick={(res) => console.log("click: ", res)}
        />
      )}
      <button onClick={showPicker}>Show Picker</button>
    </div>
  );
};

export default CustomFilestack;
