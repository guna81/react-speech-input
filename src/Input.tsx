import React, {
  JSX,
  useRef,
  useState,
  useEffect,
  forwardRef,
  useCallback,
} from "react";

import useSpeechRecognition from "./useSpeechRecognition";
import { MicOnIcon, MicOffIcon } from "./Icons";

import * as styles from "./Input.module.css";

interface InputProps {
  // input props
  value: string;
  onChange: (value: string) => void;
  renderInput?: (props: any) => JSX.Element;
  containerStyle?: React.CSSProperties;
  style?: React.CSSProperties;

  // transcriber props
  micOnIcon?: JSX.Element;
  micOffIcon?: JSX.Element;
  continuous?: boolean;
  language?: string;
  recordButtonStyle?: React.CSSProperties;
  alwaysShowRecordButton?: boolean;
}

const Input = forwardRef<any, InputProps>((props: InputProps, ref: any) => {
  const {
    value,
    onChange,
    renderInput,
    containerStyle,
    style,

    micOnIcon = <MicOnIcon />,
    micOffIcon = <MicOffIcon />,
    continuous,
    language,
    recordButtonStyle,
    alwaysShowRecordButton,
    ...rest
  } = props;

  const speechInputRef = useRef<HTMLDivElement>(ref?.current || null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState<string>(value);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [setInputValue]
  );

  const [listening, setListening] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  // handle focus and blur
  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    if (listening) {
      setFocused(false);
    }
  }, [listening]);

  // listen for click outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      speechInputRef.current &&
      !speechInputRef.current.contains(event.target as Node)
    ) {
      setFocused(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // sync input values
  useEffect(() => {
    if (value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (inputValue !== value) {
      onChange(inputValue);
    }
  }, [inputValue]);

  // input props
  const inputProps = {
    ref: inputRef,
    value: inputValue,
    onChange: onInputChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    style: style,
    // ...rest,
  };

  return (
    <div
      style={containerStyle}
      ref={speechInputRef}
      className={styles.speechInput}
    >
      <div className={styles.inputContainer}>
        {renderInput ? renderInput(inputProps) : <input {...inputProps} />}
      </div>
      {(alwaysShowRecordButton || focused) && (
        <Transcriber
          ref={inputRef}
          value={inputValue}
          onValueChange={setInputValue}
          continuous={continuous}
          language={language}
          micOnIcon={micOnIcon}
          micOffIcon={micOffIcon}
          setListening={setListening}
          recordButtonStyle={recordButtonStyle}
        />
      )}
    </div>
  );
});

export default Input;

interface TranscriberProps {
  value: string;
  onValueChange: (value: string) => void;
  micOnIcon?: JSX.Element;
  micOffIcon?: JSX.Element;
  continuous?: boolean;
  language?: string;
  setListening: (value: boolean) => void;
  recordButtonContainerStyle?: React.CSSProperties;
  recordButtonStyle?: React.CSSProperties;
}

export const Transcriber = forwardRef<any, TranscriberProps>(
  (
    {
      value,
      onValueChange,
      micOnIcon,
      micOffIcon,
      continuous,
      language,
      setListening,
      recordButtonStyle,
    }: TranscriberProps,
    ref: any
  ) => {
    const {
      transcript,
      listening,
      startListening,
      stopListening,
      resetTranscript,
      supportsSpeechRecognition,
    } = useSpeechRecognition({
      initialValue: value,
      continuous,
      language,
    });

    // reset transcript when component unmount
    useEffect(() => {
      return () => {
        resetTranscript();
      };
    }, []);

    useEffect(() => {
      setListening(listening);
    }, [listening]);

    useEffect(() => {
      if (transcript) {
        onValueChange(transcript);
      }
    }, [transcript]);

    if (!supportsSpeechRecognition) {
      console.log(
        "Web Speech API is not supported in this browser. Try Chrome or Firefox."
      );
      return null;
    }

    const handleMicClick = () => {
      ref.current?.focus();
      listening ? stopListening() : startListening();
    };

    return (
      <div style={recordButtonStyle} className={styles.recordButtonContainer}>
        <a href="#" className={styles.recordButton} onClick={handleMicClick}>
          {listening ? micOnIcon : micOffIcon}
        </a>
      </div>
    );
  }
);
