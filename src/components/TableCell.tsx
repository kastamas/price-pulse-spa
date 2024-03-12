import { FC, ReactNode } from 'react';

interface ComponentProps {
  children: ReactNode;
  className?: string;
}

const TableCell: FC<ComponentProps> = ({ children, className }) => {
  return (
    <td className={`px-6 py-4 whitespace-nowrap ${className}`}>{children}</td>
  );
};

export default TableCell;
