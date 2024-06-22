import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from './domain/hooks';

const LogoNavigator: React.FC = () => {
  const [, , , refresh, setCurrentPage] = useBooks();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
    navigate('/booklist');
    refresh();
  }, [setCurrentPage, refresh, navigate]);

  return null;
};

export default LogoNavigator;
