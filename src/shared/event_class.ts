import { DateTime } from "ionic-angular/components/datetime/datetime";

export class Events_Class {
    constructor(public event_id: number,
        public event_name: string,
        public event_des: string,
        public event_pic: string,
        public event_s_time: DateTime,
        public event_e_time: DateTime,
        public event_date:DateTime,
        public event_loc: string,
        public fk_user_id: string,
        public fk_comm_id: number,
        public event_verify: string) {

    }
}

export class Event_update_class {
    constructor(public event_id: number,
        public event_name: string,
        public event_des: string,
        public event_s_time: Date,
        public event_e_time: Date,
        public event_date: Date,
        public event_loc: string,
        public fk_comm_id: number) {

    }
}