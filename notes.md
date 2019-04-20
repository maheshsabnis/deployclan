
### command to run the ES 6 Node based app using nodemon
nodemon src/myclass.js --exec babel-node --presets es2015

### command to run the ES6 node app using node
node src/myclass.js --exec babel-node --presets es2015 

### ORM for MySql
npm install --save-dev sequelize
npm install --save-dev mysql // For both mysql and mariadb dialects

npm install --save-dev mysql2

npm install -S sequelize-auto 
#to install it globally use -g tag with it.if we install it globally we can create model classes directlly from the command prompt.
npm install -g sequelize-auto

[node] sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName] -C

Options:
  -h, --host        IP/Hostname for the database.   [required]
  -d, --database    Database name.                  [required]
  -u, --user        Username for database.
  -x, --pass        Password for database.
  -p, --port        Port number for database.
  -c, --config      JSON file for Sequelize's constructor "options" flag object as defined here: https://sequelize.readthedocs.org/en/latest/api/sequelize/
  -o, --output      What directory to place the models.
  -e, --dialect     The dialect/engine that you're using: postgres, mysql, sqlite
  -a, --additional  Path to a json file containing model definitions (for all tables) which are to be defined within a model's configuration parameter. For more info: https://sequelize.readthedocs.org/en/latest/docs/models-definition/#configuration
  -t, --tables      Comma-separated names of tables to import
  -T, --skip-tables Comma-separated names of tables to skip
  -C, --camel       Use camel case to name models and fields
  -n, --no-write    Prevent writing the models to disk.
  -s, --schema      Database schema from which to retrieve tables
  -z, --typescript  Output models as typescript with a definitions file.

  #### The Command
  >sequelize-auto -h localhost -d company -u root -x P@ssw0rd_ --dialect mysql -o models -t department,employee 

  ### The aws installation

  npm install -g aws-sdk

  npm install --save-dev aws-sdk
  ### For debugging
  npm install debug --save
  npm install -g winston
  npm install winston --save--dev

### adding swagger
npm install -g swagger-ui-express
npm install --save-dev swagger-ui-express
npm install -g swagger-jsdoc
npm install --save-dev swagger-jsdoc
