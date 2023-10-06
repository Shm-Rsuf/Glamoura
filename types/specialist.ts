import { beautyPackageType } from './beautyPackage';

export type specialistType = {
  _id: string;
  name: string;
  designaion: string;
  bio: string;
  photoUrl: string;
  dateOfBirth: string;
  beautyPackages: beautyPackageType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
