'use client';

import HorizontalTab from '../ui/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from './PackageItem';
import Link from 'next/link';
import { cn } from '@/library/utils';
import { buttonVariants } from '../ui/Button';

import useFetch from '@/hooks/use-fetch';
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import { beautyPackageType } from '@/types/beautyPackage';

interface PackagesProps {
  fromPackagePage?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ fromPackagePage }) => {
  const {
    data: beautyPackages,
    error,
    isLoading,
  } = useFetch('/api/beauty_packages');

  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle
        title='packages'
        subtitle='Explore our package section'
        color='bg-violet'
      />

      {isLoading && !error && <Loading isLoading={isLoading} />}
      {!isLoading && error && <Error error={error.message} />}

      {/* Packages */}
      {beautyPackages && beautyPackages.length > 0 && (
        <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
          {/* Wellness */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {!fromPackagePage &&
              beautyPackages
                .filter(
                  (item: beautyPackageType) => item.category === 'Wellness'
                )
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 3)
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}

            {fromPackagePage &&
              beautyPackages
                ?.filter(
                  (item: beautyPackageType) => item.category === 'Wellness'
                )
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}
          </div>

          {/* Beauty */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {!fromPackagePage &&
              beautyPackages
                ?.filter(
                  (item: beautyPackageType) => item.category === 'Beauty'
                )
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 3)
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}

            {fromPackagePage &&
              beautyPackages
                ?.filter(
                  (item: beautyPackageType) => item.category === 'Beauty'
                )
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}
          </div>

          {/* Beauty */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {!fromPackagePage &&
              beautyPackages
                ?.filter(
                  (item: beautyPackageType) => item.category === 'Events'
                )
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 3)
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}

            {fromPackagePage &&
              beautyPackages
                ?.filter(
                  (item: beautyPackageType) => item.category === 'Events'
                )
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}
          </div>
        </HorizontalTab>
      )}
      {!fromPackagePage && beautyPackages && beautyPackages.length > 0 && (
        <div className='flex justify-center'>
          <Link
            href='/packages'
            className={cn(buttonVariants({ variant: 'outline' }), 'mt-20')}
          >
            View all packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;
