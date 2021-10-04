import { generateNodeModulesPattern } from '@teambit/dependencies.modules.packages-excluder';
const reactJestConfig = require("@teambit/react/jest/jest.config");

const packagesToTransform = [
  '@learn-bit-react',
  '@teambit'
];

const transformIgnorePatterns = generateNodeModulesPattern({packages: packagesToTransform});

module.exports = {
  transform: reactJestConfig.transform,
  transformIgnorePatterns: [transformIgnorePatterns],
};
