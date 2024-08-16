import React, { useState } from "react";
import "./App.css";

import SpeechInput from "react-speech-input";
import TextField from "@mui/material/TextField";

function App() {
  const [value, setValue] = useState("");

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <div>
        <h1>React Speech Input Example</h1>
        <div>
          <h2>Simple Use Case</h2>

          <SpeechInput
            style={{ width: 400, height: 50 }}
            value={value}
            onChange={onChange}
          />
        </div>

        <div>
          <h2>Using Custom Inputs</h2>
          <SpeechInput
            style={{ width: 400 }}
            value={value}
            onChange={onChange}
            renderInput={(props) => (
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                {...props}
              />
            )}
          />
        </div>

        <div>
          <h2>Always Show Record Button</h2>

          <SpeechInput
            allwaysShowRecordButton
            style={{ width: 400, height: 50 }}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
