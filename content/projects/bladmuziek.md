---
title: 'Bladmuziek'
alt: 'connecting humans, plants and music'
img: '/img/bladmuziek/bladmuziek-festival-der-aa.jpg'
details:
    team: 'Ilona, Yoeri, Annelien, Robin, Imani'
    client: 'Innofest, Festival der Aa & Welcome to the Village'
    role: 'Software'
    technologies: 'Raspberry Pi, Makey Makey, NodeJS, Socket.io'
    ended: 'July 2018' 
    seen: 
        - title: 'Innofest'
          url: 'https://innofest.co/cases/bladmuziek/'
        - title: 'Profielen'
          url: 'https://profielen.hr.nl/2018/hr-studenten-willen-eenzaamheid-tegengaan-met-interactieve-plantenbak/'
    urls: 
        - icon: 'GithubLogo'
          url: 'https://github.com/maniflames/bladmuziek-server'
        - icon: 'InstagramLogo'
          url: 'https://www.instagram.com/bladmuziek010/'
previewImages: 
    - src: '/img/bladmuziek/bladmuziek-controls.jpg'
      alt: 'controlled remotely'
      title: 'controlled remotely'
    - src: '/img/bladmuziek/bladmuziek-festival-der-aa.jpg'
      alt: 'connecting humans, plants and music'
      title: 'humans, plants and music'
    - src: '/img/bladmuziek/bladmuziek-hardware.jpg'
      alt: 'runs on Raspberry Pi'
      title: 'runs on Raspberry Pi'
---
## Background
A group of students from Communication and Multimedia Design secured €5000 of funding to test a concept the came up with on two festivals. They needed more memebers, including a memeber with more technical skills to scale up bladmuziek from the single planed they had to a much bigger pot containing lots of plants. I was interested in building installations since the middle of my first year and saw this as the perfect opportunity to actually do it.

## Challenges
There were serveral things I did to provide help to the team:

- Assist with building a 2 x 3 meter pot
- Designing a system that allows plants in a 2 x 3 pot to be connected
- Allow for a change of sounds on runtime

## Solutions

Because there wasn't a lot of time before to build the installation so I wasn't just needed for software improvements but for building the pot as well. Due to my height I was able to do tasks that invloved crawling into corners average college students and adults were not able to reach so the pot could be bolted into one piece. (No I'm serious, I'm the only one standing upright in the picture below). 

![](/img/bladmuziek/bladmuziek-pot.jpg)

Bladmuziek was a small existing prototype build with a MakeyMakey and a website. The most important thing is that there were no devices visible for users to keep the 'magic' alive. That's why I proposed moving everything to a Raspberry Pi. I set up a NodeJS server, implemented a mechanism to switch from sounds and extended their static website with websockets so a different client could control the state of the application. To make sure that the application could be used without relying on external servers I deployed the app on the Raspberry Pi itself and configured a remote access point so remote devices could connect to the localnetwork and contol the pot. 

![](/img/bladmuziek/bladmuziek-controls.jpg)
![](/img/bladmuziek/bladmuziek-festival-der-aa.jpg)

## Results
Over 200 people tried out bladmuziek and filled out a form to let us know what their experience was like. Besides that we landed an interview on 'profielen' our school paper and are listed as an Innofest alumni.