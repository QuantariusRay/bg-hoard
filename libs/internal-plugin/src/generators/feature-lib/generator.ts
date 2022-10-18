import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { UtilLibGeneratorSchema } from '../util-lib/schema';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: UtilLibGeneratorSchema) {
  await libraryGenerator(tree, {
    name: `feature-${schema.name}`,
    tags: 'type:feature',
    directory: schema.directory
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
