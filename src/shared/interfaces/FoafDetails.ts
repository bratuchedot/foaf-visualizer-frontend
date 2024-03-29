import { KnowsDetails } from './KnowsDetails.ts';

export interface FoafDetails {
  accounts: string[],
  age: string,
  aimChatID: string,
  basedNear: string,
  birthday: string,
  currentProject: string,
  depiction: string,
  familyName: string,
  family_name: string,
  firstName: string,
  gender: string,
  givenName: string,
  givenname: string,
  homepage: string,
  icqChatID: string,
  images: string[],
  interests: string[],
  jabberID: string,
  knows: KnowsDetails[],
  lastName: string,
  madeList: string[],
  mboxes: string[],
  mboxSha1sums: string[],
  msnChatID: string,
  myersBriggs: string,
  name: string,
  nick: string,
  openID: string,
  page: string,
  pastProject: string,
  phones: string[],
  publications: string[],
  schoolHomepage: string,
  skypeID: string,
  surname: string,
  tipJar: string,
  title: string,
  weblog: string,
  workInfoHomepage: string,
  workplaceHomepage: string,
  yahooChatID: string
}
