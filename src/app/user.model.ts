export class UserModel{
    constructor(
        public _id: string,
        public UserName: string,
        public Email: string,
        public Phone: string,
        public Gender: string,
        public Age: number
    ){}
}