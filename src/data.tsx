import getData from "./Api";
import s1 from "./images/s1.png";
import s2 from "./images/s2.png";
import { BioType, PrivateData, ProjectCardProps } from "./types";

const Bio: BioType = {
  name: "Daniel Brzostek",
  bioGreeting: "Witaj!",
  bioText: `          Jestem programistą, szukającym pierwszej pracy jako junior w IT. Jestem bardzo zmotywowany, by rozwijać swoje umiejętności i zdobywać doświadczenie w pracy z technologiami frontendowymi i backendowymi.

  Pomimo braku doświadczenia zawodowego, stworzyłem już dwie aplikacje internetowe, które zostały opisane poniżej. Korzystałem z nowych struktur funkcjonalnych, contextów, stanów i reducerów, aby zapewnić wydajność i funkcjonalność dla użytkowników.

  Jako programista, jestem bardzo skrupulatny i dbam o szczegóły, szczególnie jeśli chodzi o tworzenie kodu i dokumentacji. Jestem zawsze otwarty na nowe wyzwania i szybko uczę się nowych technologii, co pozwoliło mi szybko tworzyć moje projekty.`,
};

const ProjectsData: ProjectCardProps[] = [
  {
    imgSrc: s2,
    cardTitle: "Template Hero",
    about: `        Template Hero to aplikacja webowa pozwalająca użytkownikom na tworzenie szablonów dokumentów przy użyciu języka Jinja i wypełnianie ich danymi. Frontend został napisany z wykorzystaniem Reacta, Chakra UI i Axios.
    
  Użytkownik może tworzyć i edytować szablony w panelu template, a po wypełnieniu formularza, dane są wysyłane do serwera i wykorzystywane do wypełnienia szablonu. Projekt oferuje wiele funkcjonalności i obsługuje błędy.`,
    placeImgFirst: false,
    stacks: [
      {
        stackType: "Frontend" as const,
        about:
          "Na front-endzie użyłem Reacta, Chakra UI oraz biblioteki Axios do obsługi żądań HTTP.",
        technology: ["TypeScript", "React", "Chakra UI", "Formik", "Axios"],
      },
      {
        stackType: "Backend" as const,
        about: `Projekt wykorzystuje fastapi jako framework webowy do tworzenia API, a także jinja i jinja2schema do generowania szablonów dokumentów i opisów danych w formacie JSON.`,
        technology: ["Python", "FastAPI", "Jinija2", "Jinja2Schema"],
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
    about: `        Future Perfect to aplikacja internetowa, pozwalająca na zarządzanie czasem i osiąganie celów z wykorzystaniem techniki pomodoro. Użytkownicy tworzą cele i zadania, a następnie zaznaczają ich postęp, wykorzystując minutnik pomodoro. Aplikacja umożliwia także ustawianie priorytetów i śledzenie postępu w osiąganiu celów.

    Projekt został napisany w TypeScript, React oraz ChakraUI, a komunikacja między frontendem a backendem odbywa się poprzez API napisane w Pythonie z użyciem FastAPI. Future Perfect wykorzystuje context, state oraz reducery i jest idealnym narzędziem dla osób, które chcą efektywnie zarządzać swoim czasem i osiągać cele.`,
    placeImgFirst: false,
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

export { Bio, ProjectsData };
