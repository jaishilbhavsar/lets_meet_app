
import { DateTime } from "ionic-angular/components/datetime/datetime";

export class Community_Class {
    constructor(public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_pic: string,
        public comm_date: DateTime,
        public comm_rating: number,
        public created_by: string,
        public comm_fk_cat_id: number
    ) {

    }
}

export class Update_Community_Class {
    constructor(public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_fk_cat_id: number) {

    }
}

export class update_rate_only{
    constructor(public comm_id:number,
                public comm_rating:number){
                    
                }
}