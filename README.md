# Readme for Developers

## Table of Contents

- [Prerequisites](#prerequisites)
- [Cloning the Repository](#cloning-the-repository)
- [Choosing the Correct Branch](#choosing-the-correct-branch)
- [Setting Up Docker Desktop](#setting-up-docker-desktop)
- [Running Docker Compose](#running-docker-compose)
- [Applying Prisma Migrations](#applying-prisma-migrations)
- [Generating Prisma Client](#generating-prisma-client)
- [Starting the Project](#starting-the-project)
- [Accessing the Application](#accessing-the-application)

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js and npm or yarn
- Docker Desktop

## Cloning the Repository

1. Clone the repository using the following command:

   ```bash
   git clone <repository-url>
   ```

   Replace `<repository-url>` with the URL of the repository.

## Choosing the Correct Branch

2. Navigate to the cloned repository and switch to the correct branch for development:

   ```bash
   cd <repository-name>
   git checkout feature/save-project
   ```

   Replace `<repository-name>` with the name of the cloned repository.

## Setting Up Docker Desktop

3. Install and start Docker Desktop. Make sure Docker is running before proceeding.

## Running Docker Compose

4. Run the following command to start the project containers using Docker Compose:

   ```bash
   docker-compose up -d
   ```

   This command will start the necessary containers in detached mode.

## Applying Prisma Migrations

5. Navigate to the `packages/backend` directory and apply Prisma migrations:

   ```bash
   cd packages/backend
   pnpm migrate dev
   ```

   This command will apply any pending Prisma migrations.

6. Generate the Prisma client:

   ```bash
   pnpm generate
   ```

   This command will generate the Prisma client based on the Prisma schema.

## Starting the Project

7. Start the project by running the following command in the root directory:

   ```bash
   pnpm start
   ```

   This command will start the project using the Docker containers.

## Accessing the Application

8. Once the project is running, you can access the application by visiting the following URL in your browser:

   - Localhost: http://localhost:3000

   The application should now be accessible at the provided URL.

Feel free to modify the instructions or add any additional steps specific to your project. Happy developing!