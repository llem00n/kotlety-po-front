import { City } from './city.model';
import { Sex } from './sex.model'
import { Tag } from './tag.model';

export class User {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public birthDate: Date,
    public sex: Sex,
    public city: City,
    public isDeleted: boolean,
    public likedEvents: Array<Event>,
    public preferredTags: Array<Tag>,
  ) { }
}