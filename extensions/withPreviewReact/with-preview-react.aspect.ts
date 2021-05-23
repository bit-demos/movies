import { Aspect } from '@teambit/harmony';

export type WithPreviewReactConfig = {
  baseMoviesUrl: string;
  apiKey: string;

};

export const WithPreviewReactAspect = Aspect.create({
  id: 'teambit.use-case-examples/envs.with-preview',
  defaultConfig: {
    baseMoviesUrl: undefined,
    apiKey: undefined
  },
});
