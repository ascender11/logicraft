export const routes = {
  home: '/',
  auth: {
    base: '/auth',
    login: '/auth/login',
    register: '/auth/register',
  },
  workspace: {
    base: '/workspace',
    projectId: (id: string) => `/workspace/${id}`,
  },
  profile: '/profile',
};
