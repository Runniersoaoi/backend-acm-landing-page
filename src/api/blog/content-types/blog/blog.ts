// Interface automatically generated by schemas-to-ts

import { BlogItem } from '../../../../components/blog/interfaces/BlogItem';
import { BlogItem_Plain } from '../../../../components/blog/interfaces/BlogItem';
import { BlogItem_NoRelations } from '../../../../components/blog/interfaces/BlogItem';

export interface Blog {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    BlogItem: BlogItem[];
    locale: string;
    localizations?: { data: Blog[] };
  };
}
export interface Blog_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  BlogItem: BlogItem_Plain[];
  locale: string;
  localizations?: Blog_Plain[];
}

export interface Blog_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  BlogItem: BlogItem_NoRelations[];
  locale: string;
  localizations?: Blog[];
}

export interface Blog_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  BlogItem: BlogItem_Plain[];
  locale: string;
  localizations?: Blog[];
}
