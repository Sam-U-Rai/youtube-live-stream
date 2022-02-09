import React, { useEffect } from 'react';

interface IPage {
  children?: React.ReactNode;
  title?: string;
}

const Page = ({ children, title = 'Not Found' }: IPage): React.ReactElement => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <>{children}</>;
};

export default Page;
