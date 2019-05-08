import { BaseService, RequestHelper } from '../infrastructure';
import {
	BaseServiceOptions,
	PaginatedRequestOptions,
	Sudo,
	ProjectId,
	DeploymentId,
} from '../../types/types';

class Deployments extends BaseService {
	constructor(options: BaseServiceOptions) {
		super(options, ['projects']);
	}

	all(projectId: ProjectId, options?: PaginatedRequestOptions) {
		const pId = encodeURIComponent(projectId);

		return RequestHelper.get(this, `${pId}/deployments`, options);
	}

	show(projectId: ProjectId, deploymentId: DeploymentId, options?: Sudo) {
		const [pId, dId] = [projectId, deploymentId].map(encodeURIComponent);

		return RequestHelper.post(this, `${pId}/deployments/${dId}`, options);
	}
}

export default Deployments;
