import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Lucas T. Sampaio",
    data: "March 1, 2018",
    descricao: "Curtindo uma viagem. Que natureza bela!",
    qntd_likes: "12 Likes",
    qntd_comments: "4 Comments",
    time_comment: "11h ago"

  }

  public nome_usuario: string = "Lucas T. Sampaio";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10,7);
  }

}
