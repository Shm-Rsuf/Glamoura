import { data } from '@/data/packages';
import HorizontalTab from '../ui/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from './PackageItem';
import Link from 'next/link';
import { cn } from '@/library/utils';
import { buttonVariants } from '../ui/Button';
import { packageItem } from '@/types/packageItem';
import { FC } from 'react';

interface PackagesProps {
  fromPackagePage?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ fromPackagePage }) => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle
        title='packages'
        subtitle='Explore our package section'
        color='bg-violet'
      />
      {/* Packages */}
      <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* Wellness */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              ?.filter(
                (item: packageItem) => item.masterCategory === 'Wellness'
              )
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}

          {fromPackagePage &&
            data
              ?.filter(
                (item: packageItem) => item.masterCategory === 'Wellness'
              )
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>

        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              ?.filter((item: packageItem) => item.masterCategory === 'Beauty')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}

          {fromPackagePage &&
            data
              ?.filter((item: packageItem) => item.masterCategory === 'Beauty')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>

        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              ?.filter((item: packageItem) => item.masterCategory === 'Events')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}

          {fromPackagePage &&
            data
              ?.filter((item: packageItem) => item.masterCategory === 'Events')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
      </HorizontalTab>
      {!fromPackagePage && (
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
