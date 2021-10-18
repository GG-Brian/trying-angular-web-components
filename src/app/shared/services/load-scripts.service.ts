import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

  constructor() { }

  LoadUs (files: string [] ){
    for (let file of files){
      let scriptUs = document.createElement("script");
      scriptUs.src = "./assets/js/info/" + file + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(scriptUs);
    }
  }

  LoadCatalog (files: string [] ){
    for (let file of files){
      let scriptMenu = document.createElement("script");
      scriptMenu.src = "./assets/js/menu/" + file + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(scriptMenu);
    }
  }

}