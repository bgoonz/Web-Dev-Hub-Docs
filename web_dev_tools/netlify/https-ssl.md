# HTTPS \(SSL\)

## 

Netlify offers free HTTPS on all sites, including automatic certificate creation and renewal. Our certificates use the modern TLS protocol, which has replaced the now deprecated SSL standard.

HTTPS brings a lot of advantages:

* **Content integrity:** Without HTTPS, free Wi-Fi services can inject ads into your pages.
* **Security:** If your site has a login or accepts form submissions, HTTPS is essential for your users’ security and privacy.
* **SEO:** Google search results prioritize sites with HTTPS enabled.
* **Referral analytics:** HTTPS-enabled sites will not send referral data to sites without HTTPS enabled.
* **HTTP/2:** Boost your sites’ performance — [HTTP/2](https://docs.netlify.com/domains-https/https-ssl/#http-2) requires HTTPS.

### [\#](https://docs.netlify.com/domains-https/https-ssl/#certificate-service-types)Certificate service types <a id="certificate-service-types"></a>

Netlify offers three different ways of providing a certificate for HTTPS.

**Netlify-managed certificates** are offered to all Netlify sites for free. Find details for this in the section on [Netlify-managed certificates](https://docs.netlify.com/domains-https/https-ssl/#netlify-managed-certificates).

**Custom certificates** are a way for you to provide a certificate that matches your specifications — things like a wildcard certificate or an Extended Validation \(EV\) certificate. If you’d like to provide your own custom certificate, refer to [Custom certificates](https://docs.netlify.com/domains-https/https-ssl/#custom-certificates) below for more details.

**Certificates with dedicated IPs** are available for people who do not want to use [SNI-based](https://docs.netlify.com/domains-https/https-ssl/#certificates-with-dedicated-ips) certificates. If you want your own unique certificate available to all browsers without requiring SNI and without a shared certificate as fallback, [please contact us](https://www.netlify.com/support). _\(This feature may not be available on all_ [_plans_](https://www.netlify.com/pricing/)_.\)_

#### [\#](https://docs.netlify.com/domains-https/https-ssl/#netlify-managed-certificates)Netlify-managed certificates <a id="netlify-managed-certificates"></a>

When you create a new site on Netlify, it’s instantly secured at the Netlify-generated URL \(for example, `https://brave-curie-67195.netlify.app`\). If you add a [custom domain](https://docs.netlify.com/domains-https/custom-domains/), we will automatically provision a certificate with [Let’s Encrypt](https://letsencrypt.org/), enabling HTTPS on your domain. Certificates are generated and renewed automatically as needed.

Use Netlify DNS for automatic wildcards

If your domain uses [Netlify DNS](https://docs.netlify.com/domains-https/netlify-dns/), we’ll automatically provision a wildcard certificate, which ensures instant HTTPS for all of the Netlify sites using subdomains of that domain.

In rare circumstances, there can be problems when provisioning a certificate for some domains. You can check the status of your site’s certificates in **Site settings &gt; Domain management &gt; HTTPS**.

If you’re having trouble with the automatic provisioning, visit the [troubleshooting page](https://docs.netlify.com/domains-https/troubleshooting-tips/) for an error message guide and other tips.

**\#Domain aliases**

Your certificate will include all your [domain aliases](https://docs.netlify.com/domains-https/custom-domains/multiple-domains/#domain-aliases) when it’s issued, but note that DNS also needs to be configured _in advance_ for all aliases for us to include them on your certificate. Visit the [troubleshooting page](https://docs.netlify.com/domains-https/troubleshooting-tips/) for more information on confirming the new configuration.

Avoid rate limiting for subdomains

If you have more than 5 aliases that are subdomains of the same domain, you might run into rate limits with our certificate provider. In that case we recommend you provide your own wildcard certificate using Netlify DNS or [contact support](https://www.netlify.com/support) for our assistance for getting them set up with our certificate provider. Please do this _before adding any aliases_ for best results!

#### [\#](https://docs.netlify.com/domains-https/https-ssl/#custom-certificates)Custom certificates <a id="custom-certificates"></a>

If you already have a certificate for your domain and prefer that to Netlify’s domain-validated certificate, you can install your own.

To install a certificate, you’ll need:

* the certificate itself, in X.509 PEM format \(usually a .crt file\)
* the private key you used to request the certificate
* a chain of intermediary certificates from your Certificate Authority \(CA\)

In **Site settings &gt; Domain management &gt; HTTPS**, select **Set Custom Certificate**, then enter the information above.

Renewal is not automatic

When the time comes to renew your custom certificate, Netlify cannot do this automatically. You will need to renew it at your Certificate Authority, then follow the steps above to install it on your Netlify site. For automatic renewal, you can switch to a [Netlify-managed certificate](https://docs.netlify.com/domains-https/https-ssl/#netlify-managed-certificates).

Netlify validates that the certificate matches the custom domain for your site and that the DNS record for the domain is pointed at Netlify, then installs your certificate. If your certificate covers several of your sites \(in other words, if it’s a wildcard certificate or uses Subject Alternative Names\), you can install it on one site, and it will apply to all other sites covered by the certificate.

#### [\#](https://docs.netlify.com/domains-https/https-ssl/#certificates-with-dedicated-ips)Certificates with dedicated IPs <a id="certificates-with-dedicated-ips"></a>

Netlify’s standard HTTPS handling relies on a browser standard called [Server Name Indication](https://en.wikipedia.org/wiki/Server_Name_Indication), or SNI. It makes provisioning and verifying certificates more efficient, but it’s not supported on [very old browsers](https://en.wikipedia.org/wiki/Server_Name_Indication#Support), like Internet Explorer 7 on Windows XP, or Android 4. Site visitors using these browsers will encounter a security message on your site before they can access it over HTTPS. You might also experience issues with certain automated tools, like PhantomJS below 2.0 \(early 2015\).

If you don’t want to use an SNI-based certificate for your site, Netlify offers the option for a traditional certificate with a dedicated IP. Please [contact us](https://www.netlify.com/support) for more information. _\(This feature may not be available on all_ [_plans_](https://www.netlify.com/pricing/#teams)_.\)_

### [\#](https://docs.netlify.com/domains-https/https-ssl/#hsts-preload)HSTS preload <a id="hsts-preload"></a>

Most major browsers use a list of predefined domains to automatically connect to websites using HTTPS. This list is called the HTTP Strict Transport Security \(HSTS\) preload list. Your site can be included in this list if you follow the requirements in [hstspreload.org](https://hstspreload.org/):

* Your custom domain must be accessible in the www subdomain. For example: `www.petsofnetlify.com`.
* You must include this header in your [`_headers` file](https://docs.netlify.com/routing/headers/) or [Netlify configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/):

  * \_headers
  * netlify.toml

  ```text
  /* 
    Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  ```

When this is set, the browser assumes that your site, along with all subdomains, can be accessed using HTTPS, and it will force those connections.

This action is not easily reversible

Please make sure to only use the directive `preload` once you’re confident that the domain _and all subdomains_ are ready to be served using _only_ HTTPS, since this setting is hard to remove once it’s in place, [as described at hstspreload.org](https://hstspreload.org/#removal).

### [\#](https://docs.netlify.com/domains-https/https-ssl/#http-2)HTTP/2 <a id="http-2"></a>

When HTTPS is enabled for your site, Netlify supports HTTP/2, a newer internet protocol engineered for faster web performance. This brings support for core HTTP/2 features like request multiplexing and compressed headers, but does not include server push capability.

