import { Injectable, NgZone } from '@angular/core';

// export interface IWindow extends Window {
//   webkitSpeechRecognition: any;
//   speechSynthesis: any;
// }

@Injectable({
  providedIn: 'root'
})
export class SpeechApiService {

  speechApi: any;
  voices: Array<any>;

  settings: {
    voice?: any;
    pitch?: number;
    rate?: number;
  };

  initialized = false;

  init() {
    // this.zone.run(() => {
    try {
      this.speechApi = window.speechSynthesis;
      this.voices = window.speechSynthesis.getVoices();
      this.initialized = true;

      this.settings = {
        voice: this.voices[0],
        pitch: 0,
        rate: 0
      };

      console.log(this.speechApi, this.voices, window.speechSynthesis, window.speechSynthesis.getVoices());
    } catch (err) {
      console.error('ERROR Retrieving speechSynthesis voices (init): ', err);
    }
    // });
  }

  constructor(private zone: NgZone) {
    this.init();
  }

  speak(txtMsg: string, voice: any, pitch: number = 0, rate: number = 0) {
    const msg: any = new SpeechSynthesisUtterance();

    msg.voice = voice;
    msg.rate  = rate / 100;
    msg.pitch = pitch / 100;
    msg.text  = txtMsg;

    msg.onend = e => {
      console.log('Finished in ' + e.elapsedTime + ' seconds.');
    };

    window.speechSynthesis.speak(msg);
  }

  getVoices(): Array<any> {
    try {
      this.voices = window.speechSynthesis.getVoices();
    } catch (err) {
      console.error('ERROR Retrieving speechSynthesis voices: ', err);
    }
    return this.voices;
  }

  getSettings() {
    let settings = this.settings;
    settings = (settings.voice) ? settings : JSON.parse(localStorage.getItem('speechVoice'));

    return settings;
  }
}
