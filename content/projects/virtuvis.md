---
title: 'VirtuVis'
alt: 'just fishing'
img: '/img/virtuvis/virtuvis-fishing-3.jpg'
details:
    team: 'Budi Han, Emma van Klinken, Sven Hoffmann, Imani Dap'
    role: 'Concepting & Back-end Development'
    technologies: 'PHP, MySQL, REST APIs'
    ended: 'April 2017' 
    urls: 
        - icon: 'GithubLogo'
          url: 'https://github.com/sven-zo/virtuvis/tree/master/php'
previewImages: 
    - src: '/img/virtuvis/virtuvis-lake.jpg'
      alt: 'virtual fish'
      title: 'virtual fish'
    - src: '/img/virtuvis/virtuvis-fishing-3.jpg'
      alt: 'just fishing'
      title: 'just fishing'
    - src: '/img/virtuvis/virtuvis-brainstorm-1.jpg'
      alt: 'inspired by Willemsplein'
      title: 'inspired by Willemsplein'
---
## Background

As a first year student at Creative Media and Game Technologies you usually don't get to pick who you work with when you have to build a project. However, the third assignment is an exeption to the rule. With three of my best friends from my studies I got 10 weeks to turn a 'depressive' location picked by a teacher and turn it into a happy place. The only technical requirements were that at least two different screens and consumption of at least two different REST APIs. 

## Challenges
This challenge did not just involve software development but concepting, designing and pitching as well. Challenges I was heavily involved in were:

- Concepting
- Consuming two APIs
- Connecting parts of Virtuvis

## Solutions

The location we had to create an installation for was the 'Willemsplein', a small square located at the Erasmusburg. Before concepting we visted the Willemsplein in real life. The idea was that we would interview visitors or people who just happened to pass by. In the span of 45-minutes on a monday afternoon we weren't able to spot a single person. We figured that winter played a role in the current popularity of the square. Mostly because Spido, one of Rotterdam's most notable cruises and boot tours, located it's starting point right there. Additionally there were a hotel, a waterbus stop and a small restaurant as well. When we started brainstorming we wrote down what we noticed about the environment and interesting problems that people that pass by may run into. After some other brainstorm sessions and discussing the results we headed home and created two concepts each. The concept for VirtuVis was the most promising one amongst all of them. Virtual fishing using a physical fishing rod, a beamer projecting a pond and your mobile phone as inverntory. It solved the problem of kids that have nothing to do while waiting for the Spido during the summer, has two screens used in a way that doesn't feel as gimicky as other concepts and API's could be used to spawn fish based on the current weather and display information. Above all popularity of the square in the winter might increase because of the new fish you would be able to catch. 

![](/img/virtuvis/virtuvis-location.jpg)
![](/img/virtuvis/virtuvis-brainstorm-1.jpg) 
![](/img/virtuvis/virtuvis-brainstorm-2.jpg) 
![](/img/virtuvis/virtuvis-concept.jpg) 

To realise this there needed to be an API that all parts of the concept could communicate to. That's why I decided that I wanted to build an API, not just consume one. I started out by creating a small OOP library in PHP that did not only abstract away API request to the MediaWiki API and the Weather API but also made querying the database a bit easier. I did not know what ORM was at the time but I basically attempted to create a small version myself. This would allow me to create new endpoints with varying logic a bit faster. I created eindpoints for others to consume by setting headers and returning JSON in PHP. The API and database were hosted on a shared hosting solution and deployed with a FTP client. 

![](/img/virtuvis/virtuvis-erd.jpg)
![](/img/virtuvis/virtuvis-homescreen.jpg)
![](/img/virtuvis/virtuvis-lake.jpg)
![](/img/virtuvis/virtuvis-fishing-3.jpg)

## Results

This project is still one of my favorite projects done with one of my favorite teams. During the expo on the last day of this course there was a small competition, we ended up 2nd place out of 13 teams. Because I had succesfully build a REST API, which is the objective of a known course in the second year, burst-digital took interest in me and hired me for a two month summer internship at their agency. 