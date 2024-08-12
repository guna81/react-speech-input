import { useState, useRef, useEffect } from "react";
import { capitalize } from "./utils";

interface Props {
  initialValue?: string;
  continuous?: boolean;
  language?: string;
}

const useSpeechRecognition = ({
  initialValue = "",
  continuous,
  language,
}: Props) => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [supportsSpeechRecognition, setSupportsSpeechRecognition] =
    useState(false);

  const recognition = useRef<any>(null);

  useEffect(() => {
    if (initialValue && !transcript) {
      setTranscript(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSupportsSpeechRecognition(false);
      console.log(
        "Web Speech API is not supported in this browser. Try Other Browser."
      );
    } else {
      setSupportsSpeechRecognition(true);

      recognition.current = new SpeechRecognition();
      // Set recognition options
      recognition.current.lang = language || "en-US";
      recognition.current.continuous = continuous || true;
      recognition.current.interimResults = true;

      recognition.current.onstart = () => setListening(true);
      recognition.current.onend = () => setListening(false);

      recognition.current.onerror = (event: { error: any }) => {
        console.error("Speech Recognition error:", event.error);
      };

      let finalTranscript = "";
      recognition.current.onresult = (event: {
        resultIndex: any;
        results: string | any[];
      }) => {
        let interimTranscript = "";

        // eslint-disable-next-line no-plusplus
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        setTranscript((prevValue) => {
          finalTranscript = finalTranscript || prevValue;
          const text = capitalize(finalTranscript + interimTranscript);
          return text;
        });
        // moveCursorToEnd(this.focusedInput);
      };
    }

    return () => {
      if (listening) {
        recognition.current.stop();
      }
    };
  }, []);

  const startListening = () => {
    if (!recognition.current) return;
    recognition.current.stop();
    recognition.current.start();
  };

  const stopListening = () => {
    if (!recognition.current) return;
    recognition.current.stop();
  };

  const resetTranscript = () => {
    if (!recognition.current) return;
    setTranscript("");
    recognition.current.stop();
  };

  return {
    transcript,
    listening,
    startListening,
    stopListening,
    resetTranscript,
    supportsSpeechRecognition,
  };
};

export default useSpeechRecognition;
