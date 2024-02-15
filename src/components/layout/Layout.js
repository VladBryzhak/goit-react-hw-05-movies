import { Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';
import { Navigation } from '../Navigation/Navigation';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}