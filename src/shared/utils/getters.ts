export const getFirstLetterOfName = (name: string): string => {
  const nameParts = name.trim().split(/\s+/);
  const actualName = nameParts.length > 2 ? nameParts.slice(1).join(' ') : name;
  return actualName.charAt(0).toUpperCase();
};

export const getFirstItemOfArray = <T>(items?: T[]): T | undefined => (items && items.length > 0) ? items[0] : undefined;
