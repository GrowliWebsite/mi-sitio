'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({ variant = 'primary', className, ...rest }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        'rounded-xl2 px-6 py-3 font-semibold transition',
        variant === 'primary'
          ? 'bg-brand text-white hover:bg-brand-hover'
          : 'bg-white text-brand ring-2 ring-brand hover:bg-gray-50',
        className,
      )}
      {...rest}
    />
  );
}
