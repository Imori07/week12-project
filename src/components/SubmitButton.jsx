'use client';

import { useFormStatus } from 'react-dom';

const SubmitButton = ({ text, classNames }) => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' className={classNames}>
      {pending ? 'Submitting...' : text}
    </button>
  );
};

export default SubmitButton;
