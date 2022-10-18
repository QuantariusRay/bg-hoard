import { installPackagesTask, Tree, updateJson } from '@nrwl/devkit';
import { UtilLibGeneratorSchema } from '../util-lib/schema';

export default async function (tree: Tree, schema: UtilLibGeneratorSchema) {
  await updateJson(tree, 'nx.json', (file) => {
    return { ...file, defaultProject: 'api'};
  });
  return () => {
    installPackagesTask(tree);
  };
}
