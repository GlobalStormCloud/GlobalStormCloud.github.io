import '/assets/js/cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {
            enabled: true
        }
    },

    language: {
        autodetect: 'browser',
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'Cookies',
                    description: 'We use cookies to analyze the usage of our website',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences'
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    sections: [
                        {
                            title: 'Strictly Necessary cookies',
                            description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance and Analytics',
                            description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                            linkedCategory: 'analytics'
                        }
                    ]
                }
            }, 
            pl: {
                consentModal: {
                    title: "Ciasteczka",
                    description: "Używamy plików cookie do analizy korzystania z naszej strony internetowej",
                    acceptAllBtn: "Zaakceptuj wszystkie",
                    acceptNecessaryBtn: "Odrzuć wszystkie",
                    showPreferencesBtn: "Zarządzaj indywidualnymi preferencjami"
                },
                preferencesModal: {
                    title: "Zarządzaj preferencjami plików cookie",
                    acceptAllBtn: "Zaakceptuj wszystkie",
                    acceptNecessaryBtn: "Odrzuć wszystkie",
                    savePreferencesBtn: "Zaakceptuj bieżący wybór",
                    closeIconLabel: "Zamknij okno modalne",
                    sections: [
                        {
                            title: "Pliki cookie Bezwzględnie Konieczne",
                            description: "Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony internetowej i nie mogą być wyłączone.",
        

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: "Wydajność i Analiza",
                            description: "Te pliki cookie gromadzą informacje o tym, jak korzystasz z naszej strony internetowej. Wszystkie dane są anonimizowane i nie można ich użyć do zidentyfikowania Ciebie.",
                            linkedCategory: "analytics"
                        }
                    ]
                }
            }            
        }
    }
});