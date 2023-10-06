import { beautyPackageType } from './beautyPackage';
import { userType } from './user';

export type bookingType = {
  user: userType;
  beautyPackage: beautyPackageType;
};
