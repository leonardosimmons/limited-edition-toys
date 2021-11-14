export type Combinable = string | number;

export type MenuTab = {
  name: string;
  link: string;
  slug?: string;
  index?: number;
  mouseOver?: boolean;
  ariaPopup?: boolean;
};

export type OverlayState = 'open' | 'closed';

export type StaticPath = {
  params: {
    id?: string;
    slug?: string;
  };
};

export type Viewport = 'desktop' | 'mobile' | 'tablet' | undefined;
