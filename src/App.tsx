import {
  Card,
  Heading,
  Stack,
  Text,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import ProjectCard from "./components/ProjectCard";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import ActionButton from "./components/ActionButton";
import { ProjectsData, Bio } from "./Data";
import { PrivateData } from "./types";
import { useEffect, useState } from "react";
import getPrivateData from "./Api";

function App() {
  const [privateData, setPrivateData] = useState<PrivateData>({
    pn: "777 666 555",
    ea: "my.email.default@default.com",
  });
  useEffect(() => {
    (async () => {
      setPrivateData(await getPrivateData());
    })();
  }, []);
  return (
    <Flex direction={"column"} pb="12">
      <Center shadow={2} padding={"6"} backgroundColor="white">
        <VStack spacing={"6"}>
          <Heading size={"2xl"} wordBreak={"break-word"} textAlign={"center"}>
            {Bio.name}
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={"6"}>
            <ActionButton
              content={"+48 " + privateData.pn}
              onClick={function () {
                window.open("tel:" + privateData.pn.replaceAll(" ", ""));
              }}
              IconComp={PhoneIcon}
            ></ActionButton>
            <ActionButton
              content={privateData.ea}
              onClick={function () {
                window.open("mailto:" + privateData.ea);
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
              <b>{Bio.bioGreeting}</b>
            </Text>
            <Text fontSize={"sm"} whiteSpace="pre-wrap">
              {Bio.bioText}
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
          {ProjectsData.map((project) => (
            <ProjectCard key={project.cardTitle} {...project} />
          ))}
        </VStack>
      </Center>
    </Flex>
  );
}

export default App;
