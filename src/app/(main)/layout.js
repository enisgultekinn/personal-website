import { Header } from '@/components';

export default function WithHeaderLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
