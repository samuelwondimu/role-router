import React, { ComponentType, LazyExoticComponent, ReactNode } from "react";

export interface childrenRouter {
  title: string;
  path: string;
  exact?: boolean;
  component?: React.FC;
  permissions?: string[];
}
export interface RouterConfig {
  title: string;
  path: string;
  exact?: boolean;
  component?: React.FC;
  routes?: RouterConfig[];
  children?: childrenRouter[];
  permissions?: string[];
}
