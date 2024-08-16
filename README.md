# React Speech Input

A simple and customizable speech to text input for react

## Installation

Install with npm

```bash
  npm install react-speech-input
```

## Demo

Checkout the
<a href="https://codesandbox.io/s/react-speech-input-example-gj8w2f?file=/src/App.js" target="_blank">Demo</a>

## Usage/Examples

```javascript
import SpeechInput from "react-speech-input";

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
      </div>
    </div>
  );
}
```

## API Reference

#### Props

| Parameter                | Type         | Description                                              | Default Value |
| :----------------------- | :----------- | :------------------------------------------------------- | :------------ |
| `value`                  | `string`     | Value of the input.                                      |               |
| `onChange`               | `function`   | On change function that takes one string as a parameter. |               |
| `style`                  | `object`     | input CSS styles.                                        |               |
| `containerStyle`         | `object`     | Input container CSS styles.                              |               |
| `recordButtonStyle`      | `object`     | Recorder Button CSS styles.                              |               |
| `micOnIcon`              | `react node` | Mic on icon.                                             |               |
| `micOffIcon`             | `react node` | Mic off. icon                                            |               |
| `continuous`             | `boolean`    | Continuous Recognition direction.                        | true          |
| `language`               | `string`     | Language Setting.                                        | en-US         |
| `alwaysShowRecordButton` | `boolean`    | Show record button always.                               | false         |

&nbsp;

## Browser Support

This compoenent is not supported in all browsers. check for browser campatability [here](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#browser_compatibility)
