export class follow_user_class
{
    constructor(public user_id:string,
        public user_name:string,
        public user_pass:string,
        public user_pic:string,
        public gender:string,
        public user_mob_no:number,
        public user_bdate:Date,
        public token:string,
        public verify:string,
        public follow_id:number,
        public fk_user_id:string,
        public fk_us_id:string)
    {

    }
}