---
title: 'SID'
img: '/img/sid/sid-outside.jpg'
alt: 'Sid held by an individual in front of a tree, making him even cuter.'
details:
    team: 'Jitske, Noortje, Maarten, Liese, Dennis, Sven, Imani'
    client: 'De Zellingen & Rob Zoetewij from LoCoSoRoP'
    role: 'Embedded Developer'
    technologies: 'Arduino, STM32, LM386, PAM8302'
    ended: 'July 2019' 
    urls: 
        - icon: 'GithubLogo'
          url: 'https://github.com/locosorop/sloth'
        - icon: 'GithubLogo'
          url: 'https://github.com/locosorop/stm32-test'
        - icon: 'GithubLogo'
          url: 'https://github.com/locosorop/panda'
previewImages: 
    - src: '/img/sid/sid-opened.jpg'
      alt: 'Sid standing upright on a table standing upright and exposing some electronics inside of him.'
      title: 'low cost and chargable'
    - src: '/img/sid/sid-outside.jpg'
      alt: 'Sid held by an individual in front of a tree, making him even cuter.'
      title: 'the friendly social robot'
    - src: '/img/sid/sid-zellingen.jpg'
      alt: 'Sid hugging the big physical logo of the Zellingen located in the main hall.'
      title: 'just hanging out'
---
## Background

SID is the endproduct of a project from the Rotterdam University of Applied Sciences Honours Program and part of the LoCoSoRoP project by Rob Zoetewij. The goal was to create a low cost social robot for a specific target group to temporarily forget about their condition. The goal was to make a robot that could eventually be purchased for less than €200. This project had to be produced in twenty weeks by a multidisciplinairy team of seven students. The students from this project came from Communication, Industrial Product Design and Creative Media and Game Technologies

## Challenges

As a developer there were several challenges I faced. Especially because my personal focus is usually just fixed on software and websites. These challenges include:  

- Choosing a (development) platform for the social bot
- Producing sound without using a €30 sound shield or expensive equivalent 
- Testing with the clients of 'de Zellingen', who happen to have late stage dimensia
- Putting all electronics on one board for a sharable version of Sid

## Solutions

The selection of the development board was an important decision since it would set the base cost for development and determine how easy it would be to implement certain features. After a few discussions with the entire team it was clear that SID should do a few things well and shouldn't be subject to any secrity issues in this early stage. This made it clear that a microcontroller would be sufficient which is convienient since they can be obtained for a low price in a variety of volumes. The first selection was the Arduino Uno because of it's popularity, availability and option to remove the ATmega328P DIP package from the board for use in production in possible later stages. However due to memory constraints related to audio we decided to move to the STM32, which is cheaper in development but slightly more expensive in production. 

![The first version of SID's electronics using an Arduino Uno with the amplifier circuit hidden in a wooden box](/img/sid/sid-prototype.png) 
![The second version of SID's electronics using an STM32 on a large breadboard](/img/sid/sid-stm32-port.png)  

The ability to play sounds without any special shields had a big impact on the price as well. By reading up on some electronics basics I discoverd an amplifier circuit based on the LM368. This circuit did work but wasn't loud enough for our target audience. After some more research on amplifiers it turned out a class D amplifier could be more effective. I decided to buy a small cheap module based on the PAM8302. Swapping the circuits however did not work because the analog signal from the ATmega328 is not a real analog signal but a PWM. The LM368 can be used as an ADC, connecting the output to the input of the PAM8302 module solved the issue and produced very loud sounds that could be heard by our target audience. 

After contacting de Zellingen, a nursing home for ederly with medical issues, and conducting a few interviews with staff we got the opportunity to test SID with residents that have late stage dementia for a week. This meant that SID needed to run on a powersource that could be replaced or charged when empty. We solved this by using a powerbank that was small and cheap enough to fit in SID but powerfull enough to last over a couple of days. Besides that we needed to figure out the residents' opinion on SID without directly asking them. This was necessary because some of them were unable to talk or hold a conversation surrounding a single topic lasting longer than three minutes. We decided to accompany nurses in the morning when testing SID and leave the nurses alone with SID and residents in the afternoon. We asked the nurses to write down reactions from residents and their interpetations of what those meant since they have been taking care for the same residents for years.  

After the test it became clear that SID would be a project of interest and that the prototype would need to be a little more robust than the mini-breadboards with duct tape in laser-cut boxes up until that point. That is why I decided to spend some time on soldering connections and headers to a protoboard so SID could be used with less fear of disconnected wires. I am glad SID never failed us during the test at the Zellinge but I am glad that there is something more reliable available now. 

![The protoboard containing all of SIDs components.](/img/sid/sid-soldered.png) 
![Connections on the protoboard, jumps form one place on the board to another place were only used when necassary](/img/sid/sid-soldered-back.png) 

## Results

Apart from a very enthusiastic response from inhabitants of the Zellingen and Rob Zoetewij, the Zellingen turned out to be so content with this early prototype that they requested if we could make some safety changes so they would be able to keep it. It turned out Sid was one of the few things some clients would recognize over time or calm them down when they were emotional. Although the nurses expected that SID would only be populair amongst women, it turned he was just as popular amongst men. They suspect that the blue shirt gave SID a warm and friendly but professional look which made him 'manly' enough. 