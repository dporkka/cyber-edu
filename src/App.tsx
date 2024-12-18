import { BrowserRouter } from 'react-router-dom';
import { Routes } from '@/routes';
import { Layout } from '@/components/layout/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}