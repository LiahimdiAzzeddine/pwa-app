## Application

This application has been created using the PWA  Starter Template of React, which can be found at [https://create-react-app.dev/docs/making-a-progressive-web-app/](https://create-react-app.dev/docs/making-a-progressive-web-app/).

The starter project utilizes Workbox Service Worker, detailed at [https://developer.chrome.com/docs/workbox](https://developer.chrome.com/docs/workbox).

Additionally, two packages have been added:

- [react-indexed-db-hook](https://www.npmjs.com/package/react-indexed-db): This package is used to create and interacte IndexedDB.
- [react-ios-pwa-prompt](https://www.npmjs.com/package/react-ios-pwa-prompt): A React component that provides a customizable Progressive Web App (PWA) prompt, instructing the user to Add the app to Home Screen.

## pages

This app comprises three main parts aimed at testing the ability to transfer data between pages and components, and  interacting with IndexedDB:

33. **Login**: Illustrates data transfer between pages using the URL.
33. **Dashboard**: Illustrates data transfer between components.
33. **IndexedDB-CRUD**: Provides interaction with IndexedDB through simple CRUD functions: add, getAll, and delete.
