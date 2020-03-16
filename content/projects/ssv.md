---
title: 'SSV'
alt: 'a project pure so I can test this stuff'
img: '/img/ssv/ssv-landing.png'
details:
    team: 'Cye Wong-Loi Sing, Natasha van Meerkeren, David Law, Imani Dap'
    client: 'Rotterdam Sport Support'
    role: 'Web Developer'
    technologies: 'Jekyll, JS, NodeJS, CSS, HTML, Markdown'
    ended: 'October 2019' 
    seen: 
        - title: 'Rotterdams Onderwijs Magazine'
          url: 'https://romnieuws.nl/nieuws/schoolsportvereniging-groeit-met-ruim-15-procent'
    urls: 
        - icon: 'ExternalIcon'
          url: 'http://schoolsportvereniging.nl/'
previewImages: 
    - src: '/img/ssv/ssv-search-small.png'
      alt: 'using natural language'
      title: 'use natural language'
    - src: '/img/ssv/ssv-landing.png'
      alt: 'making sure Rotterdam moves'
      title: 'start moving rotterdam!'
    - src: '/img/ssv/ssv-search-result-small.png'
      alt: 'get info and sign up'
      title: 'get info and sign up'
---
## Background

During my time in college I worked for Brand New Guys, a creative agency, as student developer on the side. One of the projects I got to work on was an alternative search engine for 'schoolsportverenigingen', an initiative from Rotterdam Sport Support. Their goal was to motivate more children between the age of 6 and 12 to pick up a sport and join a local sports club. To reach this goal schoolsportverenigingen wanted to offer a searchable database where kids could find a club nearby that offers a sport they like. They reached out to Brand New Guys to figure out if there was a low cost solution for their platform. It turned out that the static stack that we offered could solve their problem without exceeding their budget. 

## Challenges

I got to work on very specific parts of the site, specifically the functionality of the search engine and the CMS. The most notable things I have done are:

- Setting up Netlify and NetlifyCMS. 
- Using listJS to create the search functionality of an existing natural language form UI.
- Use the Google Matrix API without storing the API key anywhere in the client.
- Importing the initial content into the website.

## Solutions

At Brand New Guys Netlify is the standard host for clients who request static websites or products. To allow admins to change the content on their static site we use NetlifyCMS, a CMS based on GIT that can be configured through a config.yml. Inviting an admin to create an account wasn't that straightforward. The email that is send to the user by Netlify's identity service directs users to the landing page with a token. NetlifyCMS however, is desirably not on the front page of your website but on a seperate one. This confused a lot of admins because they had to navigate to the admin page themselves but leave in the token, something that was obviously very confusing. Unfortunately, there is no way to change the url that is provided by in the e-mail from the identity service. That is why I decided to implement a redirect on the front page that would take users to the admin page as soon as a token was detected. In this admins would not be confused after clicking the link in their email after getting an invite to the admin portal. Security was still garanteed since new admins had to authenticate and could only do so with a valid, non-expired token. 

Because the target audience was very young the creative director and UX designer had the idea to create a natural laguage form. In that way kids would only have to complete a sentence to get the best results instead of having to come up with filter strategies themselves. I was asked to use listJS to parse information from the sports that would be staticly generated and extract the search results using the fuzzy search feature. This feature turned out to be too restrictive for this use case. That is why I build a custom filter with their filter feature, which is similar to using ES6's filter. The initial design of the filter didn't have autocomplete but since many kids were young and didn't always know how to spell their desired sport this feature was requested by the client and implemented by using a dynamic regular expression. 

![The SSV natural language form. A short story in dutch stating: I want to try <sport>. I am available on <every day>. My postal code is <postal code> and I'd like to walk a maximum of <minutes of travel>. ](/img/ssv/ssv-search.png)
![An example of what search results look like. Cards stating showing a photo and stating the sport and neighbourhood of the club.](/img/ssv/ssv-search-results.png)
![An example of what a happens if you click on the results. You see the large version of the image, can read some general information like the exact address, what the cost is and when you'll train and you have the chance to sign up for a sport.](/img/ssv/ssv-search-result.png)

The distances between 'home' and the relevant sports clubs are done by the Google Matrix API. Due to security it was very important to make sure this key wasn't stored anywere in client-side code. That is why the requests are made using Netlify functions, a thin abstraction layer on top of AWS lambda, using NodeJS. This allowed us to store the API key as an environment variable in Netlify's build configurations and only use the key on the server-side. 

Putting the initial content on the website is part of the deal and usually consists of copy pasting text written by the client or a copywriter. This time the data of the 50 - 70 sports was also part of the initial content. I was asked to sit down with a spreadsheet from the client and copy paste all the values into the CMS. This would take me an entire day since I would have to create a new sport for each row and wait for the CMS to save the sport after copy pasting a couple of values. Instead I build a simple tool to generate markdown files from a spreadsheet using NodeJS so all the sports could be imported in the right Jekyll collection. This saved me half a day of copy pasting and turned out to be very useful for future projects where large amounts of static content had to be added for the initial launch. 

## Results
The result is a fully functional platform build on the JAMstack to solve a practical problem. It turned out that the amount of kids in Rotterdam that had signed up for sport had increased by more than 15% after the launch of the platform. Currently over a 130 local teams have registered to be part of the initiative. 