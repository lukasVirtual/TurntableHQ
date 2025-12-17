# Turborepo Setup Guide

This monorepo uses [Turborepo](https://turbo.build/repo) with Bun as the package manager.

## Project Structure

```
turntablehq/
├── apps/
│   ├── landing/          # Nuxt.js landing page
│   └── turntable/        # Main turntable app
├── packages/
│   ├── config/           # Shared configuration
│   └── ui/               # Shared UI components
├── turbo.json            # Turborepo configuration
└── package.json          # Root package.json with workspaces
```

## Package Manager

This project uses **Bun** (`bun@1.3.4`) as the package manager. All workspaces are configured to use Bun.

## Available Scripts

### Root Level Commands

```bash
# Development
bun run dev                    # Run dev for all apps in parallel
bun run dev:landing            # Run dev only for landing app
bun run dev:turntable          # Run dev only for turntable app

# Build
bun run build                  # Build all apps
bun run build:landing          # Build only landing app
bun run build:turntable        # Build only turntable app

# Linting & Type Checking
bun run lint                   # Run linting for all packages
bun run typecheck              # Run type checking for all packages
```

### Turborepo Filters

You can run commands for specific packages using the `--filter` flag:

```bash
turbo dev --filter=landing           # Run dev for landing app
turbo build --filter=landing         # Build landing app
turbo lint --filter=@turntablehq/*   # Lint all @turntablehq packages
```

## Installing Dependencies

```bash
# Install all dependencies
bun install

# Add a dependency to a specific workspace
cd apps/landing
bun add <package-name>

# Add a dependency to root
bun add <package-name> -w
```

## Turborepo Configuration

The `turbo.json` file defines the task pipeline:

- **build**: Builds depend on their dependencies being built first (`^build`)
- **dev**: No caching, runs persistently
- **lint**: Depends on dependencies being built
- **typecheck**: Depends on dependencies being built

### Task Dependencies

The `^` prefix means "run this task in dependencies first":
- `"dependsOn": ["^build"]` means "build all dependencies before building this package"

## Caching

Turborepo automatically caches task outputs to speed up builds:
- Build artifacts are cached in `.turbo/`
- Outputs defined: `.nuxt/**`, `.output/**`, `dist/**`
- Dev tasks are not cached (they run persistently)

## Adding a New App

1. Create a new directory in `apps/`
2. Add a `package.json` with appropriate scripts
3. Ensure scripts match the tasks defined in `turbo.json` (dev, build, lint, etc.)
4. Run `bun install` from the root

## Adding a New Package

1. Create a new directory in `packages/`
2. Add a `package.json` with name `@turntablehq/<package-name>`
3. Export your code from an `index.ts`
4. Reference it in apps using the package name
5. Run `bun install` from the root

## Troubleshooting

### Cache Issues
```bash
# Clear Turborepo cache
rm -rf .turbo
turbo run build --force
```

### Dependency Issues
```bash
# Clean install
rm -rf node_modules apps/*/node_modules packages/*/node_modules
bun install
```

### Port Conflicts
Check which apps are using which ports and update `nuxt.config.ts` or equivalent config files.

## Learn More

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Nuxt Documentation](https://nuxt.com/docs)

