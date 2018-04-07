# HUGO Webpack

Hugo is a great framework for generating static website. While it is good at generating HTML files, Hugo lacks features in CSS and JavaScript handling. This is why Webpack is brought in to help manage CSS and JS. In this repository, Webpack is configure to bundle JS from `src/js` and CSS from `src/sass`. Yes, SASS. The files are bundled and sent to `static` folder for Hugo.

## Getting Started

In one terminal window, install and run Webpack. Webpack will watch for changes in the files.
```
npm install

npm start
```
In another terminal, run Hugo server.
```
hugo server -D
```
That's it! Get your hands dirty and start building something cool!

## Deploy

Generate static files using Hugo. The files will go into `public` folder.
```
hugo
```
Done! Just need to upload to static files. For example, if you are using AWS, you can use the following command.
```
aws s3 sync public/ s3://YOUR-BUCKET-NAME --delete
```
