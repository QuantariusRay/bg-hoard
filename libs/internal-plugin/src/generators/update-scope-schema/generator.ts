import { Tree, updateJson, formatFiles } from '@nrwl/devkit';

export default async function (tree: Tree) {
  updateJson(tree, 'nx.json', (json) => ({
    ...json,
    defaultProject: 'api',
  }));
  await formatFiles(tree);
}
