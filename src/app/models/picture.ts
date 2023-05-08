export interface Picture {
  title: string;
  alt: string;
  width?: string;
  height?: string;
  sources: Array<{
    minWidth: string;
    typeImg: string;
    srcSets: string[],
  }>;
}
