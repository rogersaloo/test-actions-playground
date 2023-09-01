## Matrix
Are used in the addition of extra conditions to span a different range. For instance you can be able to include some versions of node or the operating system by passing them throgh a specified lists.
1. `include`
- can add a new combination using an addirionla single combination. A stand alone cobination of single combinations.
2. `exclude` can also be used to exclude some combianations which are not required.
### Example
    ```
    matrix:
            node-version: [12, 14, 16]
            operating-system: [ubuntu-latest, windows-latest]
            include:
            - node-version: 18
            - operating-system: ubuntu-latest
            exclude:
            - node-version: 12
            - operating-system: windows-latest
    ```


## Reusable workflows
Can be reused later on in the provision of different items
To make it reusable it must be callable by other workflows.
`workflow_call` used to set a workflow as callable. 
- similar to the gitlab use of templates
- To call it using;
 ```uses: ./.github/workflows/reusable.yml
 ```