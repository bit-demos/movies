import { Aspect } from '@teambit/harmony';

export type WithPreviewReactConfig = {
  baseProductUrl: string;
  apiKey: string;

};

export const WithPreviewReactAspect = Aspect.create({
  id: 'teambit.use-case-examples/envs.with-preview',
  defaultConfig: {
    baseProductUrl: 'https://www.omdbapi.com',
    apiKey: '35fdde3e'
  },
});
