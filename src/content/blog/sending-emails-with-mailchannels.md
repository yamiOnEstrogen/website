---
title: "Revisiting Email Security: Navigating Cloudflare Workers and MailChannels"
excerpt: "Ever wake up and ask yourself: 'Damn, how could I make email security suck even more today'?"
image: blog/images/posts/Send-email-from-Workers.png
pubDate: 2024-02-21 12:00
categories:
  - Programming
  - Cloudflare
  - Scamability
---

## Introduction

Embarking on a coding marathon to implement email functionality on a website backend, little did we anticipate the complexities awaiting us as Cloudflare Workers met MailChannels. This journey would unveil both the seamless and precarious facets of email security.

## Unpacking Cloudflare Workers

Before delving into MailChannels intricacies, let's revisit Cloudflare Workers, those serverless wonders similar to [AWS Lambdas](https://aws.amazon.com/lambda/). These wonders automatically distribute your code across Cloudflare's Content Delivery Network (CDN), optimizing latency for users worldwide. However, Workers are confined to TypeScript Land, accepting only [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript), [TypeScript](https://www.typescriptlang.org/), or anything emitting [WebAssembly](https://webassembly.org/).

Initiating a Cloudflare Worker involves running a command, creating a directory structure streamlined by Cloudflare's Wrangler tool. The resulting worker code is instantly available at an HTTPS-enabled URL, accessible to all.

### CF Workers 101

```bash
$ npm create cloudflare@latest

$ npx wrangler dev
```

### The Code Behind the Issue

```typescript
export default {
  async fetch(request) {
    send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'test@example.com', name: 'Test Recipient' }],
          },
        ],
        from: {
          email: 'sender@example.com',
          name: 'Workers - MailChannels integration',
        },
        subject: 'Look! No servers',
        content: [
          {
            type: 'text/plain',
            value: 'And no email service accounts and all for free too!',
          },
        ],
      }),
    })
  },
}
```

## The Quest for Email Functionality

In our pursuit of a quick solution for sending emails through Cloudflare Workers, a chance encounter with a Cloudflare blog post on MailChannels caught our attention. A seemingly straightforward integration promised to facilitate email sending without complex setups.

## Testing the Waters

Initial experimentation with the MailChannels-integrated Cloudflare Worker raised eyebrows. Test case one, involving a non-existent domain, yielded an expected error. Test case two, using an existing but uncontrolled domain, succeeded but landed in the spam folder, normal for a lack of email security setup. However, test case three took us further.

Curiosity led us to explore the domains using MailChannels, revealing a significant presence with approximately 2 million domains, including clients like `boston.gov` and `notepad-plus-plus.org`. Our journey into the MailChannels universe raised questions about the security implications of this seemingly open service.

## Unveiling MailChannels: More Than Meets the Eye

The quest to understand MailChannels led us to a revelation. MailChannels isn't just an email service; it dominates the Email Transactional Service space with a staggering **42%** market share, surpassing well-known players. This unexpected prowess posed intriguing questions about its significance and the cybersecurity claims it made.

Transactional emails, MailChannels' primary offering, involve automated messages from systems to users. However, the company's dual role as an email transaction service and a cybersecurity player raised eyebrows, especially considering instances where emails landed in spam folders.

## Exploring SPF and Shared Authorization


Our investigation into the setup process unveiled a critical flaw. Domains using MailChannels share a common SPF setup, specifically the 'include' statement pointing to `relay.mailchannels.net`. This shared authorization means that all MailChannels users essentially grant each other permission to send emails on their behalf.

The unintended consequence raises concerns about the integrity of the email system. Domains that should operate independently now find themselves interconnected, potentially compromising the security promised by MailChannels.


## Conclusion: Balancing Convenience and Security


As our exploration concludes, we find ourselves at the intersection of convenience and security. The journey began with a desire for quick email functionality through Cloudflare Workers but led us to unveil a complex network of shared authorizations and unforeseen consequences.

This narrative serves as a reminder of the delicate dance between convenience and security in the realm of serverless computing, email services, and the unexpected challenges that may arise. The MailChannels saga leaves us with questions about the broader implications of shared SPF authorizations and prompts us to rethink the boundaries between ease of use and robust security measures.

For a detailed technical walkthrough of sending emails from Cloudflare Workers with MailChannels, you can refer to the original [Cloudflare blog post](https://blog.cloudflare.com/sending-email-from-workers-with-mailchannels/).