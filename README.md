# React Speec Input

A simple and customizable speech to text input for react

## Installation

Install with npm

```bash
  npm install react-speech-input
```

<!-- ## Demo

Checkout the [Demo](https://codesandbox.io/s/react-new-ticker-9g6ndd?file=/src/App.js). -->

## Usage/Examples

```javascript
import SpeechInput from "react-speech-input";

function App() {
  const [value, setValue] = useState("");

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
```

## API Reference

#### Props

| Parameter    | Type         | Description                                              | Default Value |
| :----------- | :----------- | :------------------------------------------------------- | :------------ |
| `value`      | `string`     | Value of the input.                                      |               |
| `onChange`   | `function`   | On change function that takes one string as a parameter. |               |
| `style`      | `object`     | CSS style object.                                        |               |
| `micOnIcon`  | `react node` | Mic on icon.                                             |               |
| `micOffIcon` | `react node` | Mic off. icon                                            |               |
| `continuous` | `boolean`    | Continuous Recognition direction.                        | true          |
| `language`   | `string`     | Language Setting.                                        | en-US         |
