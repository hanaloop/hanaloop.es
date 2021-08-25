Third Party Services: Gitlab Pages
==================================

This page will explain how to use Gitlab Pages with custom Domain.

## Publishing Content to Gitlab Pages

It is very simple to publish a public site with GitLab page. Just copy the static files to the `./public` folder with CI.
See [.gitlab-ci.yml](../.gitlab-ci.yml) for how it is done.

## Configuring Custom Domain

It is possible to have your custom domain, e.g. `mydomain.com`, to point to your GitLab pages. 

GitLab provides instructions [here](https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/) but I found few issues with the documentation. 

FYI: I worked with Google Domains.

The steps for configuring custom domain are as follows:

1. Add a custom domain to Pages
Navigate to your project’s `Setting > Pages` and click + New domain.
In the Domain field enter your custom domain, e.g. `mydomain.com`
Leave the Certificate box enabled. It will automatically configure TLS (`https`) for you.

Then press the "Create New Domain" button on the bottom of the page

2. Get the verification code

You need to get the verification code before you add A or CNAME.

As opposed to the GitLab document, I had to use domain as key and the entire text as the value. Eg.

| Key          | DNS Record | Value                                                                                                   |
|--------------|------------|---------------------------------------------------------------------------------------------------------|
| mydomain.com | TXT        | `_gitlab-pages-verification-code.<mydomain.com> TXT gitlab-pages-verification-code=123456789ababababab` |


> NOTE: You have repeat 1 and 2 for all (sub)domains. Eg. it is needed to add another domain for www.yourdomain.com

Gitlab Pages Setting has an issue too. Instead of 
`youdomain.com CNAME hanaloop.gitlab.io.` should be
`youdomain.com CNAME namespace.gitlab.io.`.

And finally you should add the A record with the IP
`youdomain.com	A	35.185.44.232`

Then Voila!

Enjoy your TLS secured page!
