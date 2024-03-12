import { FC, ReactNode } from 'react';

interface ComponentProps {
  children: ReactNode;
}

const TableHeader: FC<ComponentProps> = ({ children }) => {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );
};

export default TableHeader;
