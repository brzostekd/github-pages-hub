import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  HStack,
  VStack,
  List,
  ListItem,
  UnorderedList,
  Box,
  CardHeader,
} from "@chakra-ui/react";
import React from "react";
import { ProjectCardProps } from "../types";

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  cardTitle,
  about,
  placeImgFirst,
  stacks,
  links,
}) => {
  const ImgElement = (
    <Image
      //   shadow={"2xl"}
      filter={"blur(2px)"}
      objectFit="cover"
      maxW={{ base: "100%", xl: "500px" }}
      maxH={{ base: "500px", xl: "100%" }}
      src={imgSrc}
    />
  );
  return (
    <>
      <Heading pl={6} alignSelf={"start"} size="xl">
        {cardTitle}
      </Heading>
      <Card
        direction={{ base: "column", xl: "row" }}
        variant={{ base: "outline", md: "filled" }}
        borderRadius={{ base: 0, md: "2xl" }}
        backgroundColor={"white"}
        overflow={"clip"}
        width={"full"}
      >
        {placeImgFirst && ImgElement}

        <Stack spacing={0}>
          <Box padding={8}>
            <Text fontSize="xs" whiteSpace="pre-wrap">
              {about}
            </Text>
          </Box>
          <Stack
            padding={8}
            spacing={8}
            direction={{ base: "column", sm: "row" }}
            bgGradient="linear(-7.5deg, transparent 80%, gray.100)"
          >
            {stacks.map((el) => (
              <VStack flex={1} align={"start"} key={el.stackType}>
                <Text fontSize="xl" fontWeight={"bold"}>
                  {el.stackType}
                </Text>
                {el.about && <Text fontSize="2xs">{el.about}</Text>}
                <Box paddingLeft={6}>
                  <UnorderedList>
                    {el.technology.map((e) => (
                      <ListItem key={e}>{e}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </VStack>
            ))}
          </Stack>

          <Stack direction={{ base: "column", sm: "row" }} padding={8}>
            {links.map(({ link, color, text }) => (
              <Button
                variant="outline"
                colorScheme={color}
                width={"full"}
                onClick={() => {
                  window.location.href = link;
                }}
              >
                {text}
              </Button>
            ))}
          </Stack>
        </Stack>

        {!placeImgFirst && ImgElement}
      </Card>
    </>
  );
};

export default ProjectCard;
