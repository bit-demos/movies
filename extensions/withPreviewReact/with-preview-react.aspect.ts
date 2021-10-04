import { Aspect } from '@teambit/harmony';

export type WithPreviewReactConfig = {
  baseMoviesUrl: string;
  apiKey: string;

};

export const WithPreviewReactAspect = Aspect.create({
  id: 'learn-bit-harmony.movies/extensions.with-preview-react',
  defaultConfig: {
    baseMoviesUrl: undefined,
    apiKey: undefined
  },
});
