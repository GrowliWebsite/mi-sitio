import { ReactNode } from 'react';
import clsx from 'clsx';

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'rounded-xl2 bg-white p-6 shadow-sm transition hover:shadow-md',
        className,
      )}
    >
      {children}
    </div>
  );
}
