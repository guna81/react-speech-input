import { useState } from "react";
import "./App.css";

// import SpeechInput from "react-speech-input";
import SpeechInput from "../../src";

function App() {
  const [value, setValue] = useState("");

  console.log({ value });

  const onChange = (value: string) => {
    setValue(value);
  };

  const renderInput = (props: any) => (
    <input placeholder="Enter text" {...props} />
  );

  return (
    <>
      <div>
        <h1>React Speech Input Example</h1>
        <div>
          <h2>Simple Use Case</h2>

          <SpeechInput value={value} onChange={onChange} />
        </div>

        <div>
          <h2>Using Custom Inputs</h2>
          <SpeechInput
            style={{ height: 100 }}
            value={value}
            onChange={onChange}
            renderInput={renderInput}
          />
        </div>
      </div>
    </>
  );
}

export default App;
