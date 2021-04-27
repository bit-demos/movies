import React from 'react';
import axios from 'axios';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { Aspect } from '@teambit/harmony';
import { ThemeContext } from '@learn-harmony/movies.theme.theme-context';
import { ApiContextProvider } from '@learn-harmony/movies.context.api-context-provider';
import { ShoppingCartContextProvider } from '@learn-harmony/movies.context.shopping-cart-context';
import { WithPreviewReactConfig, WithPreviewReactAspect } from './with-preview-react.aspect';

export class WithPreviewReactPreview {
  constructor(private config: WithPreviewReactConfig) {}

  /**
   * this is how other aspects can now access the runtime's configured values.
   */
  getConfigs() {
    return this.config;
  }

  static runtime: any = PreviewRuntime;

  static dependencies: Aspect[] = [ReactAspect];

  static async provider([react]: [ReactPreview], config: WithPreviewReactConfig) {
    const withPreviewReactPreview = new WithPreviewReactPreview(config);
    const axiosInstance = axios.create({
      baseURL: config.baseProductUrl,
      params: {
        apikey: config.apiKey
      }
    });

    // register a new provider to wrap all compositions in the symphony-react environment.
    react.registerProvider([
      ({ children }) => {
        return <ApiContextProvider apiInstance={axiosInstance}>{children}</ApiContextProvider>
      },
      ({ children }) => {
        return <ShoppingCartContextProvider >{children}</ShoppingCartContextProvider>
      },
      ThemeContext as any
    ]);

    return withPreviewReactPreview;
  }
}

WithPreviewReactAspect.addRuntime(WithPreviewReactPreview);
