import { FoafDetails } from '../interfaces/FoafDetails.ts';
export const checkIfPersonalDataExists = (data: FoafDetails | null): boolean => {
  if (!data) return false;
  switch (true) {
    case !!data.title:
    case !!data.name:
    case !!data.firstName:
    case !!data.givenName:
    case !!data.givenname:
    case !!data.surname:
    case !!data.lastName:
    case !!data.familyName:
    case !!data.family_name:
    case !!data.nick:
    case !!data.age:
    case !!data.birthday:
    case !!data.gender:
    case !!data.mboxes:
    case !!data.phones:
    case !!data.basedNear:
    case !!data.myersBriggs:
    case !!data.interests:
    case !!data.homepage:
    case !!data.page:
    case !!data.weblog:
    case !!data.depiction:
    case !!data.images:
      return true;
    default:
      return false;
  }
};

export const checkIfSchoolDataExists = (data: FoafDetails | null): boolean => {
  return !!data?.schoolHomepage || false;
};

export const checkIfWorkDataExists = (data: FoafDetails | null): boolean => {
  if (!data) return false;
  switch (true) {
    case !!data.workplaceHomepage:
    case !!data.workInfoHomepage:
      return true;
    default:
      return false;
  }
};

export const checkIfPortfolioDataExists = (data: FoafDetails | null): boolean => {
  if (!data) return false;
  switch (true) {
    case !!data.currentProject:
    case !!data.pastProject:
    case !!data.madeList:
    case !!data.publications:
      return true;
    default:
      return false;
  }
};

export const checkIfAccountsDataExists = (data: FoafDetails | null): boolean => {
  if (!data) return false;
  switch (true) {
    case !!data.accounts:
    case !!data.aimChatID:
    case !!data.icqChatID:
    case !!data.jabberID:
    case !!data.msnChatID:
    case !!data.openID:
    case !!data.skypeID:
    case !!data.yahooChatID:
      return true;
    default:
      return false;
  }
};

export const checkIfSupportDataExists = (data: FoafDetails | null): boolean => {
  return !!data?.tipJar || false;
};
