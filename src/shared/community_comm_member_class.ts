export class Community_comm_member {

    constructor(
        public join_id: number,
        public fk_user_id: string,
        public fk_comm_id: number,
        public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_pic: string,
        public comm_date: Date,
        public comm_rating: number,
        public created_by: string,
      ) {

    }
}