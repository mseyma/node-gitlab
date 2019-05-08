import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseServiceOptions,
  BaseRequestOptions,
  Sudo,
  GroupId,
} from '../../types/types';

class Groups extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['groups']);
  }

  all(options?: PaginatedRequestOptions) {
    return RequestHelper.get(this, '', options);
  }

  create(options?: BaseRequestOptions) {
    return RequestHelper.post(this, '', options);
  }

  createLDAPLink(groupId: GroupId, cn: string, groupAccess, provider: string, options?: Sudo) {
    const gId = encodeURIComponent(groupId);

    return RequestHelper.post(this, `${gId}/ldap_group_links`, {
      cn,
      groupAccess,
      provider,
      ...options,
    });
  }

  edit(groupId: GroupId, options?: BaseRequestOptions) {
    const gId = encodeURIComponent(groupId);

    return RequestHelper.put(this, `${gId}`, options);
  }

  remove(groupId: GroupId, options?: Sudo) {
    const gId = encodeURIComponent(groupId);

    return RequestHelper.del(this, `${gId}`, options);
  }

  removeLDAPLink(
    groupId: GroupId,
    cn: string,
    { provider, ...options }: Sudo & { provider?: string } = {},
  ) {
    const gId = encodeURIComponent(groupId);
    const url = provider ? `${provider}/${cn}` : `${cn}`;

    return RequestHelper.del(this, `${gId}/ldap_group_links/${url}`, options);
  }

  search(nameOrPath: string, options?: Sudo) {
    return RequestHelper.get(this, 'groups', {
      search: nameOrPath,
      ...options,
    });
  }

  show(groupId: GroupId, options?: BaseRequestOptions) {
    const gId = encodeURIComponent(groupId);

    return RequestHelper.get(this, `${gId}`, options);
  }

  subgroups(groupId: GroupId, options?: PaginatedRequestOptions) {
    const gId = encodeURIComponent(groupId);

    return RequestHelper.get(this, `${gId}/subgroups`, options);
  }

  syncLDAP(groupId: GroupId, options?: Sudo) {
    const gId = encodeURIComponent(groupId);

    return RequestHelper.post(this, `${gId}/ldap_sync`, options);
  }
}

export default Groups;
