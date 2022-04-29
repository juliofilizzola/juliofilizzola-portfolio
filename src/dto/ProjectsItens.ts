export interface IProject {
  projects: Array<IItem>;
}

export interface IItem {
  project: string;
  url: string;
  aboutProject: {
    text1: string;
    text2: string;
  };
  imageSource: string;
}
