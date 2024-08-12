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

import styles from "./Input.module.css";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  renderInput?: (props: any) => JSX.Element;
  style?: React.CSSProperties;
  micOnIcon?: JSX.Element;
  micOffIcon?: JSX.Element;
  continuous?: boolean;
  language?: string;
}

const Input = forwardRef<any, InputProps>((props: InputProps, ref: any) => {
  const {
    value,
    onChange,
    renderInput,
    style,
    micOnIcon = <MicOnIcon />,
    micOffIcon = <MicOffIcon />,
    continuous,
    language,
    ...rest
  } = props;

  const voiceInputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState(value);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [setInputValue]
  );

  const [listening, setListening] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    if (listening) {
      setFocused(false);
    }
  }, [listening]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      voiceInputRef.current &&
      !voiceInputRef.current.contains(event.target as Node)
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

  const inputProps = {
    ref: inputRef,
    value: inputValue,
    style: style,
    onChange: onInputChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ...rest,
  };

  return (
    <div ref={voiceInputRef} className={styles.voiceTypeField}>
      <div className={styles.inputContainer}>
        {renderInput ? renderInput(inputProps) : <input {...inputProps} />}
      </div>
      {focused && (
        <Transcriber
          ref={inputRef}
          value={inputValue}
          onValueChange={setInputValue}
          continuous={continuous}
          language={language}
          micOnIcon={micOnIcon}
          micOffIcon={micOffIcon}
          setListening={setListening}
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
      <div className={styles.voiceRecorderContainer}>
        <a href="#" className={styles.voiceRecorder} onClick={handleMicClick}>
          {listening ? micOnIcon : micOffIcon}
        </a>
      </div>
    );
  }
);
