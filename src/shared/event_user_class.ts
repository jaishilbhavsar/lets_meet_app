import { DateTime } from "ionic-angular/components/datetime/datetime";

export class Events_User_Class {
    constructor(public event_id: number,
        public event_name: string,
        public event_des: string,
        public event_pic: string,
        public event_s_time: DateTime,
        public event_e_time: DateTime,
        public event_date: DateTime,
        public event_loc: string,
        public fk_user_id: string,
        public fk_comm_id: number,
        public event_verify: string,

        public user_id: string,
        public user_name: string,
        public user_pass: string,
        public user_pic: string,
        public gender: string,
        public user_mob_no: string,
        public user_bdate: DateTime,
        public token: string,
        public verify: string
    ) {

    }
}