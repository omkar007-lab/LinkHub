import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function LoginPage() {
  return (
    <div className=" max-w-xs p-4  mx-auto">
      <h1 className="text-4xl font-bold text-center mb-2">Sign In</h1>
      <p className='mb-6 text-center text-gray-500'>
      Choose your preferred login option to access your account
      </p>
      <button className="bg-white shadwo-md text-center w-full py-4  gap-2 flex justify-center">
        <FontAwesomeIcon icon={faGoogle} className='w-6' />
        Sign In with Google
      </button>
    </div>
  );
}
