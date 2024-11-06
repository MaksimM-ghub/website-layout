import { deleteAsync } from 'del';

export function clean() {
  return deleteAsync(app.paths.project.build);
}
