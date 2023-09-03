## Custom actions
Custom actions are neeeded so as to simplify the workflow.
- They are used to simplufy steps where we are writing the same action most of the time. ie 
```cache dependancies and reusing the dependencies```
- Existing public workflow does not stop your project at hand.
- Need more control on the action by using any programming language of you choice.
- Need to contribute back to the community/.

## Types of custom actions
1. Javascript actions
Write the logic in a JS file with the node JS runtime to write a JS appplication to be used when the job runs.
- Create the js file together with the action.yml for the custom javascript within the same dir.
- needs to contain the dependancies that are required in the for running the js file 
    ```
    npm init -y
    npm install @actions/core @actions/github @actions/exec
    ```

2. Docker actions
- Docker not know JS but know another diffent programming lanugage.
- Need to define a docker file to define the image.
- Then perform any task needed thereafter.

3. Composite actions
Combine multiple run and workflow then reuse them in the workflws.
- Allows sharing, reusability and no sharing of skills.
- Can create the actions in the same repository or in a different repo. 
- Do not specify a trigger instead they are included in the caller repo
- Actions created with github repos are called using their github path.
1. can be able to accepth inputs for the action that can be used in the custom actions.
2. Can add ouputs to custom actions by defining whether a cache was used or not
