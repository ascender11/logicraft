export const routes = {
  home: '/',
  auth: {
    base: '/auth',
    login: '/auth/login',
    register: '/auth/register',
  },
  projects: {
    base: '/projects',
    id: (id: string) => `/projects/${id}`,
  },
  profile: '/profile',
};
