# dado
100% Serverless* CMS/Blog

\* Obviously the pages are served from somewhere, but not any server you'll need to ever see the inside of.

[Once its finished] Dado will make use many of AWS's fully managed services. They handle all upgrades load balancing and provisioning - while you get to rely on their uptime SLA's

- S3 serves static content, supporting files and the router.
- API gateway manages admin + frontend requests through to Lambda functions.
- DynamoDB data tier.
