import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss';
import HomePage from './pages/Home';
import PrivacyPage from './pages/PrivacyPage';
import PolicyPage from './pages/PolicyPage';


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/policy" element={<PolicyPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;