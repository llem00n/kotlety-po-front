import { City } from "./city.model";
import { Tag } from "./tag.model";

export class Event {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public expiryDate: string,
    public city: City,
    public rating: number,
    public tags: Array<Tag>,
    public imageIds: number[],
  ) { }
}