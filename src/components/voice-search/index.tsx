import { memo, useCallback, useRef, useState } from "react";
import { MicrophoneIcon } from "../icons/microphone-icon";
import { OverlayPanel } from "../ui/overlay-panel";

import styles from "./styles.module.css";
type Props = {
  onText: (value: string) => void;
};

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}
declare class SpeechRecognition extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

interface SpeechRecognitionResult {
  0: { transcript: string };
  isFinal: boolean;
  length: number;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionEvent extends Event {
  readonly results: SpeechRecognitionResultList;
}

const getSpeechRecognition = (): SpeechRecognition | null => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  return SpeechRecognition ? new SpeechRecognition() : null;
};

const VoiceSearch = ({ onText }: Props) => {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [listening, setListening] = useState(false);

  const startListening = useCallback(() => {
    const recognition = getSpeechRecognition();
    if (!recognition) return;

    recognition.lang = "uk-UA";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onText(transcript);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [onText]);

  return (
    <>
      <button onClick={startListening} className="group">
        <MicrophoneIcon className=" group-hover:stroke-red-500 size-6" />
      </button>
      <OverlayPanel open={listening} setOpen={setListening} type="modal">
        <div className="sm:w-lg flex flex-col items-center">
          <div className="relative">
            <div className="relative z-1 w-[7rem] h-[7rem] rounded-full bg-gray-300 flex items-center justify-center">
              <MicrophoneIcon className="w-[2.5rem]" />
            </div>

            <div
              className={`absolute inset-0 rounded-full bg-gray-300 z-0 ${styles.animate}`}
            />
          </div>
          <h2 className="mt-9 text-3xl font-bold">Кажіть</h2>
          <div className="flex items-center justify-center mt-9">
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        </div>
      </OverlayPanel>
    </>
  );
};

export default memo(VoiceSearch);
