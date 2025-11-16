import React from 'react';
// 1. IMPORT THE NECESSARY HOOK AND OBJECT FROM THE NEW LIBRARY
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognizer = () => {
  // 2. GET ALL THE VALUES AND FUNCTIONS FROM THE HOOK
  const {
    transcript, // The text that has been recognized
    listening, // A boolean that is true when the microphone is on
    resetTranscript, // A function to reset the recognized text
    browserSupportsSpeechRecognition, // A boolean to check if the user's browser is compatible
    isMicrophoneAvailable, // A boolean to check if a microphone is connected
  } = useSpeechRecognition();

  // 3. HANDLE THE CASE WHERE THE BROWSER IS NOT SUPPORTED
  if (!browserSupportsSpeechRecognition) {
    return <div className="error-message">Your browser does not support speech recognition. Please try Chrome.</div>;
  }

  // 4. HANDLE THE CASE WHERE THE MICROPHONE IS NOT AVAILABLE
  if (!isMicrophoneAvailable) {
    return <div className="error-message">Microphone is not available. Please check your microphone connection and browser permissions.</div>;
  }
  
  // 5. DEFINE FUNCTIONS TO START AND STOP LISTENING
  // We use the main `SpeechRecognition` object for controls.
  // The `startListening` function can take options, like listening continuously.
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
  const stopListening = () => SpeechRecognition.stopListening();

  return (
    <div className="speech-recognizer">
      <h3>Speech-to-Text</h3>
      <p>Microphone status: {listening ? <span style={{color: 'green'}}>ON</span> : <span style={{color: 'red'}}>OFF</span>}</p>
      
      <div className="button-group">
        <button onClick={startListening}>Start</button>
        <button onClick={stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
      
      {/* The transcript is automatically updated as you speak */}
      <div className="transcript-container">
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default SpeechRecognizer;
