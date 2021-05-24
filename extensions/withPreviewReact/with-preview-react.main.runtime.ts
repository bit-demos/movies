import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { WithPreviewReactAspect } from './with-preview-react.aspect';
import {} from '@learn-harmony/movies.context.api-context-provider'

const jestConfig = require('./jest/jest.config');

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
        // react.overrideJestConfig(require.resolve('./jest/jest.config')),
        react.overrideDependencies({
          dependencies: {
            '@learn-harmony/movies.context.movies-api-context': '-'
          },
          devDependencies: {
            '@learn-harmony/movies.context.movies-api-context': '-'
          },
          peerDependencies: {
            '@learn-harmony/movies.context.movies-api-context': {
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
