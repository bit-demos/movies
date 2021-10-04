import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { WithPreviewReactAspect } from './with-preview-react.aspect';

const jestConfig = require.resolve('./jest/jest.config.js');

export class WithPreviewReactMain {
  constructor(private react: ReactMain) {}


  // TODO change to new envs API implementation
  /**
   * override the tsconfig.
   */
  overrideTsConfig(tsconfig: any) {
    this.react.overrideTsConfig(tsconfig);
  }

  static runtime = MainRuntime;

  static dependencies = [ReactAspect, EnvsAspect];

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const withPreviewReactEnv = envs.compose(react.reactEnv, [
        react.overrideJestConfig(jestConfig),
        react.overrideDependencies({
          dependencies: {
            '@learn-bit-react/movies.movies.context.movies-api-context': '-'
          },
          devDependencies: {
            '@learn-bit-react/movies.movies.context.movies-api-context': '-'
          },
          peerDependencies: {
            '@learn-bit-react/movies.movies.context.movies-api-context': {
              version: 'latest',
              resolveFromEnv: true,
            },
          },
        })
      // Add overrides here via envs API function as defined above
    ]);
    envs.registerEnv(withPreviewReactEnv);
    return new WithPreviewReactMain(react);
  }
}

WithPreviewReactAspect.addRuntime(WithPreviewReactMain);
