# ASPNETReact

Set Dev env
```
$ export ASPNETCORE_ENVIRONEMT = Development
```

To launch ASPNET and React App
```
$ dotnet run
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