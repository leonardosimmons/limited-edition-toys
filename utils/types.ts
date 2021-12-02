export type Combinable = string | number;

export type Constructor<T = {}> = new (...args: any[]) => T;

export type CustomInputConfig = {
  label?: string;
  optional?: boolean;
  placeholder?: string;
};

export type MenuTab = {
  name: string;
  link: string;
  tags: string[];
  slug?: string;
  index?: number;
  mouseOver?: boolean;
  ariaPopup?: boolean;
};

export type OverlayState = 'open' | 'closed';

export type RouteConfirmation = {
  ok?: boolean;
  message?: string;
};

export type StaticPath = {
  params: {
    id?: string;
    slug?: string;
  };
};

export type Viewport = 'desktop' | 'mobile' | 'tablet' | undefined;
