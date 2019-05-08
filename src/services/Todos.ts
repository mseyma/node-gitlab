import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseServiceOptions,
  MergeRequestId,
  PaginatedRequestOptions,
  ProjectId,
  Sudo,
  TodoId,
} from '../../types/types';

class Todos extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options);
  }

  all(options?: PaginatedRequestOptions) {
    return RequestHelper.get(this, 'todos', options);
  }

  create(projectId: ProjectId, mergerequestId: MergeRequestId, options?: Sudo) {
    return RequestHelper.post(
      this,
      `projects/${projectId}/merge_requests/${mergerequestId}/todo`,
      options,
    );
  }

  done({ todoId, ...options }: { todoId?: TodoId } & Sudo) {
    let url = 'mark_as_done';

    if (todoId) url = `${todoId}/${url}`;

    return RequestHelper.del(this, `todos/${url}`, options);
  }
}

export default Todos;
