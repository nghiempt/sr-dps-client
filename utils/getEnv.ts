/**
 * Check and get environment variable value
 * @param varName Variable name
 * @returns
 */
export function getEnvVar(varName: string): string {
  const ret = process.env[varName];
  if (ret === undefined) {
    throw new Error('process.env.' + varName + ' is undefined!');
  }
  return ret;
}
