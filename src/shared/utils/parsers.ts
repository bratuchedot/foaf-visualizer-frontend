export const parseEmails = (emailArray: string[]): string[] => {
  return emailArray.map((email) => email.replace('mailto:', ''));
};

export const parsePhones = (phoneArray: string[]): string[] => {
  return phoneArray.map((phone) => phone.replace('tel:', ''));
};
