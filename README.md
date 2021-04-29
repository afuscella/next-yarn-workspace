# next-yarn-workspace

### Start a project on mono-repo dir. `yarn init -y`;

- set projects as private `"private": true`
- set the workspace by defining its structure.

```json
  "workspaces": {
    "packages": [
      "projects/*"
    ]
  }
```

That means every content below `projects/*` its part of the workspace `mono-repo`.


### Configure `mono-repo` projects

Access project below root dir, and adjust their `package.json` by adding a prefix in `name`. For this example, the value of `@afuscella/` is added.

```json
"name": "@afuscella/commons"
```

```json
"name": "@afuscella/ts-site",
```


### Add `commons` as dependency of `ts-site`

To make commons objects available for the workspace, start by updating dependencies at the project you wish have them available.


```json
"@afuscella/commons": "*",
```


### Add dependencies

At the root of the project, add the dependency by pointing on the project that will receive it.

eg.:
```
yarn workspace @afuscella/ts-site add next-transpile-modules --dev
```


### Run project workspace

```bash
yarn workspace @afuscella/ts-site dev
```

