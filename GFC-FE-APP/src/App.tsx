import './App.scss';
import { Header } from './components/Header/Header';
import Mainbody from './components/Mainbody/Mainbody';
import Templates from './components/Mainbody/Templates';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FormHeader from './components/ConfigureQuestionPaper/FormHEader';
import CenteredTabs from './components/common/Tabs';
import { ROUTE_PATHS } from './utils/constants';
import { ThemeProvider } from './components/contexts/themeContext';
import { Toaster } from 'react-hot-toast';
import { DocumentContextProvider } from 'components/contexts/questions-context';
import { DocumentsNameContextProvider } from 'components/contexts/documents-context';
import { GuideProvider } from 'components/contexts/guide-context';

function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <BrowserRouter>
        <DocumentsNameContextProvider>
          <GuideProvider>
            <Routes>
              {/* login page */} 
              <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />

              {/* main page to display templates and documents */} 
              <Route
                path={ROUTE_PATHS.HOME}
                element={
                  <>
                    <Header />
                    <Templates />
                    <Mainbody />
                  </>
                }
              />

              {/* displays the document questions, no authentication required */} 
              <Route
                path={ROUTE_PATHS.QUESTION_PAPER}
                element={
                  <DocumentContextProvider>
                    <ThemeProvider>
                      <FormHeader />
                      <CenteredTabs />
                    </ThemeProvider>
                  </DocumentContextProvider>
                }
              />

              {/* navigates to home page if user visits invalid route */}
              <Route path={"*"} element={<Navigate to={ROUTE_PATHS.HOME} replace />} />
            </Routes>
          </GuideProvider>
        </DocumentsNameContextProvider>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
