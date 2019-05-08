import FormData from 'form-data';
import randomstring from 'randomstring';
import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  BaseServiceOptions,
  EventOptions,
  Sudo,
  ProjectId,
  UserId,
  GroupId,
  NamespaceId,
  ProjectUploadMetadata,
} from '../../types/types';

class Projects extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  all(options?: PaginatedRequestOptions) {
    return RequestHelper.get(this, '', options);
  }

  archive(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/archive`, options);
  }

  create({ userId, ...options }: { userId?: UserId } & BaseRequestOptions) {
    const url = userId ? `user/${encodeURIComponent(userId)}` : '';

    return RequestHelper.post(this, url, options);
  }

  edit(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.put(this, `${pId}`, options);
  }

  events(projectId: ProjectId, options?: BaseRequestOptions & EventOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/events`, options);
  }

  fork(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/fork`, options);
  }

  forks(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/forks`, options);
  }

  languages(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/languages`, options);
  }

  mirrorPull(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/mirror/pull`, options);
  }

  remove(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.del(this, `${pId}`, options);
  }

  removeFork(projectId: ProjectId) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.del(this, `${pId}/fork`);
  }

  search(projectName: string) {
    return RequestHelper.get(this, '', { search: projectName });
  }

  share(projectId: ProjectId, groupId: GroupId, groupAccess: number, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/share`, { groupId, groupAccess, ...options });
  }

  show(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}`, options);
  }

  star(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/star`, options);
  }

  statuses(projectId: ProjectId, sha: string, state: string, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/statuses/${sha}`, { state, ...options });
  }

  transfer(projectId: ProjectId, namespaceId: NamespaceId) {
    const pId = encodeURIComponent(projectId);
    return RequestHelper.put(this, `${pId}/transfer`, { namespace: namespaceId });
  }

  unarchive(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/unarchive`, options);
  }

  unshare(projectId: ProjectId, groupId: GroupId, options?: Sudo) {
    const [pId, gId] = [projectId, groupId].map(encodeURIComponent);

    return RequestHelper.del(this, `${pId}/share/${gId}`, options);
  }

  unstar(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/unstar`, options);
  }

  updatePushRule(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.put(this, `${pId}/push_rule`, options);
  }

  upload(projectId, content, metadata: ProjectUploadMetadata = {}) {
    const pId = encodeURIComponent(projectId);
    const form = new FormData();

    const defaultMetadata: ProjectUploadMetadata = {
      filename: randomstring.generate(8),
      contentType: 'application/octet-stream',
    };

    form.append('file', content, Object.assign(defaultMetadata, metadata));

    return RequestHelper.postData(this, `${pId}/uploads`, form);
  }
}

export default Projects;
