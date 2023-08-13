import { Friend } from './Friend.ts';

export interface Foaf {
  name: string,
  title: string,
  firstName: string,
  lastName: string,
  nickname: string,
  email: string,
  homepage: string,
  pictureUrl: string,
  phoneNumber: string,
  workHomepage: string,
  workDescription: string,
  schoolHomepage: string,
  peopleYouKnow: Friend[]
}
