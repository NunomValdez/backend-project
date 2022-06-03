# Backend-project

## Circus Database :circus_tent:

In this project you can find a **Rest API** made in Node.js, using Express as the application framework, leveraging a NoSQL database - MongoDB - as means of storing the data.

Here you can **C**reate, **R**ead, **U**pdate or **D**elete data - CRUD. These functions give you the possibility to manage the data in the DataBase, which has all the information about, in this case, in particular, a Circus

---

### Getting started

<!--

First, after you downloaded this project, in the proper folder, you can run the command "npm install" to install all the dependencies found in the package.json file. Then, to run the MongoDB server, you need to write the following code in your terminal:


**`mongod --config /usr/local/etc/mongod.conf`**

now, in another terminal window, navigate to the folder where you have this project, and run the command "npm run start" to start the Express Server. -->

#### Step-by-step

- Download the project- **`git clone`** "project URL" ;

Then, you need to run these commands in your terminal, in the project folder

1. **"`npm install`"** - instalation of dependencies;

1. **`mongod --config /usr/local/etc/mongod.conf`** - MongoDB Server

1. **`npm run start`** - express Server;

---

### Database Document example

In this object you can see the form of a JSON document that populates the "Worker" Collection:

```
{
	"_id": "627a9c2f4fc1091297fc0227",
	"name": "wonder woman",
	"particularity": "The one and only, the One with unusual Strength",
	"shows": [
	"Men lifting",
	"juggling with cars",
	"wrestling with lions"
	],
	"date_of_submission": 1867,
	"birthday": 1848,
	"__v": 1
}

```

---

### API Paths

- #### **POST :**

#### `/locations`

This method allows the creation of a new location Document in the Locations collection if you pass a JSON like the following :arrow_down: :

**Request example:**

```

	"city": "Lisbon",
	"country": "Portugal"
	"population_density": 1234567890,
	"age_average": 43.8,
}


```

- **Response:**
  Status: 201;
  {
  "id": "534a9c2f4fc1091297fc6449",
  "city": "Lisbon",
  "country": "Portugal"
  "population_density": 1234567890,
  "age_average": 43.8,
  "\_\_v": 1
  }

#### `/workers`

With this path, you'll create a new Circus worker, passing a JSON like the following :arrow_down: :

```
{
	"name": "Wonder Woman",
	"particularity": "Unusual Strength for a Human",
	"shows": [
	"Elephant lifting ",
	"juggling with people",
	"wrestling with lions"
	],
	"date_of_submission": 1867,
	"birthday": 1848
}

```

- **Response:**

Status: 201;

{
"\_id": "627a9c2f4fc1091297fc0227",
"name": "Wonder Woman",
"particularity": "Unusual Strength for a Human",
"shows": [
"Elephant lifting ",
"juggling with people",
"wrestling with lions"
],
"date_of_submission": 1867,
"birthday": 1848,
"\_\_v": 1
}

#### `/inventory`

In this path, you will create a new document at the inventory Collection

**Request example:**

```
{
	"name": "Tent",
	"type": "Structural",
	"date_of_purchase": "1853-01-01T00:00:00.000Z",
	"price": 30
}

```

**Response**

Status: 201;
{
"\_id": "628d211e46dc8ee3486ae5b0",
"name": "Tent",
"type": "Structural",
"date_of_purchase": "1853-01-01T00:00:00.000Z",
"price": 30,
"\_\_v": 0
}

---

- **GET :** **`/locations`**

With this endpoint, we can see all documents of the Locations collection.

**Response:**

```

{
	...
	{
	"city": "Lisbon",
	"country": "Portugal"
	"population_density": 1234567890,
	"age_average": 43.8,
	}
	...
}



```

**Note:** Other routes, such as "/workers" and "/inventory" has the same behavior, they show all Documents that exist in a certain Collection.

- **PATCH:** **`/locations/{id}`**

|**id:** | String | required|

Pass a JSON with the properties you want to upload, to the document with the respective id.

```
{
"city": "Faro"
}
```

**Response:**

```
{
	"city": "Faro",
	"country": "Portugal",
	"population_density": 1234567890,
	"age_average": 43.8,
}
```

**Note:** Other routes, such as "/workers/{id}" and "/inventory/{id}" have the same behavior, they can modify some parts or all the document that has that specific ID.

- **DELETE** **`/locations/{id}`**

This path will delete from DataBase the document with a respective id that you pass in the Endpoint

**Response:**

Status: 200

Message: "Location {...} was deleted from DataBase, and the Circus will not act there."

**Note:** Other routes, such as "/workers/{id}" and "/inventory/{id}" have the same behavior, they delete the document that has that specific ID.

- **GET:** **`/locations/{id}`**
  **id:** | String | required

This will return one document from the Locations collection that has that correspondent ID from the Endpoint, like in the following example:
:arrow_down:

```

{
	"data": {
		"_id": "628416006659f4083e5487a8",
		"city": "Albergaria",
		"country": "Portugal",
		"population_density": 60,
		"age_average": 43.8,
		"__v": 0
	}
}



```

**Note:** Other routes, such as "/workers/{id}" and "/inventory/{id}" have the same behavior, they show the document that has that specific ID.

---

### User Register and log in

#### API Paths

- Nowadays, to improve the security of DataBases and Sites, users have to register and make a login everywhere. Having this in mind, I added two Endpoints to my project, to simulate this common practice.

##### Register

To register a User, we have to send a JSON object to the following Route:

-**POST:** **"`/register`"**
Example JSON:

```
{
	"username": "user",
	"password": "qwerty7654"
}

```

To Register some users, we have to follow the following Schema:

```
{
	username: {
		type: String,
		reqired: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	}
}

```

This forces the user to have a password with at least six characters, to increase security and to have a non-existing username.

It's important to notice that, in the respective controller, this password will be encrypted, and to add more layers of security, we add to that specific string more random characters, with the "salt" technique. This is only possible because of the **bcrypt** library.

**Response**

Status: 201 - Created;

" Saved in database - check! "

#### Login

After registering a user, the login controller generates a Token, that we can use to work with all other Paths.

For this, we have to go to "Headers", and add some fields:

**Note:** To work with every route, every user has to be registered and pass this header to the specific route!

| New header   | New value           |
| ------------ | ------------------- |
| Content-type | application/json    |
| x-auth-token | { generated token } |

##### Author Contacts:

- :e-mail: : nunomvmf@gmail.com

- You can give me some feedback :thumbsup:

I really hope you liked my Rest API, thanks :relieved: :wave:

---
