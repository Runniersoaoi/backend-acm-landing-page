// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { Media_Plain } from '../../../../common/schemas-to-ts/Media';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Course {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    courseName: string;
    courseDescription: string;
    courseImage: { data: Media };
    courseDate: Date;
    locale: string;
    localizations?: { data: Course[] };
  };
}
export interface Course_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  courseName: string;
  courseDescription: string;
  courseImage: Media_Plain;
  courseDate: Date;
  locale: string;
  localizations?: Course_Plain[];
}

export interface Course_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  courseName: string;
  courseDescription: string;
  courseImage: number;
  courseDate: Date;
  locale: string;
  localizations?: Course[];
}

export interface Course_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  courseName: string;
  courseDescription: string;
  courseImage: AdminPanelRelationPropertyModification<Media_Plain>;
  courseDate: Date;
  locale: string;
  localizations?: Course[];
}
