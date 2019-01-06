import { Component, OnInit, HostListener } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Enjoy the Splash (again)',
      url: '/splash',
      icon: 'image'
    },
    {
      title: 'Translate ',
      url: '/translate',
      icon: 'planet'
    },
    {
      title: 'Settings',
      url: '/config',
      icon: 'settings'
    }
  ];

  // Ref.: https://stackoverflow.com/questions/53871586/angular-catch-beforeinstallprompt-event-add-to-homescreen-in-dev-tools-applic
  // deferredPrompt: any;
  // showButton = false;
  // showIosBanner = false;
  // isIos: boolean;

  constructor(
    private swUpdate: SwUpdate,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  closeApp() {
    window.close();
    this.menu.close();
  }

  ngOnInit(): void {
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.available.subscribe(() => {
    //     if (confirm('New version available. Load new version?')) {
    //       window.location.reload();
    //     }
    //   });
    // }

    // // Checks if should display install popup notification:
    // this.isIos = this.checkIsIos();
    // if (this.isIos && !this.isInStandaloneMode()) {
    //   // this.showIosInstall();
    //   this.showIosBanner = true;
    // }
  }

  // @HostListener('window:beforeinstallprompt', ['$event'])
  // onbeforeinstallprompt(e) {
  //   console.log(e);
  //   // Prevent Chrome 67 and earlier from automatically showing the prompt
  //   e.preventDefault();
  //   // Stash the event so it can be triggered later.
  //   this.deferredPrompt = e;
  //   this.showButton = true;
  // }

  // addToHomeScreen() {
  //   // hide our user interface that shows our A2HS button
  //   this.showButton = false;
  //   // Show the prompt
  //   this.deferredPrompt.prompt();
  //   // Wait for the user to respond to the prompt
  //   this.deferredPrompt.userChoice
  //     .then((choiceResult) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         console.log('User accepted the A2HS prompt');
  //       } else {
  //         console.log('User dismissed the A2HS prompt');
  //       }
  //       this.deferredPrompt = null;
  //     });
  // }

  // showIosInstall = () => {
  //   const iosPrompt: any = document.querySelector('.ios-prompt');
  //   iosPrompt.addEventListener('click', () => {
  //     iosPrompt.style.display = 'none';
  //   });
  // }

  // // Detects if device is on iOS
  // checkIsIos = () => {
  //   const userAgent = window.navigator.userAgent.toLowerCase();
  //   return /iphone|ipad|ipod/.test( userAgent );
  // }
  // // Detects if device is in standalone mode
  // isInStandaloneMode = () => ('standalone' in (<any> window).navigator) && ((<any> window).navigator.standalone);

}
