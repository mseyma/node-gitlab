import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  BaseServiceOptions,
  Sudo,
  SnippetId,
  SnippetVisibility,
} from '../../types/types';

class Snippets extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['snippets']);
  }

  all({ public: p, ...options }: { public: boolean } & PaginatedRequestOptions) {
    const url = p ? 'public' : '';

    return RequestHelper.get(this, url, options);
  }

  content(snippetId: SnippetId, options?: Sudo) {
    const sId = encodeURIComponent(snippetId);

    return RequestHelper.get(this, `${sId}/raw`, options);
  }

  create(
    title: string,
    fileName: string,
    content: string,
    visibility: SnippetVisibility,
    options?: BaseRequestOptions,
  ) {
    return RequestHelper.post(this, '', {
      title,
      fileName,
      content,
      visibility,
      ...options,
    });
  }

  edit(snippetId: SnippetId, options?: BaseRequestOptions) {
    const sId = encodeURIComponent(snippetId);

    return RequestHelper.put(this, `${sId}`, options);
  }

  remove(snippetId: SnippetId, options?: Sudo) {
    const sId = encodeURIComponent(snippetId);

    return RequestHelper.del(this, `${sId}`, options);
  }

  show(snippetId: SnippetId, options?: Sudo) {
    const sId = encodeURIComponent(snippetId);

    return RequestHelper.get(this, `${sId}`, options);
  }

  userAgentDetails(snippetId: SnippetId, options?: Sudo) {
    const sId = encodeURIComponent(snippetId);

    return RequestHelper.get(this, `${sId}/user_agent_detail`, options);
  }
}

export default Snippets;
