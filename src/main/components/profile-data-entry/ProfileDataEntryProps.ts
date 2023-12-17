import FoafOptions from '../../../shared/enums/FoafOptions.ts';

export interface ProfileDataEntryProps{
  option: FoafOptions;
  value: string | string[];
  link?: boolean;
}
