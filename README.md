## OIDC
1. Set up the bucket
2. Set up OIDC identity provider
3. Set the role
4. Grunt the job permission to read token
5. Add the roles arn to the gitaction job
6. add the region
7. Change the bucket name
setting up the OIDC role
`https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html`

## Other security resources 
In addition to the concepts covered in this module, you should absolutely also explore the security guides by GitHub itself:

General overview & important concepts: https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions

More on Secrets: https://docs.github.com/en/actions/security-guides/encrypted-secrets

Using GITHUB_TOKEN: https://docs.github.com/en/actions/security-guides/automatic-token-authentication

Advanced - Preventing Fork Pull Requests Attacks: https://securitylab.github.com/research/github-actions-preventing-pwn-requests/

Security Hardening with OpenID Connect: https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect