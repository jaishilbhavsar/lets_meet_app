import { DateTime } from "ionic-angular/components/datetime/datetime";

export class Comment_Class {
    constructor(public com_id: number,
        public com_date: DateTime,
        public com_des: string,
        public fk_post_id: number,
        public com_fk_user_id: string) {

    }
}