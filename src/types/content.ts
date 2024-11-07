// src/types/content.ts

export interface HeroContent {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: {
      url: string;
      alt: string;
    };
  }
  
  export interface WelcomeSection {
    title: string;
    paragraphs: string[];
  }
  
  export interface ProductCategoryData {
    id: number;
    attributes: {
      title: string;
      description: string;
      slug: string;
      image: {
        data: {
          attributes: {
            url: string;
            alternativeText: string | null;
          };
        };
      };
    };
  }
  
  export interface ProductCategoriesResponse {
    data: ProductCategoryData[];
    meta: any;
  }
  