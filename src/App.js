import { useTranslation } from 'react-i18next';
import './App.css';
import Routing from './Router/Routing';

function App() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <div className="App">
      <button onClick={() => handleLanguageChange('eng')}>Eng</button>
      <button onClick={() => handleLanguageChange('ru')}>Rus</button>

      <div>
        {
          t("text")
        }
        <Routing />
      </div>
    </div>
  );
}

export default App;
