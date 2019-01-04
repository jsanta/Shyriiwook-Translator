import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SpeechApiService } from '../services/speech-api.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  params: Params;

  constructor(
    public speechApiService: SpeechApiService,
    private route: ActivatedRoute,
    private menu: MenuController) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.menu.enable(false);
  }

}
