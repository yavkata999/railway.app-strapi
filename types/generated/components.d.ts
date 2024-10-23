import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface ProductProdukt extends Struct.ComponentSchema {
  collectionName: 'components_product_produkt';
  info: {
    displayName: '\u041F\u0440\u043E\u0434\u0443\u043A\u0442';
  };
  attributes: {
    name: Schema.Attribute.String;
    subcategory: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    additional_info: Schema.Attribute.Component<
      'product.additional-info',
      true
    >;
  };
}

export interface ProductProduktSaksii extends Struct.ComponentSchema {
  collectionName: 'components_product_produkt_saksii';
  info: {
    displayName: '\u041F\u0440\u043E\u0434\u0443\u043A\u0442 - \u0441\u0430\u043A\u0441\u0438\u0438';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    form: Schema.Attribute.String;
    color: Schema.Attribute.String;
    count_in_box: Schema.Attribute.String;
    box_in_pallet: Schema.Attribute.String;
    count_in_pallet: Schema.Attribute.String;
    diameter: Schema.Attribute.String;
    height: Schema.Attribute.String;
    volume: Schema.Attribute.String;
  };
}

export interface ProductProduktFormi extends Struct.ComponentSchema {
  collectionName: 'components_product_produkt_formi';
  info: {
    displayName: '\u041F\u0440\u043E\u0434\u0443\u043A\u0442 - \u0444\u043E\u0440\u043C\u0438';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    size: Schema.Attribute.String;
    count: Schema.Attribute.String;
    color: Schema.Attribute.String;
  };
}

export interface ProductPostLink extends Struct.ComponentSchema {
  collectionName: 'components_product_post_links';
  info: {
    displayName: 'post_link';
  };
  attributes: {
    link: Schema.Attribute.String;
    post_name: Schema.Attribute.String;
  };
}

export interface ProductAdditionalInfo extends Struct.ComponentSchema {
  collectionName: 'components_product_additional_infos';
  info: {
    displayName: 'additional_info';
  };
  attributes: {
    category: Schema.Attribute.String;
    volume: Schema.Attribute.String;
    degradation_level: Schema.Attribute.String;
    moisture: Schema.Attribute.String;
    fraction: Schema.Attribute.String;
  };
}

export interface ProductAdditionalInfoMain extends Struct.ComponentSchema {
  collectionName: 'components_product_additional_info_mains';
  info: {
    displayName: 'additional_info_main';
  };
  attributes: {
    name: Schema.Attribute.String;
    salt: Schema.Attribute.String;
    ph: Schema.Attribute.String;
    fraction: Schema.Attribute.String;
    lpeat: Schema.Attribute.String;
    dpeat: Schema.Attribute.String;
    additional_mats: Schema.Attribute.String;
    package: Schema.Attribute.String;
  };
}

export interface HomeSbitie extends Struct.ComponentSchema {
  collectionName: 'components_home_sbitie';
  info: {
    displayName: '\u0421\u044A\u0431\u0438\u0442\u0438\u0435';
  };
  attributes: {
    name: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    date: Schema.Attribute.String;
  };
}

export interface HomeProdukt extends Struct.ComponentSchema {
  collectionName: 'components_home_produkt';
  info: {
    displayName: '\u041F\u0440\u043E\u0434\u0443\u043A\u0442';
  };
  attributes: {
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface HomeNauchiPoveche extends Struct.ComponentSchema {
  collectionName: 'components_home_nauchi_poveche';
  info: {
    displayName: '\u041D\u0430\u0443\u0447\u0438 \u043F\u043E\u0432\u0435\u0447\u0435';
  };
  attributes: {
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeKatalog extends Struct.ComponentSchema {
  collectionName: 'components_home_katalog';
  info: {
    displayName: '\u041A\u0430\u0442\u0430\u043B\u043E\u0433';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    file: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    name: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slug: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface HeaderLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    link: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ContactKontakt extends Struct.ComponentSchema {
  collectionName: 'components_contact_kontakt';
  info: {
    displayName: '\u041A\u043E\u043D\u0442\u0430\u043A\u0442';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    phone1: Schema.Attribute.String;
    phone2: Schema.Attribute.String;
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    description: Schema.Attribute.RichText;
  };
}

export interface BiofosWhyListItems extends Struct.ComponentSchema {
  collectionName: 'components_biofos_why_list_items';
  info: {
    displayName: 'why_list_items';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
      'product.produkt': ProductProdukt;
      'product.produkt-saksii': ProductProduktSaksii;
      'product.produkt-formi': ProductProduktFormi;
      'product.post-link': ProductPostLink;
      'product.additional-info': ProductAdditionalInfo;
      'product.additional-info-main': ProductAdditionalInfoMain;
      'home.sbitie': HomeSbitie;
      'home.produkt': HomeProdukt;
      'home.nauchi-poveche': HomeNauchiPoveche;
      'home.katalog': HomeKatalog;
      'home.hero': HomeHero;
      'header.links': HeaderLinks;
      'contact.kontakt': ContactKontakt;
      'biofos.why-list-items': BiofosWhyListItems;
    }
  }
}
