# Backend-project


## Circus Database 


In this projectyou can find a **Rest API** in Node.js, using Express as the application framework, leveraging a NoSQL database - MongoDB - as means of storing the data.
Here you can create, read, update or delete data - CRUD. These functions give you the possibility to manage the data in the DataBase, which has all the information about, in this case in particular, a Circus :circus_tent:

---
<!-- In this REST API, information about a circus is managed, which employs several people, all of them with some particularities that make them unique and special.  -->

#### Database Document example
In this object you can see the form of a JSON document that populates the "Locations" Collection:

```
{
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


***

#### API Paths 

- **Root Endpoint:**

    - Create (Post method) --> 
    **` http://127.0.0.1:3000/locations/ `** :
        In this method, you have to pass a JSON object like the following example:
        ```  
       	{
            "city": "Lisbon",
            "country": "Portugal"
            "population_density": 1234567890,
            "age_average": 43.8,
	    }
        ```
    - Read (Get method) --> 
    **`http://127.0.0.1:3000/locations/`** :
        With this endpoint we can see all documents of Locations collection;
    
- **Endpoint with an ID:**

    - Update (Patch method) --> 
    **`http://127.0.0.1:3000/locations/:id`** :
    Pass a JSON with the properties you want to upload, of the document with the respective id.

    - Delete (delete method) -->
    **`http://127.0.0.1:3000/locations/:id`** :
    This path will delete from DataBase the document with respective id that you pass in the endpoint






***

#### Connections and commands

To run the mongoDB server, you need to write the following code in your terminal:

**`mongod --config /usr/local/etc/mongod.conf`**



##### Author Contacts:
- :e-mail: : nunomvmf@gmail.com
- You can give me some feedback :thumbsup:
- :moneybag: you can send me money if you want :relieved: :smirk:



