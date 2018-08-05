# ASPNETReact
[![Build Status](https://travis-ci.org/aurlaw/ASPNETReact.svg?branch=master)](https://travis-ci.org/aurlaw/ASPNETReact)


Playground for ASPNET Core 2 and React. 
[Demo site](https://aurlaw-aspnet-react.herokuapp.com/)

Set Dev env
```
$ export ASPNETCORE_ENVIRONEMT = Development
```

To launch ASPNET and React App
```
$ dotnet run
```

##  Storybook

```
$cd ClientApp
$yarn install
$yarn storybook
```

## Static App (Dotnet Core-less)

```
$ cd static-app
$ yarn install
$ yarn run
```


## Docker

```
$ docker build -t aspnetreact .
$ docker run -d -p 8080:80 --name myapp aspnetreact

```

## Heroku

```
$heroku container:login
$heroku create
```
The ```heroku create``` command will return an app name, copy it to use it for the next command.

```
$heroku container:push web --app ${YOUR_APP_NAME}
$heroku container:release web --app ${YOUR_APP_NAME}
```

View App
```
$heroku open --app ${YOUR_APP_NAME}
```

