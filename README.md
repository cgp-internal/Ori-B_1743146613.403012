# Notes Application

## Description

This is a simple notes application that allows users to create, read, update, and delete notes. The application uses local storage to persist data, so notes will be saved even after the browser is closed.

## How to Use

1.  Open `index.html` in your web browser.
2.  To create a new note, enter a title and content in the provided input fields and click the "Save Note" button.
3.  Existing notes will be displayed in a list.
4.  To edit a note, click on the note in the list. The note's title and content will be loaded into the input fields. Modify the title and content as needed, and click "Update Note".
5.  To delete a note, click the "Delete Note" button next to the note you want to remove.

## Local Storage Usage

This application uses the browser's local storage to store notes. The notes are stored as a JSON string with the key "notes". Each note is an object with a unique ID, a title, and content.

**Important:** Local storage is specific to the browser and domain. This means that notes created in one browser will not be visible in another browser, and notes created on one website will not be visible on another website.
