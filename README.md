
## Clone the repository
git clone https://github.com/MangeshTak/kongDemoApp.git \
cd kongDemoApp

Modify below details from src/config/db_connection.ts file.\

  type: 'postgres', \
  host: 'localhost', \ 
  port: 5431, \
  username: 'postgres', \
  password: 'password', \
  database: 'test', \

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

## Below is the list of APIs 

1: API for returning services {supports pagination, sorting with column and order specified, filtering by specified search string}
GET {base_uel}/v1/services/?limit=4&offset=0&column=version_count&order=DESC&searchString=se

2: for fetching specific service {returns all the versions for the specific service with the version url}
GET {base_url}/v1/services/{id}

## CRUD API for services entity

1: PUT {base_url}/v1/services/{id}  
req.body = service entity object

2: POST {base_url}/v1/services/
req.body = service entity object

3: DELETE {base_url}/v1/services/{id}

## CRUD API for versions entity

1: PUT {base_url}/v1/versions/{id}  
req.body = version entity object

2: POST {base_url}/v1/versions/
req.body = versions entity object

3: DELETE {base_url}/v1/versions/{id}

4: GET {base_url}/v1/versions/{id}

5: GET {base_url}/v1/versions/
