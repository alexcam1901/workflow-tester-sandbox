# workflow-tester-sandbox

Sandbox repository for testing OpenClaw agent workflows.

This repo exists to give Claude Code something real to work with during workflow validation:
- Real TypeScript source with tests
- Working `pnpm test`, `pnpm type-check`, `pnpm build` scripts
- Simple enough that tasks are fast; complex enough to be meaningful

## Setup

```bash
pnpm install
pnpm test
pnpm type-check
pnpm build
```

## Structure

```
src/
  calculator.ts        # Main source — add functions here for test tasks
  index.ts             # Re-exports
  __tests__/
    calculator.test.ts # Tests
dist/                  # Build output (gitignored)
```
