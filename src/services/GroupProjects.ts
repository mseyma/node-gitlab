import { BaseService, RequestHelper } from '../infrastructure';
import {
	PaginatedRequestOptions,
	BaseServiceOptions,
	BaseRequestOptions,
	GroupProjectId,
	ProjectId,
} from '../../types/types';

class GroupProjects extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['groups']);
  }

	all(groupId: GroupProjectId, options?: PaginatedRequestOptions) {
		const gId = encodeURIComponent(groupId);

		return RequestHelper.get(this, `${gId}/projects`, options);
	}

	add(groupId: GroupProjectId, projectId: ProjectId, options?: BaseRequestOptions) {
		const [gId, pId] = [groupId, projectId].map(encodeURIComponent);

		return RequestHelper.post(this, `${gId}/projects/${pId}`, options);
	}
}

export default GroupProjects;
