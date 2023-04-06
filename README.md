
# Zenith Personal Website

The Highly Customizable Website made for and by Zenith.

![Logo](https://cdn.discordapp.com/attachments/1010372304909377578/1093334687323275435/miko-hanazawa-waifugami-banner-5.jpg)



## API Reference

#### Get all the allowed versions

```http
  GET /api/versions
```


#### Get the config for the website

```http
  GET /api/config
```


#### Get the status

```http
  GET /api/status
```

#### Get the projects

```http
  GET /api/projects
```



## Demo

![Demo](https://cdn.discordapp.com/attachments/1015727807566987296/1093338587304558632/brave_SI2gtofaWp.gif)


## Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` (INT)

`github_token` (STRING)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Run Locally

Clone the project

```bash
  git clone https://github.com/zenithvt/zenithlive.lol
```

Go to the project directory

```bash
  cd zenithlive.lol
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```



## Conifg

*   **webApp**
    *   `isOffline` - Should the website display the offline page?
    *   `theme` - The theme your website should be.
    *   `apiVersion` - The API version of your website.
    *   `allowedApiVersions` - The allowed API versions (NON-DEPRECATED)


 
*   **owner**
    * `name` - Your username / Real name
    * `story` - Your Story. It tells the story about you.
    * `tag` - Your tag line.
    * `id` - Your Discord Id. **This will be added later.**
    * `isLooking4Work` - Are you looking for work? Do you want to get hired?
    * `email` - The email address you want shown on the website.
    * `location` - The City / State / Country you live in.
    * `skills` - The things you can do!
    * `socials` - Your social accounts!
    * `education` - Where you went to school!
<<<<<<< HEAD
    * `experience` - Do you have any experiences?
=======
    * `experience` - Do you have any experiences?
>>>>>>> d2b5f6c4d0a83c227363068ea01be9bf681db297
