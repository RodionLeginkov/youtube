interface IImage {
  height: number;
  url: string;
  width: number;
}

interface IBrandingSettings {
  image: {
    bannerExternalUrl: string;
  };
  channel: {
    country: string;
    description: string;
    keywords: string;
    title: string;
    trackingAnalyticsAccountId: string;
    unsubscribedTrailer: string;
  };
}

export interface ISnippetChannel {
  country: string;
  customUrl: string;
  description: string;
  publishedAt: string;
  title: string;
  thumbnails: {
    default: IImage;
    high: IImage;
    medium: IImage;
  };
  localized: {
    description: string;
    title: string;
  };
}

export interface IChannel {
  brandingSettings: IBrandingSettings;
  id: string;
  kind: string;
  snippet: ISnippetChannel;
  statistics: {
    hiddenSubscriberCount: boolean;
    subscriberCount: string;
    videoCount: string;
    viewCount: string;
  };
}

