import HorizontalTab from '../shared/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle
        title='packages'
        subtitle='Explore our package section'
        color='bg-green'
      />
      <HorizontalTab tabs={['tab 1', 'tab 2', 'tab 3']}>
        <p>Tab 1 content</p>
        <p>Tab 2 content</p>
        <p>Tab 3 content</p>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
