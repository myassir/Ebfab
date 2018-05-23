import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
declare var io;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  socket : any;
  username = "";
  constructor(public navCtrl: NavController) {
  
  }
  
  enterChat(){
    try{
      this.socket = io("http://mounsif.me:10/");
    }
    catch(e){
      return false;
    }
    this.navCtrl.setRoot(ChatPage, {Username: this.username,socket: this.socket},{animate: true});
  }

}
