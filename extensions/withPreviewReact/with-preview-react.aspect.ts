import { Aspect } from '@teambit/harmony';

export type WithPreviewReactConfig = {
  baseUrl: string;
  apiKey: string;

};

export const WithPreviewReactAspect = Aspect.create({
  id: 'teambit.use-case-examples/envs.with-preview',
  defaultConfig: {
    baseMoviesUrl: undefined
  },
});
