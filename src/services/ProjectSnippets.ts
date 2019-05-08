import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  BaseServiceOptions,
  Sudo,
  ProjectId,
  SnippetId,
  SnippetVisibility,
} from '../../types/types';

class ProjectSnippets extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  all(projectId: ProjectId, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/snippets`, options);
  }

  content(projectId: ProjectId, snippetId: SnippetId, options?: Sudo) {
    const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);

    return RequestHelper.get(this, `${pId}/snippets/${sId}/raw`, options);
  }

  create(
    projectId: ProjectId,
    title: string,
    fileName: string,
    code: string,
    visibility: SnippetVisibility,
    options?: BaseRequestOptions,
  ) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/snippets`, {
      title,
      fileName,
      code,
      visibility,
      ...options,
    });
  }

  edit(projectId: ProjectId, snippetId: SnippetId, options?: BaseRequestOptions) {
    const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);

    return RequestHelper.put(this, `${pId}/snippets/${sId}`, options);
  }

  remove(projectId: ProjectId, snippetId: SnippetId, options?: Sudo) {
    const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);

    return RequestHelper.del(this, `${pId}/snippets/${sId}`, options);
  }

  show(projectId: ProjectId, snippetId: SnippetId, options?: Sudo) {
    const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);

    return RequestHelper.get(this, `${pId}/snippets/${sId}`, options);
  }

  userAgentDetails(projectId: ProjectId, snippetId: SnippetId, options?: Sudo) {
    const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);

    return RequestHelper.get(this, `${pId}/snippets/${sId}/user_agent_detail`, options);
  }
}

export default ProjectSnippets;
