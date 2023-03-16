import { As, Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
type Props = {
  content: string;
  onClick: () => void;
  IconComp: As<any>;
};
const ActionButton: React.FC<Props> = ({ content, onClick, IconComp }) => {
  return (
    <Button
      display={"flex"}
      variant="unstyled"
      backgroundColor={"black"}
      height="auto"
      borderRadius={"full"}
      overflow="clip"
      p="1"
      onClick={onClick}
      userSelect={"text"}
    >
      <Icon color={"white"} mx={"2"} as={IconComp} />
      <Text
        fontWeight={"normal"}
        fontSize="xl"
        borderRadius={"inherit"}
        backgroundColor={"white"}
        px={"2"}
        width={"full"}
      >
        {content}
      </Text>
    </Button>
  );
};

export default ActionButton;
