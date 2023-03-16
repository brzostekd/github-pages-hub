import getData from "./Api";
import s1 from "./images/s1.png";
import s2 from "./images/s2.png";
import { BioType, PrivateData, ProjectCardProps } from "./types";

const BioPL: BioType = {
  name: "Daniel Brzostek",
  bioGreeting: "Witaj!",
  bioText: `          Jestem programistą, szukającym pierwszej pracy jako junior w IT. Jestem bardzo zmotywowany, by rozwijać swoje umiejętności i zdobywać doświadczenie w pracy z technologiami frontendowymi i backendowymi.
                    
          Pomimo braku doświadczenia zawodowego, stworzyłem już dwie aplikacje internetowe, które zostały opisane poniżej. Korzystałem z nowych struktur funkcjonalnych, contextów, stanów i reducerów, aby zapewnić wydajność i funkcjonalność dla użytkowników.

          Jako programista, jestem bardzo skrupulatny i dbam o szczegóły, szczególnie jeśli chodzi o tworzenie kodu i dokumentacji. Jestem zawsze otwarty na nowe wyzwania i szybko uczę się nowych technologii, co pozwoliło mi stworzyć poniższe projekty w krótkim czasie.`,
};

const ProjectsDataPL: Omit<ProjectCardProps, "placeImgFirst">[] = [
  {
    imgSrc: s2,
    cardTitle: "Template Hero",
    about: `        Template Hero to aplikacja webowa pozwalająca użytkownikom na tworzenie szablonów dokumentów przy użyciu języka Jinja2 i wypełnianie ich danymi. Frontend został napisany z wykorzystaniem Reacta, Chakra UI i Axios.
    
          Użytkownik może tworzyć i edytować szablony w panelu template, a po wypełnieniu formularza, dane są wysyłane do serwera i wykorzystywane do wypełnienia szablonu. Projekt oferuje wiele funkcjonalności i obsługuje błędy.`,
    stacks: [
      {
        stackType: "Frontend" as const,
        about:
          "Na front-endzie użyłem Reacta, Chakra UI oraz biblioteki Axios do obsługi żądań HTTP.",
        technology: ["TypeScript", "React", "Chakra UI", "Formik", "Axios"],
      },
      {
        stackType: "Backend" as const,
        about: `Projekt wykorzystuje fastapi jako framework webowy do tworzenia API, a także Jinja2 i Jinja2schema do tworzenia szablonów dokumentów i generowania opisów danych w formacie JSON Schema.`,
        technology: ["Python", "FastAPI", "Jinja2", "Jinja2Schema"],
      },
    ],
    links: [
      {
        link: "https://brzostekd.github.io/Template-Hero/index.html",
        colorScheme: "green",
        text: "Zobacz projekt online",
      },
      {
        link: "https://github.com/brzostekd/Template-Hero",
        colorScheme: "blue",
        text: "Zobacz na GitHubie",
      },
    ],
  },

  {
    imgSrc: s1,
    cardTitle: "Future Perfect",
    about: `          Future Perfect to aplikacja internetowa, pozwalająca na zarządzanie czasem i osiąganie celów z wykorzystaniem techniki pomodoro. Użytkownicy tworzą cele i zadania, a następnie zaznaczają ich postęp, wykorzystując minutnik pomodoro. Aplikacja umożliwia także ustawianie priorytetów i śledzenie postępu w osiąganiu celów.

          Projekt został napisany w TypeScript, React oraz ChakraUI. Future Perfect wykorzystuje context, state oraz reducery i jest idealnym narzędziem dla osób, które chcą efektywnie zarządzać swoim czasem i osiągać cele.`,
    stacks: [
      {
        stackType: "Frontend" as const,
        technology: [
          "TypeScript",
          "React",
          "Chakra UI",
          "Formik (do tworzenia dynamicznych formularzy)",
          "Local Storage (do przechowywania danych po stronie klienta)",
        ],
      },
    ],
    links: [
      {
        link: "https://brzostekd.github.io/Future-Perfect/index.html",
        colorScheme: "green",
        text: "Zobacz projekt online",
      },
      {
        link: "https://github.com/brzostekd/Future-Perfect",
        colorScheme: "blue",
        text: "Zobacz na GitHubie",
      },
    ],
  },
];
const BioEN: BioType = {
  name: "Daniel Brzostek",
  bioGreeting: "Hello!",
  bioText: `          I am a software developer looking for my first job as a junior in IT. I am highly motivated to develop my skills and gain experience working with frontend and backend technologies.
                    
          Despite my lack of professional experience, I have already developed two web applications, which are described below. I have used new functional structures, contexts, states and reducers to provide performance and functionality for users.

          As a programmer, I am very meticulous and pay attention to detail, especially when it comes to creating code and documentation. I am always open to new challenges and learn new technologies quickly, which has allowed me to create my projects in a short period of time.`,
};

const ProjectsDataEN: Omit<ProjectCardProps, "placeImgFirst">[] = [
  {
    imgSrc: s2,
    cardTitle: "Template Hero",
    about: `          Template Hero is a web application that allows users to create document templates using the Jinja2 language and fill them with data. The frontend was written using React, Chakra UI and Axios.
    
          Users can create and edit templates in the template panel, and after filling out a form, the data is sent to the server and used to populate the template. The project offers a lot of functionality and supports errors.`,
    stacks: [
      {
        stackType: "Frontend" as const,
        about:
          "On the front-end, I used React, Chakra UI and the Axios library to handle HTTP requests.",
        technology: ["TypeScript", "React", "Chakra UI", "Formik", "Axios"],
      },
      {
        stackType: "Backend" as const,
        about: `The project uses fastapi as a web framework to create APIs, as well as Jinja2 and Jinja2schema to create document templates and generate JSON Schema data descriptions`,
        technology: ["Python", "FastAPI", "Jinja2", "Jinja2Schema"],
      },
    ],
    links: [
      {
        link: "https://brzostekd.github.io/Template-Hero/index.html",
        colorScheme: "green",
        text: "View project online",
      },
      {
        link: "https://github.com/brzostekd/Template-Hero",
        colorScheme: "blue",
        text: "See on GitHub",
      },
    ],
  },

  {
    imgSrc: s1,
    cardTitle: "Future Perfect",
    about: `          Future Perfect is a web application that allows users to manage time and achieve goals using the pomodoro technique. Users create goals and tasks and then mark their progress using a pomodoro timer. The application also allows users to set priorities and track their progress toward goals.

          The project was written in TypeScript, React and ChakraUI. Future Perfect uses context, state and reducers and is an ideal tool for people who want to effectively manage their time and achieve goals.`,
    stacks: [
      {
        stackType: "Frontend" as const,
        technology: [
          "TypeScript",
          "React",
          "Chakra UI",
          "Formik (for creating dynamic forms)",
          "Local Storage (for client-side data storage).",
        ],
      },
    ],
    links: [
      {
        link: "https://brzostekd.github.io/Future-Perfect/index.html",
        colorScheme: "green",
        text: "View project online",
      },
      {
        link: "https://github.com/brzostekd/Future-Perfect",
        colorScheme: "blue",
        text: "See on GitHub",
      },
    ],
  },
];

export { BioPL, BioEN, ProjectsDataPL, ProjectsDataEN };
