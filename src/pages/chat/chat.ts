import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var io;
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  message = "";
  socket : any;
  @ViewChild('messages')   msgsArea : ElementRef;
  @ViewChild('message')   msgArea : ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private el: ElementRef) {
  }

  ionViewDidLoad() {

  }
  ngAfterViewInit() {
    try {
      this.socket = io("http://mounsif.me:10/");
    }
    catch (e) {
      return false;
    }
    this.socket.on('chat message', function (data) {
      var para = document.createElement("p");
      para.innerHTML=data.msg;
      document.querySelector("#messages").appendChild(para);
      //this.msgsArea.nativeElement.insertAdjacentHTML('beforeend', '<div class="two">two</div>');
    });
  }
  send(){
     this.socket.emit('chat message', {
      msg: this.msgArea.nativeElement.value
    });
    
    this.msgArea.nativeElement.value = "";
    //console.log(this.msgArea.nativeElement.value);
    return false;
  }

}
