window.contentLandingPage = [
  { module: "TitleWithRegisterForm",
    contents: {
      title: "Die Stadt Ede und ihre gesamte Verwaltung. Für Sie erreichbar auf einer einzigen Plattform.",
      text:
        "Die Stadtverwaltung Ede bietet mit diesem Angebot eine einheitliche Plattform um auf alle Dienstleistungen der Stadtverwaltung zugreifen zu können. Außerdem haben Sie die Möglichkeit, mit allen Ämtern direkt zu kommunizieren und Ihre Anliegen schnell, unkompliziert und ohne großen Aufwand direkt online zu klären.",
      formTitle: "Registrieren Sie sich gleich jetzt und nutzen Sie die digitalen Serviceangebote der Stadt Ede.",
      buttonAdditionalText: 'Durch das Klicken auf den Button "Jetzt Registrieren" bestätigen Sie, dass Sie mit unseren allgemeinen Benutzungsbedingungen einverstanden sind.',
      buttonText: "Jetzt Mitglied werden"
    },
    pictures: {
      background: {
        src: "https://source.unsplash.com/I4dPa7EVeaM",
        positionX: "100%",
        positionY: "50%"
      },
      motiv: {
        // src: "gfx/flieger-junge.png"
      }
    },
    inputFields: [
      {
        inputType: "text",
        label: "Ihr Name"
      },
      {
        inputType: "email",
        label: "Ihre Email Adresse"
      },
      {
        inputType: "password",
        label: "Vergeben Sie Ihr Passwort"
      },
      {
        inputType: "password",
        label: "Wiederholen Sie Ihr Passwort"
      }
    ]
  },
  { module: "KeyFeatures",
    features: [
      {
        title: "Ihre Stadt. Digital.",
        text: "Es ist wie ein digitales Rathaus: Besuchen Sie alle Ämter online, erledigen Sie ihre Aufgaben und nehmen Sie die Services Ihrer Stadt in Anspruch. All dies ist nur ein Mausklick weit entfernt.",
        icon: "location_city",
        button: {
          text: "Registrieren Sie sich jetzt",
          url: "#register-form"
        }
      },
      {
        title: "Stellen Sie Ihre Anfrage.",
        text: "Sie haben ein Anliegen, brauchen eine bestimmte Bescheinigung, möchten eine Beantragung machen? Nehmen Sie jetzt unkompliziert und schnell mit dem richtigen Amt und dem richtigen Ansprechpartner Kontakt auf.",
        icon: "question_answer",
        button: {
          text: "Registrieren Sie sich jetzt",
          url: "#register-form"
        }
      }
    ]
  },
  { module: "SlideStatement",
    title: "Nutzen Sie die Serviceangebote der Stadt Ede: Einfach, schnell, online.",
    background: {
      src: "https://source.unsplash.com/UbGYPMbMYP8",
      positionX: "50%",
      positionY: "50%"
    }
  },
];
