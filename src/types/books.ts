
export interface SaleInfoListPrice {
  amount: number;
  currencyCode: string;
}

export interface Offer {
  finskyOfferType: number;
  listPrice: OfferListPrice;
  retailPrice: OfferListPrice;
}

export interface OfferListPrice {
  amountInMicros: number;
  currencyCode: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  buyLink?: string;
  listPrice?: SaleInfoListPrice;
  retailPrice?: SaleInfoListPrice;
  offers?: Offer[];
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors: string[];
  publishedDate: string;
  description?: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories?: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  publisher?: string;
}

export interface BookFile {
  isAvailable: boolean;
  downloadLink?: string;
  acsTokenLink?: string;
}

export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: BookFile;
  pdf: BookFile;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}


export interface SearchInfo {
  textSnippet: string;
}

export interface BookItem {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface BookSearchResult {
  kind: string;
  totalItems: number;
  items: BookItem[];
}