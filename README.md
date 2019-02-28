# Live Location Monitor

A tool that finds services to you


## Table of Contents
1. [Installation](#installation)
2. [Running](#running)
3. [Advices](#Advices)


## Installation   

after you start running this project, have sure that follow these steps:

**install**

after downloading or cloning this repo, execute the command below

```
npm install ```           
  
or 

```
yarn install```  


after download and install all the dependencies, do the following:

* create a file on the root of the application called  `.env` 

* On the `.env` file, insert this:

         REACT_APP_GQL_API = // url from graphql endpoint

 and save the file.



##Running

to running the application, inside the project folder, type these command

`npm start`

or 

` yarn start`

##advices

maybe a little bug can occur when map are loaded, maybe the map can have a part 'cutted', this is a know bug, but the reason still not be identified, but when occurs, just open the 'console' of navigator and close,  in a MacBook just type `cmd + alt + i` using chrome, and window just click in `F12` button.

Some features and elements can not be supported by Safari Browser.