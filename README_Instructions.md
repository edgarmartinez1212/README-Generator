# 09 Node.js Challenge: Professional README Generator

## Your Task

The application will be invoked by using the following command:

```bash
node index.js
```

## User Story

```md
AS A bootcamp student
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application
THEN a professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, Contributing, Tests, Questions, and License

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added next to the Title of the README and a notice is added to the section of the README entitled License that details which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Instructions

Here are some guidelines to help you get started:

- Right click on the `README-Generator` folder and select `Open in Integrated Terminal`.

- (For first time use) In the terminal, type `npm install`, this will install the `node_modules` folder which includes `inquirer 8.2.4` and all other necessary folders.

- To begin the program, type `node index.js` in the terminal.

- Press the `Enter` or `Return` (on mac) key to submit an answer.

- After answering all of the questions, a `README.md` file will generate with all user-entered information. If the `README.md` has already been created- due to re-running program- the file will update with the recently entered information.

- Right click on `README.md` and select `Open Preview`.

---

## Links

- Reposoitory: 

- Video
  Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.
