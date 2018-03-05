import { DateTime } from "ionic-angular";

export class Comm_member_Comm_User_Class {
    public constructor(
       /* public join_id: number,
        public fk_user_id: string,
        public fk_comm_id: number,

        public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_pic: string,
        public comm_date: DateTime,
        public comm_rating: number,
        public created_by: string,*/

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