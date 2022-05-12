### Hello Stranger <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">

<a href="https://www.linkedin.com/in/andriy-bohdanit/">
  <img align="left" alt="Andriy Bohdan" width="32px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
</a><br/><br/>

### Initial Setup :relaxed:

![](https://media.giphy.com/media/TOd09KJxxog65L0MwE/giphy.gif)

#### Folder Structure

```
└── src
    ├── config
    ├── controllers
    ├── database
    ├── models
    ├── routers
    ├── schema
    ├── services
    ├── types
    └── utils
```

### Load the dump file back into the server like this:
Open Terminal in **src/schema/**

if for any reason mysql migration is failed just manually create database **restAPI**


> Unix

```
mysql restAPI < create_recipes.sql
```
> The same in the Windows command prompt:

```
cmd.exe /c "mysql -u root -p restAPI < create_recipes.sql"
```

### Testing API with Postman
> GET
```
http://localhost:5003/recipes
```

> POST
```
http://localhost:5003/recipes

Example raw body: {"name": "Test", "ingredients": ["test1", "test2", "test3"], "image": null}
```

> PUT 
```
http://localhost:5003/recipes/1

```

> PATCH
```
http://localhost:5003/recipes/1

Example raw body: {"ingredients": ["path1", "path2"]}

```
> DELETE

```
http://localhost:5003/recipes/1
```
