import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { UtilLibGeneratorSchema } from './schema';

export default async function (tree: Tree, schema: UtilLibGeneratorSchema) {
  await libraryGenerator(tree, {
    name: `util-${schema.name}`,
    tags: 'type:util',
    directory: schema.directory
  });
  console.log(schema.name);
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
