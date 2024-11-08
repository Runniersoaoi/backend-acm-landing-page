// Interface automatically generated by schemas-to-ts

import { Footer } from '../../footer/interfaces/Footer';
import { Footer_Plain } from '../../footer/interfaces/Footer';
import { Footer_NoRelations } from '../../footer/interfaces/Footer';

export interface FooterHomeSection {
  FotterHomeSectionTitle: string;
  FotterHomeSectionDescription: string;
  FooterHomeSectionItemNavigation: Footer[];
  FooterHomeSectionLegal: Footer[];
}
export interface FooterHomeSection_Plain {
  FotterHomeSectionTitle: string;
  FotterHomeSectionDescription: string;
  FooterHomeSectionItemNavigation: Footer_Plain[];
  FooterHomeSectionLegal: Footer_Plain[];
}

export interface FooterHomeSection_NoRelations {
  FotterHomeSectionTitle: string;
  FotterHomeSectionDescription: string;
  FooterHomeSectionItemNavigation: Footer_NoRelations[];
  FooterHomeSectionLegal: Footer_NoRelations[];
}

