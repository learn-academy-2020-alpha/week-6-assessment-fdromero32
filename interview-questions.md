# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The name of the foreign key would be 'animal_id' and it would belong to the Sightings model. This is because the Sightings model belongs_to the Animal model. An Animal could have many sightings and  each new instance would require the foreign key of the animal is was assigned.

  Researched answer: A FOREIGN KEY is a key used to link two tables together. A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.
  source: W3 schools.


2. Which routes must always be passed params and why?

  Your answer: The routes that must be passed params are #show, #update, and #destroy. 

  Researched answer: The routes that must be passed params are #show, #update, #edit, and #destroy. #edit returns an HTML form for editing. 


3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:  '/games/:guess' => 'main#show'
  #unsure of what the question was asking... just the route? or like the things I would need to type into Terminal to create these?


4. Name three rails generator commands. What is created by each?

  Your answer: $ rails generate controller Main: creates a controller 
               $ rails generate model Name: creates a model
               $ rails generate resource All: creates a controller, model, and all the resource routes.  

  Researched answer: The rails generate command has 16 different commands in Ruby on Rails. The three most common ones are Controller, Model, and Rescource. 
  source: https://medium.com/@josephdlawson21/using-the-generate-command-in-rails-9c738380f2d9


5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   This is the Index route and shows all of the items in the database. 

/users/1      method="GET"   This is the Show route and shows a single entry based on the param passed to it.

/users/new    method="GET"   #had to research this bc I wasnt sure of the difference between New and Create:
An HTTP GET to /resources/new is intended to render a form suitable for creating a new resource, which it does by calling the new action within the controller, which creates a new unsaved record and renders the form. An HTTP POST to /resources takes the record created as part of the new action and passes it to the create action within the controller, which then attempts to save it to the database.

source: https://stackoverflow.com/questions/2472393/rails-new-vs-create

/users/       method="POST" This is the Create route creates a new entry into the database and attempts to save it. 

/users/1      method="PUT"  This is the Update route and shows single entry based on the params passed to it.   

/users/1      method="DELETE" This is the Destroy route and destroys an entry in the database based on the params passed to it. 
