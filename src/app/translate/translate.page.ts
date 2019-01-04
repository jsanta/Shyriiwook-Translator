import { SpeechApiService } from './../services/speech-api.service';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShyriiwookPipe } from '../pipes/shyriiwook.pipe';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.page.html',
  styleUrls: ['./translate.page.scss'],
  providers: [ ShyriiwookPipe ]
})
export class TranslatePage implements OnInit {

  params: Params;
  chewie: boolean;
  originalText: string;
  translatedText: string;

  private settings: {
    voice?: any;
    pitch?: number;
    rate?: number;
  };

  constructor(
    public speechApiService: SpeechApiService,
    private route: ActivatedRoute,
    private menu: MenuController,
    private shyriiwook: ShyriiwookPipe) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.menu.enable(true);

    // this.speechApiService.init();
    this.settings = this.speechApiService.settings;
    this.settings = (this.settings) ? this.settings : {};

    console.log(this.settings);

    this.chewie = false;
  }
  translate() {
    this.chewie = !this.chewie;
    this.translatedText = this.shyriiwook.transform(this.originalText, true);
    console.log(this.originalText, this.translatedText);
  }

  growl() {
    this.speechApiService.speak(this.translatedText, this.settings.voice, this.settings.pitch, this.settings.rate);
  }

}
