interface ErrorProps {
  error: string;
}
const Error: React.FC<ErrorProps> = ({ error }) => {
  return <div className='text-center tracking-wider text-red'>{error}</div>;
};

export default Error;
