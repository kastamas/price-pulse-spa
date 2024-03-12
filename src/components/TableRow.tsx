import { FC, ReactNode } from 'react';

interface ComponentProps {
  children: ReactNode;
}

const TableRow: FC<ComponentProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default TableRow;
