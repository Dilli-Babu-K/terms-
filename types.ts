
export interface LegalSection {
  id: string;
  title: string;
  content: string | string[];
  isWarning?: boolean;
}

export interface LegalContent {
  lastUpdated: string;
  sections: LegalSection[];
  contactEmail: string;
}
