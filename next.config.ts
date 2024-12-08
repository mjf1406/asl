import type { NextConfig } from 'next';
import type { Configuration as WebpackConfig, RuleSetRule } from 'webpack';

type WebpackRuleValue = string | RuleSetRule;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  webpack(config: WebpackConfig) {
    if (!config.module?.rules) {
      return config;
    }

    const rules = config.module.rules as WebpackRuleValue[];
    
    // Find the default file loader rule for images and exclude SVG files from it
    const fileLoaderRule = rules.find((rule): rule is RuleSetRule => 
      typeof rule !== 'string' && 
      rule?.test instanceof RegExp && 
      rule.test.toString().includes('svg')
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Add a new rule to handle SVGs with SVGR
    rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Additional SVGR options can be added here
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;