import { FollowerPage } from './../follower/follower';
//import { EditprofilePage } from './../editprofile/editprofile';
import { LoginproProvider } from './../../providers/loginpro/loginpro';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { user_class } from '../login/user_class';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { follower_class } from '../../shared/follower_class';
import { FollowingPage } from '../following/following';

/**
 * Generated class for the ViewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewuser',
  templateUrl: 'viewuser.html',
})
export class ViewuserPage {

  
  followingcount:number;
  followercount:number;
  followers:follower_class[]=[];
  followings:follower_class[]=[];
  ed: any = "";
  u: user_class[] = [];
  eid: string = "";
  uid: string = "";
  img:string="";
  pet: string = "kittens";
  isAndroid: boolean = false;
  constructor(public data: LoginproProvider, public load: LoadingController, public storage: Storage, platform: Platform, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }
user_id:string="";
us_id:string="";
iffo:string="";
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewuserPage');
    this.storage.get('viewid').then((val)=>{
      this.uid=val;
      this.user_id=val;
      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      
      this.storage.get('uid').then((val)=>
       {
            this.us_id=val;
            this.data.iffollowing(this.user_id,this.us_id).subscribe(
        
            (ft:any[])=>{
          if(ft!=null)
          {
            this.iffo="yes";
          }
          else
          {
            this.iffo="no";
          }
        }
      );
    });

      this.data.getUser(this.uid).subscribe(
        (dt: user_class[]) => {
        this.u = dt;
        this.eid = this.u[0].user_name;
        this.img=this.u[0].user_pic;
        },
        function (e) { 
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      );
      this.data.getFollowers(this.uid).subscribe(
        (ft:any)=>
        {
          if(ft!=="")
          {
            this.followers=ft;
            this.followercount=this.followers.length;
          }
        },
      );
      this.data.getFollowing(this.uid).subscribe(
        (fl:any)=>{
          if(fl!="")
          {
            this.followings=fl;
            this.followingcount=this.followings.length;
          }
        }
      );
    })
    
    //this.data.set_url();
    
    
  }
  id:string="";
  onFollower()
  {
    //this.storage.get('uid').then((val)=>{this.id;
      //alert(this.uid);
      this.navCtrl.push(FollowerPage,{uid:this.uid});
   // });
  }

  onfollow()
  {
    this.storage.get('viewid').then((val)=>{

      this.user_id=val;
      this.storage.get('uid').then((val)=>{
        this.us_id=val;
        this.data.insertfollower(this.user_id,this.us_id).subscribe(
          (dt:any[])=>{
            alert("done");
          },
          function(e)
          {
            alert(e);
          }
        );
      });
    });
  }
  onunfollow()
  {
    this.storage.get('viewid').then((val)=>{

      this.user_id=val;
      this.storage.get('uid').then((val)=>{
        this.us_id=val;
        this.data.deletefollower(this.user_id,this.us_id).subscribe(
          (dt:any[])=>{
            alert("done");
          },
          function(e)
          {
            alert(e);
          }
        );
      });
    });
  }
  onFollowing()
  {
    this.navCtrl.push(FollowingPage,{uid:this.uid});
  }
}