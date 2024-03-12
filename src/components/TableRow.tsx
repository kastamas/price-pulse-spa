import { FC, ReactNode } from 'react';

interface ComponentProps {
  children: ReactNode;
  onClick?: (event: any) => void;
}

const TableRow: FC<ComponentProps> = ({ children, onClick }) => {
  return (
    <tr
      onClick={onClick}
      className={`${
        onClick ? 'cursor-pointer' : 'cursor-default'
      } hover:bg-gray-100 dark:hover:bg-gray-800`}
    >
      {children}
    </tr>
  );
};

export default TableRow;
