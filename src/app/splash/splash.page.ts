import { MenuController } from '@ionic/angular';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SpeechApiService } from '../services/speech-api.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  params: Params;

  // Ref.: https://stackoverflow.com/questions/53871586/angular-catch-beforeinstallprompt-event-add-to-homescreen-in-dev-tools-applic
  deferredPrompt: any;
  showButton = false;
  showIosBanner = false;
  isIos: boolean;

  constructor(
    private swUpdate: SwUpdate,
    public speechApiService: SpeechApiService,
    private route: ActivatedRoute,
    private menu: MenuController) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.menu.enable(false);

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load new version?')) {
          window.location.reload();
        }
      });
    }

    // Checks if should display install popup notification:
    this.isIos = this.checkIsIos();
    if (this.isIos && !this.isInStandaloneMode()) {
      // this.showIosInstall();
      this.showIosBanner = true;
    }
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }

  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }

  showIosInstall = () => {
    const iosPrompt: any = document.querySelector('.ios-prompt');
    iosPrompt.addEventListener('click', () => {
      iosPrompt.style.display = 'none';
    });
  }

  // Detects if device is on iOS
  checkIsIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
  }
  // Detects if device is in standalone mode
  isInStandaloneMode = () => ('standalone' in (<any> window).navigator) && ((<any> window).navigator.standalone);


}
