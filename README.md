# Phrase TMS - Integrations homework

To install dependencies:

```bash
npm install
```

To seed database:

```bash
npm run migrate
```

To run:

```bash
npm run start
```

## Assignment
The goal of this project is to create simple application that has the ability to display list of entries (like in admin panel on some CMS). The application is then able to submit individual entries to Phrase TMS for localization and track localization progress.

1. Display all entries in the table and include abilities
   1. filter by author (select from the list of names)
   2. filter by tag (select from the list of tags)
   3. search by title 
   4. sorting
2. Above the table display some useful statistics like:
   1. total number of entries
   2. number of entries by author 
   3. number of entries by tag
   4. number of entries by month or year
      etc.
3. Display a single entry
   1. Add the ability to create a new localization project by posting to /api/projects
   2. When the localization project is submitted display the status of the localization project and a status of individual locales
4. Display all active projects

### Required technologies:
- Vue.js 3 with Composition API and TypeScript
- Vite
- Tailwind CSS
- Vue Router

### Assignment notes:
- table filtering and sorting should be kept between page reloads


### Delivery instructions:
- send us your finished project as a link to a public repository (GitHub, GitLab, Bitbucket, etc.)


## API documentation
https://documenter.getpostman.com/view/7163817/2s9YJW7Rte