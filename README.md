# nodecli

The goal of nodecli is to get initial express.js structure up and running in couple of minutes

## Project Structure

| Folder          | Description                        |
| --------------- | ---------------------------------- |
| `src/commands/` | Contains all the commands          |
| `src/utils/`    | Contains all the utility functions |
| `test/`         | Contains all the mocha testcases   |
| `templates/`    | Contains  type  static templates   |
| `customModule/` | Contains  all custom add in module | 


## How do I set up?

### Prerequisite:

-   NodeJS

### Setup:

```bash
npm install
```

## Common Commands:

### Generate docs:

```bash
npm run gen:docs
```

### Run linter:

```bash
npm run lint
```

### Run formatter:

```bash
npm run format
```

### Run tests:

```bash
npm test
```

## How to create a project [root] (init project)
 
```bash
node . init -p ProjectName
```
or

```bash
node . init ProjectName
```
or
```bash
node . init --create ProjectName
```
## How to add the module in custom file

```bash
node . genrate -m /projectName/src/addModule   
```
## you have to create the project in select for module then allow to genrate file in add
## projectname is Demo and you have to add custom file in Demo project (custom :category)
ex: node . genrate -m /Demo/src/category/