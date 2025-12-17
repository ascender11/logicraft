class ProjectApiEndpoints {
  private readonly baseUrl = '/projects';
  get root() {
    return this.baseUrl;
  }

  projectId = (id: string) => `${this.baseUrl}/${id}`;
}

export const projectApiEndpoints = new ProjectApiEndpoints();
