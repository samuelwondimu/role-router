import { ComponentType, LazyExoticComponent, ReactNode } from "react";

export interface childrenRouter {
  title: string;
  path: string;
  exact?: boolean;
  component?: LazyExoticComponent<ComponentType<any>>;
  permissions?: string[];
}
export interface RouterConfig {
  title: string;
  path: string;
  exact?: boolean;
  component?: LazyExoticComponent<ComponentType<any>>;
  routes?: RouterConfig[];
  children?: childrenRouter[];
  permissions?: string[];
}
