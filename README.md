#_Take Home Test - LiLi Style / Front End_

<a name="readme-top"></a>
<br />

<div align="center">
  <a href="https://google.com/">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">LiLi Style - Frontend Technical Test</h3>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#technotes">Tech Notes</a></li>
        <li><a href="#improvement">Room For Improvement</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This is LiLi Style's Front-End Technical Test

Here's why:

- This project has done by React Native CLI

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project has done purely in React Native CLI, with TypeScript.

- [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

You can start this project locally by running _server.js_ from _server file_ and _npx react-native run-ios_ from _LiLiStyle-FE_

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install
  ```
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

1. Access the API Documentation from the Google Drive.
2. Unzip the repo.
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run node server.js
5. Run npx react-native run-ios

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Tech Notes

> 1. I'm using Axios over Fetch API from because of how the two libraries handle the HTTP errors. While using the Fetch API, if a server returns a 4xx or 5xx series error, then the catch() callback will not be triggered. You have to check the status code in the response object in order to determine if the request was successful. On the other hand, Axios will reject the request promise if one of these error codes gets returned from the server.
> 2. Using Promise.all for deleting many products at once because i was not provided by an dedicated API for deleting bulk data.
> 3. This Project's using React Native v0.71.8 and React v18.2.0
> 4. React Navigation v5.9 is used in this project to jump to other pages.
> 5. I'm not using the _PATCH_ API because personally I don't see the need to use the API and using the provided data to get the needed data, and it also cut the speed process and not using many resource.
> 6. I tried to move all the styling to StyleSheet component for better readibility.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Room for Improvement

> 1. We can start by adding State Management like (Redux, React Context, or else).
> 2. The data Structure can be a little more atomic.
> 3. The UI/UX needs to be improved, especially for the Product Detail.
> 4. Should be making a custom hooks for the API Calls so be more scalable.
> 5. There might've be any missed component that should be more optimized.

ps: many things can be turned out better, and I hope this Application would represents me best with the given time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Your Name - Kevin Junod - kevinjunodd@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
