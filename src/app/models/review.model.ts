import { Event } from "./event.model";
import { User } from "./user.model";

export class Review {
  constructor(
    public id: number,
    public user: User,
    public event: Event,
    public text: string,
    public rating: number,
    public datetime: Date,
    public isDeleted: boolean,
  ) { }
}