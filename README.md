# dado
100% Serverless* CMS/Blog

\* Obviously the pages are served from somewhere, but not any server you'll need to ever see the inside of.

[Once its finished] Dado will make use many of AWS's fully managed services. They handle all upgrades load balancing and provisioning - while you get to rely on their uptime SLA's

Solution Map:
- Site bucket nakeddomain.name
  - Serve static pages.
  - Subdir "protected" - router will request from API - will return content or 400.
- DynamoDB
  - Users
  - Pages/Partials/Entries
    - Each update to this table will rebuild affected pages into bucket.
