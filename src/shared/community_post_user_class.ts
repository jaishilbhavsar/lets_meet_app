import { DateTime } from "ionic-angular/components/datetime/datetime";

export class Community_Post_User_Class {
    constructor(public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_pic: string,
        public comm_date: DateTime,
        public comm_rating: number,
        public created_by: string,
        public post_id: number,
        public post_title: string,
        public post_des: string,
        public post_pic: string,
        public post_date: DateTime,
        public fk_user_id: string,
        public fk_comm_id: number,
        public user_id: string,
        public user_name: string,
        public user_pass: string,
        public user_pic: string,
        public gender: string,
        public user_mob_no: string,
        public user_bdate: DateTime,
        public token: string,
        public verify: string) {

    }
}