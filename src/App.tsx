import {
  Card,
  Heading,
  Stack,
  Text,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import s1 from "./images/s1.png";
import { Divider } from "@chakra-ui/react";
import s2 from "./images/s2.png";
import ProjectCard from "./components/ProjectCard";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import ActionButton from "./components/ActionButton";
function App() {
  return (
    <Flex direction={"column"} pb="12">
      <Center shadow={2} padding={"6"} backgroundColor="white">
        <VStack spacing={"6"}>
          <Heading size={"2xl"} wordBreak={"break-word"} textAlign={"center"}>
            Daniel Brzostek
          </Heading>
          <Stack direction={{ base: "column", sm: "row" }} spacing={"6"}>
            <ActionButton
              content={"+48 123 456 789"}
              onClick={function (): void {
                console.log("asDASASDAS");

                window.open("tel:+48123456789");
              }}
              IconComp={PhoneIcon}
            ></ActionButton>
            <ActionButton
              content={"my.email@emialservice.com"}
              onClick={function (): void {
                window.open("mailto:dasdasd@wadawd.com");
              }}
              IconComp={EmailIcon}
            ></ActionButton>
          </Stack>
        </VStack>
      </Center>
      <Center py={6}>
        <VStack spacing={"8"} maxWidth={"7xl"}></VStack>
      </Center>
      <Center>
        <VStack spacing={"8"} maxWidth={"6xl"}>
          <Card
            direction={"column"}
            variant={{ base: "outline", md: "filled" }}
            borderRadius={{ base: 0, md: "2xl" }}
            backgroundColor={"white"}
            overflow={"clip"}
            width={"full"}
            py="8"
            px={{ base: "4", sm: "14" }}
          >
            <Text fontSize={"2xl"} whiteSpace="pre-wrap" pb={2}>
              <b>Witaj! </b>
            </Text>
            <Text fontSize={"sm"} whiteSpace="pre-wrap">
              {/* Using a template literal to avoid my editors auto formating feature removing whitespace formatting */}
              {`          Jestem programistą, szukającym pierwszej pracy jako junior w IT. Jestem bardzo zmotywowany, by rozwijać swoje umiejętności i zdobywać doświadczenie w pracy z technologiami frontendowymi i backendowymi.

          Pomimo braku doświadczenia zawodowego, stworzyłem już dwie aplikacje internetowe, które zostały opisane poniżej. Korzystałem z nowych struktur funkcjonalnych, contextów, stanów i reducerów, aby zapewnić wydajność i funkcjonalność dla użytkowników.

          Jako programista, jestem bardzo skrupulatny i dbam o szczegóły, szczególnie jeśli chodzi o tworzenie kodu i dokumentacji. Jestem zawsze otwarty na nowe wyzwania i szybko uczę się nowych technologii, co pozwoliło mi szybko tworzyć moje projekty.`}
            </Text>
          </Card>
          <Divider
            display={{ base: "none", xl: "block" }}
            padding={2}
            orientation="horizontal"
            variant={"dashed"}
            borderColor={"gray.400"}
            width={"100vw"}
          ></Divider>
          <ProjectCard
            imgSrc={s1}
            cardTitle={"Future Perfect"}
            visitLink={"https://chakra-ui.com/docs/components/list/usage"}
            about={`       Future Perfect to aplikacja internetowa, pozwalająca na zarządzanie czasem i osiąganie celów z wykorzystaniem techniki pomodoro. Użytkownicy tworzą cele i zadania, a następnie zaznaczają ich postęp, wykorzystując minutnik pomodoro. Aplikacja umożliwia także ustawianie priorytetów i śledzenie postępu w osiąganiu celów.

          Projekt został napisany w TypeScript, React oraz ChakraUI, a komunikacja między frontendem a backendem odbywa się poprzez API napisane w Pythonie z użyciem FastAPI. Future Perfect wykorzystuje context, state oraz reducery i jest idealnym narzędziem dla osób, które chcą efektywnie zarządzać swoim czasem i osiągać cele.`}
            placeImgFirst={false}
            stacks={[
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
            ]}
            GHLink={""}
          ></ProjectCard>
          <ProjectCard
            imgSrc={s2}
            cardTitle={"Template Hero"}
            visitLink={"https://chakra-ui.com/docs/components/list/usage"}
            about={`        Template Hero to aplikacja webowa pozwalająca użytkownikom na tworzenie szablonów dokumentów przy użyciu języka Jinja i wypełnianie ich danymi. Frontend został napisany z wykorzystaniem Reacta, Chakra UI i Axios.
            
          Użytkownik może tworzyć i edytować szablony w panelu template, a po wypełnieniu formularza, dane są wysyłane do serwera i wykorzystywane do wypełnienia szablonu. Projekt oferuje wiele funkcjonalności i obsługuje błędy.`}
            placeImgFirst={false}
            stacks={[
              {
                stackType: "Frontend" as const,
                about:
                  "Na front-endzie projektu Template Hero użyłem Reacta, Chakra UI oraz biblioteki Axios do obsługi żądań HTTP.",
                technology: [
                  "TypeScript",
                  "React",
                  "Chakra UI",
                  "Formik",
                  "Axios",
                ],
              },
              {
                stackType: "Backend" as const,
                about: `Projekt wykorzystuje fastapi jako framework webowy do tworzenia API, a także jinja i jinja2schema do generowania szablonów dokumentów i opisów danych w formacie JSON.`,
                technology: ["Python", "FastAPI", "Jinija2", "Jinja2Schema"],
              },
            ]}
            GHLink={""}
          ></ProjectCard>
        </VStack>
      </Center>
    </Flex>
  );
}

export default App;
