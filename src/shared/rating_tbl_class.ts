export class Rate_Class {
    constructor(public rate_id: number,
        public rate_value: number,
        public rate_fk_comm_id: number,
        public rate_fk_user_id:string) {

    }
}