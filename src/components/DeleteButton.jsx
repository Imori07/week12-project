'use client';

import { useFormStatus } from 'react-dom';

const DeleteButton = ({ text, classNames }) => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' className={classNames} disabled={pending}>
      {pending ? 'Deleting...' : text}
    </button>
  );
};

export default DeleteButton;
