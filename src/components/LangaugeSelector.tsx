import { ChangeEvent } from "react"
import i18n from "../i18n";

export function LanguageSelector() {
    const langs = [
        { code: 'en', label: 'English '},
        { code: 'pl', label: 'Polski' },
    ]

    const handleLanguageChange = (e: ChangeEvent): void => {
        e.preventDefault();
        const element = e.target as HTMLSelectElement;
        const code = element.value;

        i18n.changeLanguage(code);
    }

    return (
        <>
            <select className="form-control flex-grow-1 w-auto" onChange={handleLanguageChange} data-testid="language-selector">
                {langs.map(lang => <option key={lang.code} value={lang.code} selected={lang.code === i18n.language}>{lang.label}</option>)}
            </select>
        </>
    )

}