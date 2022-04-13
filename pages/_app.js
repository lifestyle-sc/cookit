import { RecipeProvider } from '../context/recipeContext';
import { ToastContainer } from 'react-toastify';
import { app } from '../config/firebase.config';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

app()

function MyApp({ Component, pageProps }) {
  return (
    <RecipeProvider>
      <>
        <Component {...pageProps} />
        <ToastContainer />
      </>
    </RecipeProvider>
  );
}

export default MyApp;
