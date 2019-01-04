import { SpeechApiService } from './../services/speech-api.service';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  params: Params;
  settings: {
    voice?: any;
    pitch?: number;
    rate?: number;
  };
  voices: Array<any>;

  constructor(
    public speechApiService: SpeechApiService,
    private route: ActivatedRoute,
    private menu: MenuController) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.menu.enable(true);

    // this.speechApiService.init();

    this.settings = this.speechApiService.getSettings();
    this.settings = (this.settings) ? this.settings : {};
    this.voices   = this.speechApiService.getVoices();
  }

  testAudio() {
    console.log('testAudio');
    this.speechApiService.speak('This is a test message in English', this.settings.voice, this.settings.pitch, this.settings.rate);
    console.log(this.settings);
    localStorage.setItem('speechVoice', JSON.stringify(this.settings));
    this.speechApiService.settings = this.settings;
  }

}
