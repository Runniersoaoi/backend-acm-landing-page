// Interface automatically generated by schemas-to-ts

export interface CoursePage {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    coursePageTitle: string;
    coursePageDescription: string;
    locale: string;
    localizations?: { data: CoursePage[] };
  };
}
export interface CoursePage_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  coursePageTitle: string;
  coursePageDescription: string;
  locale: string;
  localizations?: CoursePage_Plain[];
}

export interface CoursePage_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  coursePageTitle: string;
  coursePageDescription: string;
  locale: string;
  localizations?: CoursePage[];
}

export interface CoursePage_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  coursePageTitle: string;
  coursePageDescription: string;
  locale: string;
  localizations?: CoursePage[];
}
