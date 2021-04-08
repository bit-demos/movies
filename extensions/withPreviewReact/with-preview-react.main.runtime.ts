import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { WithPreviewReactAspect } from './with-preview-react.aspect';
import {} from '@teambit/movie-demo.context.api-context-provider'

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
        react.overrideJestConfig(require.resolve('./jest/jest.config')),
        react.overrideDependencies({
          dependencies: {
            '@teambit/movie-demo.context.api-context-provider': '-'
          },
          devDependencies: {
            '@teambit/movie-demo.context.api-context-provider': '-'
          },
          peerDependencies: {
            '@teambit/movie-demo.context.api-context-provider': {
              version: '^0.0.1',
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
