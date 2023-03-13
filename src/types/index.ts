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
    color: string;
    text: string;
  }>;
};

type BioType = {
  name: string;
  pn: ObfuscatedDat;
  ea: ObfuscatedDat;
  bioText: string;
};

export type {
  devInfo,
  StackType,
  ObfuscatedDat,
  Dat,
  ProjectCardProps,
  BioType,
};
