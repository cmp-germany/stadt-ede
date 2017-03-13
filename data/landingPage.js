window.contentLandingPage = [
  { module: "TitleWithRegisterForm",
    contents: {
      title: "The city of Ede and its whole administration. Available for you at a single platform.",
      text:
        "The public administration of Ede offers you a unified platform to access all services from the government of Ede. Moreover you get the ability to communicate with all the departments of the city of Ede directly. This will enable you to clarify your concerns with the public authorities in a fast, uncomplicated and less time consuming way.",
      formTitle: "Register Now and use the digital services offered by the city of Ede.",
      buttonAdditionalText: 'By clicking on the button "Register Now", you confirm that you agree to our general terms of use.',
      buttonText: "Register Now"
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
        label: "Your Name"
      },
      {
        inputType: "email",
        label: "Your Email Adress"
      },
      {
        inputType: "password",
        label: "Create a Password"
      },
      {
        inputType: "password",
        label: "Repeat Password"
      }
    ]
  },
  { module: "KeyFeatures",
    features: [
      {
        title: "Your City. Digital.",
        text: "It is like a digital city hall: visit all offices online, do your tasks and take the services of your city. All of this will only take a few mouse clicks.",
        icon: "location_city",
        button: {
          text: "Register Now",
          url: "#register-form"
        }
      },
      {
        title: "Make your request.",
        text: "You have a request, need a specific certificate, would like to make an application? Get in contact with the right office and the right contact quickly and easily.",
        icon: "question_answer",
        button: {
          text: "Register Now",
          url: "#register-form"
        }
      }
    ]
  },
  { module: "SlideStatement",
    title: "Take advantage of the services offered by the city of Ede: simple, fast, online.",
    background: {
      src: "https://source.unsplash.com/UbGYPMbMYP8",
      positionX: "50%",
      positionY: "50%"
    }
  },
];
