export interface IImage {
  height: number;
  url: string;
  width: number;
}

export interface ISnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  publishTime: string;
  publishedAt: string;
  title: string;
  thumbnails: {
    default: IImage;
    high: IImage;
    medium: IImage;
  };
}

export interface IVideo {
  kind: string;
  id: {
    kind: string;
    videoId: string;
    channelId?: string;
  };
  snippet: ISnippet;
}

