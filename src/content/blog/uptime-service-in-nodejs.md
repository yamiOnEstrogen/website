---
title: "Monitoring Website Uptime with Node.js: A Step-by-Step Guide"
excerpt: "Learn how to create a robust Uptime Service in Node.js and explore best practices for writing clean and maintainable code."
image: blog/images/posts/uptime-service-in-nodejs.png
pubDate: 2023-10-01 15:00
categories:
  - Programming
  - NodeJs
  - JavaScript
  - TypeScript
---


In today's digital age, maintaining a high level of website uptime is crucial for providing a positive user experience and ensuring your online services are available to customers around the clock. Downtime can lead to lost revenue and a tarnished reputation. To address this, monitoring your website's uptime is a fundamental aspect of web operations. In this blog post, we'll explore how to create a simple website uptime monitoring tool using Node.js and Axios.

## What is Website Uptime Monitoring?

Website uptime monitoring is the process of continuously checking the availability of a website or web service. It involves sending periodic requests to a website and analyzing the responses to determine if the website is up and running. Monitoring can help you identify issues such as server outages, slow response times, or broken links, allowing you to take proactive measures to maintain high availability.

## Setting Up the Node.js Environment

Before we delve into the code, make sure you have Node.js installed on your system. You can download it from the official website: [Node.js](https://nodejs.org/).

## Building the Uptime Monitoring Tool

We'll create a simple website uptime monitoring tool using Node.js and Axios, a popular HTTP client. Below is the code for our `UptimeService` class, which encapsulates the monitoring logic:

```typescript
import axios from 'axios';

export default class UptimeService {
  constructor() {}

  private async ping(url: string, options: string[] = []) {
    try {
      const response = await axios.get(url, {
        maxRedirects: 10, // Set maximum redirects
        timeout: 10000, // Set request timeout
        ...options.reduce((acc, option) => {
          const [key, value] = option.split(' ');
          if (key && value) {
            acc[key] = value;
          }
          return acc;
        }, {}),
      });

      console.log(`HTTP Status Code for ${url}: ${response.status}`);
    } catch (error) {
      console.error(`Error for ${url}: ${error.message}`);
    }
  }

  public async start(
    urls: string[] = ["https://google.com/", "https://youtube.com/"],
    options: string[] = ["-I", "-L", "-m 10", "-s", "-w %{http_code}"],
    interval: number = 30000
  ) {
    setInterval(() => {
      urls.forEach((url: string) => {
        this.ping(url, options);
      });
    }, interval);
  }
}
```

Let's break down the key elements of this code:

- We import Axios to make HTTP requests.

- The `ping` method sends a GET request to a given URL with specified options. It captures the HTTP status code or logs an error if the request fails.

- The `start` method initializes the monitoring process. You can provide an array of URLs to monitor, additional options for the HTTP request, and an interval at which the requests will be sent.

## Using the UptimeService Class

To use the `UptimeService` class, you can follow these steps:

1. Create an instance of the `UptimeService` class.

2. Call the `start` method, providing the URLs you want to monitor, additional options, and the monitoring interval.

Here's an example of how to use the `UptimeService`:

```javascript
const uptimeService = new UptimeService();

uptimeService.start(
  ["https://example.com/", "https://yourwebsite.com/"],
  ["responseType: 'arraybuffer'"],
  60000
);
```

In this example, the service will monitor two websites, send `HEAD` requests with specified options, and check their uptime every 60 seconds.

## Conclusion

Monitoring website uptime is a critical part of maintaining a reliable online presence. With the simple Node.js code provided in this blog post, you can start monitoring your websites' availability and receive timely notifications of any issues. You can also extend this code to integrate with alerting systems or store historical data for further analysis. By proactively monitoring website uptime, you can ensure that your online services are consistently accessible to users, fostering trust and satisfaction.
