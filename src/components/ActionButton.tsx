import { As, Button, ButtonProps, Icon, Text } from "@chakra-ui/react";
import React from "react";
type Props = {
  content: string;
  onClick: () => void;
  IconComp: As<any>;
} & Partial<ButtonProps>;
const ActionButton: React.FC<Props> = ({
  content,
  onClick,
  IconComp,
  ...buttonProps
}) => {
  return (
    <Button
      display={"flex"}
      variant="unstyled"
      backgroundColor={"black"}
      height="auto"
      borderRadius={{ base: "none", sm: "full" }}
      overflow="clip"
      p="1"
      onClick={onClick}
      userSelect={"text"}
      {...buttonProps}
    >
      <Icon
        color={"white"}
        mr={{ base: "4", sm: "3" }}
        ml={{ base: "2", sm: "3" }}
        as={IconComp}
      />
      <Text
        fontWeight={"normal"}
        fontSize={{ base: "16", sm: "md", md: "xl" }}
        borderRadius={"inherit"}
        backgroundColor={"white"}
        overflow={"hidden"}
        textOverflow="ellipsis"
        px={"4"}
        py={"1"}
        width={"full"}
      >
        {content}
      </Text>
    </Button>
  );
};

export default ActionButton;
