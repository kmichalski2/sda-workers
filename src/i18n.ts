import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "employees": "Employees",
            "add": "Add",
            "details": "Details",
            "edit": "Edit",
            "delete": "Delete",
            "search_placeholder": "Type any employee data...",
            "firstname": "Firstname",
            "lastname": "Lastname",
            "salary": "Salary",
            "status": "Status",
            "birthdate": "Birthdate",
            "address": "Address",
            "city": "City",
            "postalcode": "ZIP code",
            "phonenumber": "Phone number",
            "delete_modal_title": "Delete confirmation",
            "delete_modal_text": "Are you sure, you want to delete this employee?",
            "yes": "Yes",
            "no": "No",
            "add_page_title": "Add new employee",
            "details_page_title": "Details",
            "edit_page_title": "Edit employee data",
            "save": "Save",
            "employee_results_one": "Found {{count}} employee",
            "employee_results_other": "Found {{count}} employees",
        }
    },
    pl: {
        translation: {
            "employees": "Pracownicy",
            "add": "Dodaj",
            "details": "Szczegóły",
            "edit": "Edytuj",
            "delete": "Usuń",
            "search_placeholder": "Wyszukaj jakiekolwiek dane pracownika...",
            "firstname": "Imię",
            "lastname": "Nazwisko",
            "salary": "Wynagrodzenie",
            "status": "Status",
            "birthdate": "Data urodzenia",
            "address": "Adres",
            "city": "Miasto",
            "postalcode": "Kod pocztowy",
            "phonenumber": "Numer telefonu",
            "delete_modal_title": "Potwierdzenie usunięcia",
            "delete_modal_text": "Jesteś pewny, że chcesz usunąć tego użytkownika",
            "yes": "Tak",
            "no": "Nie",
            "add_page_title": "Dodaj nowego pracownika",
            "details_page_title": "Szczegóły",
            "edit_page_title": "Edycja danych",
            "save": "Zapisz",
            "employee_results_one": "Znaleziono {{count}} pracownika",
            "employee_results_other": "Znaleziono {{count}} pracowników",
        },
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next).init({
        resources,
        fallbackLng: "en"
    })

export default i18n;