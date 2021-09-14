## Minimal repo with Typecript + Jest

- Inspired by https://github.com/MrKiplin/learn-typescript
- For data structures/algorithm type explorations

## To run the debugger with VSCode + a jest related script

- https://medium.com/@mtiller/debugging-with-typescript-jest-ts-jest-and-visual-studio-code-ef9ca8644132

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Run Script: test",
            "type": "node",
            "request": "launch",
            "runtimeArgs": ["--inspect-brk", "${workspaceRoot}/node_modules/.bin/jest", "--runInBand", "--coverage", "false"],
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        }
    ]
}
```
