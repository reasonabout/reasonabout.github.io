---
layout: post
title:  "Ember Magic"
comments: true
date:   2016-03-23
author: Elana Kopelevich
featured_image: /assets/ek/2016/03/ember-magic/tomster.png
categories: ember
tags: ember, front-end, framework
---

I started learning Ember about two weeks ago. It’s been an interesting process to figure out how the pieces work together and, in a lot of cases, what the pieces actually are. In this post, I am going to focus on those individual pieces of an Ember project and how they work together. Spoiler: It is probably witchcraft that makes the Ember magic happen. That’s where I’m at right now.

First, let me just say that Ember is a simple, straight-forward, intuitive MVC that is easy for beginners to jump right into.

...

Just kidding. That is a ridiculous lie.

## Ember is more like an MVRRSABQPXYZ

For a beginner, Ember can seem overwhelming. There is a lot going on in an Ember project and for the better part of the last two weeks, I’ve been trying to make sense of it.

Really quickly, I want to give you little more background on where I’m coming from. I’m fairly new to MVCs in general. I’ve built something with Angular, but prior to this Ember adventure I hadn’t really worked with a front-end framework in a way that it was intended. I didn’t separate all of the pieces and Angular let me get away with that. Ember is less forgiving.

![Ember is crazy!](/assets/ek/2016/03/ember-magic/MVRRSABQPXYZ.png)

Let’s not dwell on my personal confusion. Let’s look at an Ember project. If you go to [emberjs.com](https://emberjs.com) you will see this at the top of the page and here, I want to point out just how easy it is to get started with Ember. That’s how they get you.

![Getting Started with Ember](/assets/ek/2016/03/ember-magic/ember-cli.png)

The first line installs Ember CLI. Ember CLI is a command line interface that helps you work with your Ember project more efficiently. As you start using it, you will quickly get in the habit of generating and destroying parts of your app from the command line rather than from within your app. That was a fairly new workflow for me and it’s definitely something I appreciate about Ember.

The second line uses Ember CLI to generate an Ember project. What does that project look like?

It looks like this.

![Getting Started with Ember](/assets/ek/2016/03/ember-magic/generated-ember.png)

There is a lot going on here, but if you look closely, you can see that MVC! Just, don’t get too comfortable, because there are a couple things you should be conscious of:

First, there is a lot more going on here than those three things. Ember is a delicate, integrated ecosystem and those other things are not superfluous. The are necessary.

Second, Ember is currently undergoing a major evolution and the core pieces of architecture are changing, albeit for the better, but they are changing. The pieces are getting to be more streamlined. For one, controllers are going away and while they’re still here in the standard scaffolding, you don’t even have to use them at this point… but I will get to that. For now, just know that this is your starting point.

Now, I want to focus on what Ember should look like. I got the fantastic diagram below from a very useful [post on Ember Igniter](http://emberigniter.com/5-essential-ember-2.0-concepts/) and I’m going to use it as a reference for the rest of this post.

![Getting Started with Ember](/assets/ek/2016/03/ember-magic/core-concepts.png)

Before we go through each piece of it, I want you to notice a couple things.

One, the router and routes the dominate the scene. Routing is an important part of a single page application. This is going to make sense in a second.

Two, you may see that there is an alarming lack of controllers and views in this picture. Instead you see these shady looking components at the bottom. I’ll get to those in the next few slides, but for now, know that components are replacing controllers and views in Ember.

## Ember Routing

Let’s start from the top of the graphic and look at the router. The router manages the application state and if you consider what that means, it makes sense that it seems so important in this diagram. An Ember app is a single page application and that means that it is URL driven. The URL informs the router and lets it know which route to load, which in turn loads the model and renders the template, which for the time being, brings in the components. That’s an important job!

Here is what a router might look like…

![Getting Started with Ember](/assets/ek/2016/03/ember-magic/router-example.png)

You can see that I’m passing route names into the route definitions and I’m generally omitting the paths because Ember is smart enough to route to a URL with the same name. However, in some instances, like where I’m using a dynamic segment in my URL, I’m letting the router know which path to connect with which route.

These routes that I’m referencing in the router are files that contain logic that can do a few different things. They can render a template, they can load a model that is then available to the template, they can redirect to a new route, or they can handle actions that involve changing a model or transitioning to a new route.

That last thing has been a little confusing to me. If a route can handle some actions, why not put all of them in there? And if I’m not using controllers, why can’t I just put all of the controller logic into the route. I believe the answer to this is that you could, but it would be wrong. The right way to handle this is with components, which I'll get to very soon.

And let’s pause on one other important thing before we move on. Let's go back to that second item in the list of what route handlers can do. They can load models that are then available to the template. How do they do that?

## The Model Hook

Routes have a model hook, which is just a function called ‘model’ that loads the model (and exisitng records) and makes them available to the view. Here is what a route file might look like:

![Getting Started with Ember](/assets/ek/2016/03/ember-magic/route-example.png)

In this example, I’m using Ember Data, which is a library that handles data on the client side of the application.

which is using the store service to populate the model, but again, I’m assuming the behind-the-scenes part of this requires frog legs and the eye of newt. The point is this is where you say the magic words and you have access to your model.

## Moving on to Models

So models. Models are objects that represent the underlying data that your application presents to the user. Being a relatively new developer, I had trouble understanding why you even need models. Why can’t you just get data and send data and figure what to do with it when it got to where it was going? But after spending some time with the framework it started to make sense.

Here is what an Ember model might look like.

![Getting Started with Ember](/assets/ek/2016/03/ember-magic/model-example.png)

You can see that this story model is an object. It has properties and when I get data from my database my model is going to expect that data to have properties that line up with these. I can also use models to define relationships and that will make life a lot easier when I access these records in my view. So that is a model.

Next, we have components.

![Getting Started with Ember](/assets/ek/2016/03/ember-magic/generate-component.png)

Components are Like standard Web Components. If you don’t know what those are, they are essentially self-contained, reusable widgets. In Ember these components are made up of a controller (which defines the component’s behavior) and a view (which defines the component’s UI) and, for the time being, these components cannot be routed to directly, so are referenced in templates. Very soon, Ember will make it possible for the router to route directly to components and then we’ll have nice neat nested components.

## Finally, services!

I will just briefly touch on services. These are long-lived Ember objects, meaning that they are [singletons](https://en.wikipedia.org/wiki/Singleton_pattern) that can be made available in different parts of your application. They are useful for features that require shared state or persistent connections like authentication, geolocation, web sockets, and a number of other things.

Remember a couple paragraphs back when I was talking about models and accessing those models with the model route in the hook? Remember when I brought up Ember Data like it was no big deal? Well, Ember Data uses a service called 'store' to give you access to your models at a various points in your application. Services are great.  

## But how does the magic work?

Now you have a general idea about the parts that make up an Ember project, but I haven't really covered the magic yet. How does it all work together? Honestly, it probably takes well over two weeks to understand all these interactions and I'm not there yet. At this point, this is what I know: A lot of these things are abstracted.

For example, sending a POST request to an API involves an action inside of a component, a model, a route, a serializer, an adapter and the whole thing is catalyzed with Ember Data’s `send()` method. You just tell it to send data and poof, you send data somewhere. I learned over the course of a few days, that if you don’t understand how that magical method works that you may waste some huge number of hours trying to figure why it isn’t working the way you expect it to.

But this is my life now.

The point is, that bit by bit, you do uncover Ember’s magic and as you do, you can let Ember do its thing. Eventually this makes building apps a lot easier than the alternative. The strict separation of concerns makes sure that the right pieces go into the right places and that really does give you the ability to build more ambitious apps without worrying about scalability.
