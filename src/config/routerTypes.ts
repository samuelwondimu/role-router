import React from 'react';

export interface childrenRouter {
	title: string;
	path: string;
	exact?: boolean;
	Component?: any;
	permission?: string[];
}
export interface routerTypes {
	title: string;
	path: string;
	exact?: boolean;
	Component?: any;
	routes?: routerTypes[];
	children?: childrenRouter[];
	permission?: string[];
}
