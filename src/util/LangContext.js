import React from 'react';
import { eng, kor } from './texts'

const LangContext = ({ children }) => {
    const LanguageContext = React.createContext(eng)
};
const Provider = {
}

export default LangContext;