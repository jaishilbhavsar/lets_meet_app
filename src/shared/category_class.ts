import { DateTime } from "ionic-angular/components/datetime/datetime";
export class Category_class {
    constructor(public cat_id: number,
        public cat_name: string,
        public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_pic: string,
        public comm_date: DateTime,
        public comm_rating: number,
        public created_by: string) {

    }
}
export class Category_Class {
    constructor(public cat_id: number,
        public cat_name: string) {

    }
}