type devInfo = {
  stackType: StackType;
  about?: string;
  technology: string[];
};
type StackType = "Frontend" | "Backend";

type ObfuscatedDat = string;
type Dat = ObfuscatedDat;

type ProjectCardProps = {
  imgSrc: string;
  cardTitle: string;
  about: string;
  placeImgFirst: boolean;
  stacks: devInfo[];
  links: Array<{
    link: string;
    colorScheme: string;
    text: string;
  }>;
};

type PrivateData = {
  pn: ObfuscatedDat;
  ea: ObfuscatedDat;
};

type BioType = {
  name: string;
  bioGreeting: string;
  bioText: string;
};

export type {
  devInfo,
  PrivateData,
  StackType,
  ObfuscatedDat,
  Dat,
  ProjectCardProps,
  BioType,
};
