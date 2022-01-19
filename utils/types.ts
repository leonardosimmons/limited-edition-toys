export type Combinable = string | number;

export type Constructor<T = {}> = new (...args: any[]) => T;

export type CustomInputConfig = {
  label?: string;
  optional?: boolean;
  placeholder?: string;
};

export type IncludeExclude = {
  include?: FieldValuePair[];
  exclude?: FieldValuePair[];
};

export type FieldValuePair = {
  field: string;
  value: string;
};

export type KeyValuePair<T, U> = {
  key: T;
  value: U;
}

export type MenuTab = {
  name: string;
  link: string;
  tags: string[];
  slug?: string;
  index?: number;
  mouseOver?: boolean;
  ariaPopup?: boolean;
};

export type MinMaxQuantity = {
  min_quantity?: number;
  max_quantity?: number;
};

export type OverlayState = 'open' | 'closed';

export type RouteConfirmation = {
  ok?: boolean;
  message?: string;
};

export type Status = 'FAILED' | 'PENDING' | 'CANCELLED' | 'COMPLETED';

export type StaticPath = {
  params: {
    id?: string;
    slug?: string;
  };
};

export type UpdateToken<T, U> = {
  id: Combinable;
  token: KeyValuePair<keyof T, U>
}

export type Viewport = 'desktop' | 'mobile' | 'tablet' | undefined;
