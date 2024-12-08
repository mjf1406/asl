import React, { lazy } from 'react';

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const svgCache: Record<string, Promise<React.LazyExoticComponent<SVGComponent> | null> | null> = {};

export const getSignIcon = async (
  signName: string
): Promise<React.LazyExoticComponent<SVGComponent> | null> => {
  if (!svgCache[signName]) {
    svgCache[signName] = import(`./${signName}.svg`)
      .then(module => {
        return lazy(() => Promise.resolve({ default: module.default }));
      })
      .catch(() => {
        console.error(`Failed to load SVG for sign: ${signName}`);
        return null;
      });
  }

  return await svgCache[signName];
};