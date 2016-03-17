import {Page} from 'ionic-angular';
var Firebase = require('firebase');

@Page({
  templateUrl: 'build/pages/page1/page1.html'
})

export class Page1 {
  constructor() {
    let fireRef = new Firebase("https://100meter.firebaseio.com/");
    console.log(fireRef);
  }

  addLog() {
    console.log("add item to db");
    console.log(this.fireRef);
  }
}