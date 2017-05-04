# Eat Da Burger!

Eat Da Burger is a Node/Express/Handlebars/MySQL app that allows you to.... Eat Da Burger!  Burgers are loaded from the 'burgers_db' database and placed into their respective columns based on the 'devoured' boolean flag.  The user can make a new burger by submitting the form, the burger is then inserted into the database as !devoured and the page is reloaded.  Rinse and repeat!

## Installation

- Run `npm install` to pull dependencies locally.

- Update `.env` file at the project root and set the parameters to match your localhost MySQL environment, for example:
```
PORT=3001
MYSQL_HOST='localhost'
MYSQL_PORT=3306
MYSQL_USER='root'
MYSQL_PASSWORD='root'
MYSQL_DATABASE='burgers_db'
```

## Usage
todo: Add form validation to disallow null or invalid entries.
todo: Add a button to delete all devoured burgers.

- To run locally use the command `npm run dev` to start up nodemon with dotenv config variables mentioned above.
- Use browser to navigate to the correct `http://localhost:port` address.
- Once loaded you have the option to create a new burger to be devoured or eat a burger that is already prepared (if there are any available in the database).
- ????
- PROFIT!

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

- I wanted a cheeseburger, now I can has cheeseburger.

## Credits

- The Bootcamp Spot TAs are the real heroes.

## License

Licensed to ill.