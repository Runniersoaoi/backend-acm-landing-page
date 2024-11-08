import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBlogItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_items';
  info: {
    description: '';
    displayName: 'BlogItem';
    icon: 'chartBubble';
  };
  attributes: {
    BlogDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    BlogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface BrandsBrandBanner extends Struct.ComponentSchema {
  collectionName: 'components_brands_brand_banners';
  info: {
    description: '';
    displayName: 'BrandBanner';
    icon: 'chartCircle';
  };
  attributes: {
    BrandBannerItem: Schema.Attribute.Component<
      'brands.brand-banner-item',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface BrandsBrandBannerItem extends Struct.ComponentSchema {
  collectionName: 'components_brands_brand_banner_items';
  info: {
    displayName: 'brandBannerItem';
    icon: 'chartPie';
  };
  attributes: {
    BranBannerItemImgLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    BrandBannerItemImgAlt: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CourseCourse extends Struct.ComponentSchema {
  collectionName: 'components_course_courses';
  info: {
    description: '';
    displayName: 'CourseComponent';
    icon: 'calendar';
  };
  attributes: {
    CourseDate: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'2024-10-31T13:15:00.000Z'>;
    CourseImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    CourseName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }> &
      Schema.Attribute.DefaultTo<'Nombre de curso por defecto'>;
  };
}

export interface EventEventBanner extends Struct.ComponentSchema {
  collectionName: 'components_event_event_banners';
  info: {
    description: '';
    displayName: 'EventBanner';
    icon: 'cast';
  };
  attributes: {
    EventMainDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 8;
      }> &
      Schema.Attribute.DefaultTo<'Descubra reuniones, talleres, eventos en los que participa nuestra comunidad en todo el mundo.'>;
    EventMainTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'Busca el evento perfecto para ti'>;
  };
}

export interface EventEventIncomingSection extends Struct.ComponentSchema {
  collectionName: 'components_event_event_incoming_sections';
  info: {
    description: '';
    displayName: 'EventIncomingSection';
    icon: 'book';
  };
  attributes: {
    EventIncomingSectionDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Descubra reuniones locales, talleres y eventos en l\u00EDnea cerca de usted.'>;
    EventIncomingSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Proximos eventos'>;
  };
}

export interface EventEventPastSection extends Struct.ComponentSchema {
  collectionName: 'components_event_event_past_sections';
  info: {
    description: '';
    displayName: 'EventPastSection';
    icon: 'earth';
  };
  attributes: {
    EventPastSectionDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Vea m\u00E1s sobre reuniones pasadas en su localidad o talleres y eventos en l\u00EDnea que se desarrollaron.'>;
    EventPastSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Eventos pasados'>;
  };
}

export interface EventEventTrendSection extends Struct.ComponentSchema {
  collectionName: 'components_event_event_trend_sections';
  info: {
    displayName: 'EventTrendSection';
    icon: 'bulletList';
  };
  attributes: {
    EventTrendTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }> &
      Schema.Attribute.DefaultTo<'Eventos en tendencia'>;
  };
}

export interface EventEventsList extends Struct.ComponentSchema {
  collectionName: 'components_event_events_lists';
  info: {
    displayName: 'EventsList';
    icon: 'pinMap';
  };
  attributes: {
    EventDate: Schema.Attribute.DateTime;
    EventDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 10;
      }>;
    EventIsPresencial: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    EventLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    EventLocation: Schema.Attribute.String;
    EventName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    icon: 'filter';
  };
  attributes: {
    FooterListLink: Schema.Attribute.String & Schema.Attribute.Required;
    FooterListName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeBannerHomeSection extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_home_sections';
  info: {
    description: '';
    displayName: 'BannerHomeSection';
    icon: 'user';
  };
  attributes: {
    BannerHomeTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }> &
      Schema.Attribute.DefaultTo<'Conectando ideas, potenciando el futuro tecnol\u00F3gico'>;
  };
}

export interface HomeContactHomeSection extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_home_sections';
  info: {
    description: '';
    displayName: 'ContactHomeSection';
    icon: 'envelop';
  };
  attributes: {
    ContactHomeSectionDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }> &
      Schema.Attribute.DefaultTo<'Contamos con un gran talento humano que tiene pasi\u00F3n por compartir conocimiento.'>;
    ContactHomeSectionEmail: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'tudirecci\u00F3nemail@gmail.com'>;
    ContactHomeSectionForm: Schema.Attribute.Component<
      'home.contact-home-section-form',
      false
    > &
      Schema.Attribute.Required;
    ContactHomeSectionPhoneNumber: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'999999999'>;
    ContactHomeSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<'Contacta con nuestro equipo'>;
  };
}

export interface HomeContactHomeSectionForm extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_home_section_forms';
  info: {
    displayName: 'ContactHomeSectionForm';
    icon: 'priceTag';
  };
  attributes: {
    ContactHomeSectionFormItem: Schema.Attribute.Component<
      'home.contact-home-section-form-item',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface HomeContactHomeSectionFormItem extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_home_section_form_items';
  info: {
    displayName: 'ContactHomeSectionFormItem';
    icon: 'apps';
  };
  attributes: {
    ContactFormInputLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    ContactFormInputName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface HomeCoursesHomeSection extends Struct.ComponentSchema {
  collectionName: 'components_home_courses_home_sections';
  info: {
    description: '';
    displayName: 'CoursesHomeSection';
    icon: 'book';
  };
  attributes: {
    CourseHomeSectionDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }> &
      Schema.Attribute.DefaultTo<'Puedes revisar el contenido mas reciente creado por nuestros especialistas'>;
    CourseHomeSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }> &
      Schema.Attribute.DefaultTo<'Nuestras clases mas recientes'>;
  };
}

export interface HomeFooterHomeSection extends Struct.ComponentSchema {
  collectionName: 'components_home_footer_home_sections';
  info: {
    description: '';
    displayName: 'FooterHomeSection';
    icon: 'slideshow';
  };
  attributes: {
    FooterHomeSectionItemNavigation: Schema.Attribute.Component<
      'footer.footer',
      true
    > &
      Schema.Attribute.Required;
    FooterHomeSectionLegal: Schema.Attribute.Component<'footer.footer', true> &
      Schema.Attribute.Required;
    FotterHomeSectionDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }> &
      Schema.Attribute.DefaultTo<'Contamos con un gran talento humano que tiene pasi\u00F3n por compartir conocimiento.'>;
    FotterHomeSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }> &
      Schema.Attribute.DefaultTo<'ACM Student Chapter UC'>;
  };
}

export interface HomeMemberHomeSection extends Struct.ComponentSchema {
  collectionName: 'components_home_member_home_sections';
  info: {
    description: '';
    displayName: 'MemberHomeSection';
    icon: 'user';
  };
  attributes: {
    MemberHomeSectionDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 7;
      }> &
      Schema.Attribute.DefaultTo<'Descubra las diversas historias e intereses de dise\u00F1adores y desarrolladores de nuestra comunidad'>;
    MemberHomeSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }> &
      Schema.Attribute.DefaultTo<'Nuestro talento'>;
  };
}

export interface HomeSpecialtyHomeSection extends Struct.ComponentSchema {
  collectionName: 'components_home_specialty_home_sections';
  info: {
    description: '';
    displayName: 'SpecialtyHomeSection';
    icon: 'server';
  };
  attributes: {
    SpecialtyHomeSectionDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'ACM Student Chapter es un grupo estudiantil de ingenier\u00EDa de sistemas de la universidad Continental avalado por ACM (Association for Computing Machinery) que busca incentivar la investigaci\u00F3n y el desarrollo de competencias en las \u00E1reas de ciencias de la computaci\u00F3n.'>;
    SpecialtyHomeSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Disfruta la mejor experiencia con nuestros cursos'>;
  };
}

export interface HomeUpcomingEventsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_upcoming_events_sections';
  info: {
    description: '';
    displayName: 'UpcomingEventsSection';
  };
  attributes: {
    UpcomingEventHomeSectionDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'Descubra reuniones locales, talleres y eventos en l\u00EDnea cerca de usted.'>;
    UpcomingEventHomeSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }> &
      Schema.Attribute.DefaultTo<'Proximos eventos'>;
  };
}

export interface MemberComunityBannerMember extends Struct.ComponentSchema {
  collectionName: 'components_member_comunity_banner_members';
  info: {
    description: '';
    displayName: 'ComunityBannerMember';
    icon: 'archive';
  };
  attributes: {
    ComunityBannerDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'El siguiente directorio contiene la lista de todos los miembros de nuestra comunidad. Personas apasionadas por la tecnolog\u00EDa que comparten el objetivo de impactar en la industria'>;
    ComunityBannerTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Miembros de nuestra comunidad'>;
    comunityDiscordLink: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MemberComunityMembersGroup extends Struct.ComponentSchema {
  collectionName: 'components_member_comunity_members_groups';
  info: {
    displayName: 'ComunityMembersGroup';
    icon: 'crown';
  };
  attributes: {
    ComunityMember: Schema.Attribute.Component<'member.member', true> &
      Schema.Attribute.Required;
  };
}

export interface MemberMember extends Struct.ComponentSchema {
  collectionName: 'components_member_members';
  info: {
    displayName: 'Member';
    icon: 'emotionHappy';
  };
  attributes: {
    MemberCicle: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<5>;
    MemberGithubLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    MemberLinkedIn: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    MemberLocation: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Huancayo, Per\u00FA'>;
    MemberName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'John Doe'>;
    MemberSpecialty: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SpecialtySpecialtyComponent extends Struct.ComponentSchema {
  collectionName: 'components_specialty_specialty_components';
  info: {
    description: '';
    displayName: 'specialtyComponent';
    icon: 'apps';
  };
  attributes: {
    SpecialtyComponentDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 8;
      }>;
    SpecialtyComponentLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    SpecialtyComponentTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.blog-item': BlogBlogItem;
      'brands.brand-banner': BrandsBrandBanner;
      'brands.brand-banner-item': BrandsBrandBannerItem;
      'course.course': CourseCourse;
      'event.event-banner': EventEventBanner;
      'event.event-incoming-section': EventEventIncomingSection;
      'event.event-past-section': EventEventPastSection;
      'event.event-trend-section': EventEventTrendSection;
      'event.events-list': EventEventsList;
      'footer.footer': FooterFooter;
      'home.banner-home-section': HomeBannerHomeSection;
      'home.contact-home-section': HomeContactHomeSection;
      'home.contact-home-section-form': HomeContactHomeSectionForm;
      'home.contact-home-section-form-item': HomeContactHomeSectionFormItem;
      'home.courses-home-section': HomeCoursesHomeSection;
      'home.footer-home-section': HomeFooterHomeSection;
      'home.member-home-section': HomeMemberHomeSection;
      'home.specialty-home-section': HomeSpecialtyHomeSection;
      'home.upcoming-events-section': HomeUpcomingEventsSection;
      'member.comunity-banner-member': MemberComunityBannerMember;
      'member.comunity-members-group': MemberComunityMembersGroup;
      'member.member': MemberMember;
      'specialty.specialty-component': SpecialtySpecialtyComponent;
    }
  }
}
