import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import Faq from './components/Faq';
import Download from './components/Download';
import Contact from './components/Contact';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Open Sans, Roboto, sans-serif"
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
