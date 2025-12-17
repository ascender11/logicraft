import { useParams } from 'react-router-dom';

export const useGetParamProjectId = () => {
  const params = useParams();

  const projectId = params?.projectId;

  if (!projectId) throw new Error('Project id is not available on this route.');

  return projectId;
};
