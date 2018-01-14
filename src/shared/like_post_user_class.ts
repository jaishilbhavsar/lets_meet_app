import { DateTime } from "ionic-angular";

export class Like_Post_User_Class {
    constructor(
        public like_id: number,
        public like_fk_post_id: number,
        public like_fk_user_id: string,

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
        public user_bdate: Date,
        public token: string,
        public verify: string
    ) {

    }
}