import React, { useState, useRef } from 'react';

import { AppProvider } from './components';
import { theme } from './tokens';
import { Header } from './Header';
import { Content } from './Content/Content';
import { Footer } from './Footer';
import { PageProvider } from './PageContext';

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const refArray = useRef([]);

  const changePage = (newPageIndex) => {
    if (newPageIndex < 0 || newPageIndex > 6) return;

    setPageIndex(newPageIndex);
    refArray.current[newPageIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <AppProvider theme={theme}>
      <PageProvider
        setPageIndex={changePage}
        pageIndex={pageIndex}
        refArray={refArray.current}
      >
        <Header />
        <Content />
        <Footer />
      </PageProvider>
    </AppProvider>
  );
};

export default App;
