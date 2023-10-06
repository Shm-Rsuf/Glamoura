import { PuffLoader } from 'react-spinners';
interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div className='flex items-center justify-center'>
      <PuffLoader color='#32B8CB' size={70} loading={isLoading} />
    </div>
  );
};

export default Loading;
