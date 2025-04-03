import 'antd/dist/reset.css'; // Import Ant Design CSS
import {  Layout } from 'antd';
import './App.css';
import AppHeader from './components/common/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHome from './pages/home';
import AppAbout from './pages/about';
import AppContact from './pages/contact';
import AppShop from './pages/shop';
import AppFaq from './pages/faq';
import FooterCopyRight from './components/common/footerCopyRight';
import FooterWidget from './components/common/footerWidget';

const { Header, Footer,  Content } = Layout;



function App() {
  return (
    <div className="App">

  <Layout>
    <Router>
    <Header>
        <AppHeader />
      </Header>
      <Content>
        <Routes>
          <Route path='/' element={<AppHome/>} ></Route>
          <Route path='/about' element={<AppAbout/>} ></Route>
          <Route path='/contact' element={<AppContact/>} ></Route>
          <Route path='/shop' element={<AppShop/>} ></Route>
          <Route path='/faq' element={<AppFaq/>} ></Route>
        </Routes>
      </Content>
    </Router>
      <Footer>
        <FooterWidget/>
        <FooterCopyRight/>
      </Footer>

    </Layout>
    </div>
  );
}

export default App;
