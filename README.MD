
# Ash Fit Personal Trainer


The website can be found [here](https://annemariesheehan.github.io/First-Milestone-Project/).

![Website Snippet](https://github.com/AnnemarieSheehan/First-Milestone-Project/blob/master/assets/Images/websitesnip.png)


The idea for the website came from a friends new business. The website was created to highlight her skills as a Sports Therapist, Personal Trainer and Coach, and the services available to potential customers. 

## UX

### Strategy

The design goal was to make the relevant information accessable to the target market. I wanted the site to draw people in and explore further for the information they didn't know they needed yet. 

### Scope
This website is for any athlete or hobbiest sports person, whether runner, cyclist, triathlete or adventure racer so that they can find out about Ash Fit and how the services can benefit them. The site includes quick and easy ways to contact her for further information. 

### User Stories
1. As a runner, I want access to information online about how I can improve my running and get stronger, faster and fitter. I would also like to know how to rehab an injury and what food I should eat to get the best from my training. 
2. As a cyclist, I want access to regular, affordable sports massage therapy to keep my limbs supple for long bike rides and some seasonal racing. 
3. As a woman looking to improve general health and fitness I'm not sure where to start, I'd like to find a professional who can guide me with general fitness, strength and nutrition. 

### Skeleton

The site was arranged as a single scrolling page with links throughout that allows the user to jump to the relevant sections. Functionality includes a contact form for users to complete as well as the services cards which flip on hover showing details on the reverse side. 


### Surface
I chose a dark to light colour scheme to make the site striking and dramatic to draw in the user. I also choose clean lines and clearly separted sections to make for easy reading. The colour theme of Grey/Aubergine/Lime Green was chosen by the business owner. 

All the wireframe files can be found in the images folder of the project. Wireframes were done for mobile, Ipad pro and desktop. [Website Mockup](Website-Mockup.png) [Ipad Pro](Ipad-pro.png) and [Mobile](mobilemockup.png). 

## Features

### Existing Features
I added a fixed image background that has a parralax effect. 
I used the flip cards feature in Bootstrap to make the services cards flip on hover for further inforation. 
I used java script to make the logo dissapear on scroll.


### Features left to Implement
I had hoped to put some CSS transition code to get the main image to zoom in creating the effect of doing a situp but was limited by time on this. In the future I would like to implement the full parallax scrollopsy feature. I would also add in Modals to allow pop up informaiton to display in key areas such as the form.

## Technologies used

- HTML
- CSS
- [Bootstrap](https://getbootstrap.com/)
- [Javascript](https://www.javascript.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [Font Awesome](https://fontawesome.com/) 
- [Tiny Jpeg](www.tinyjpeg.com) to optimise images 
- [CSSAutoprefixer](https://autoprefixer.github.io/)


## Testing

*W3Schools validator
Google Chrome developer tools
Peer Code Review on Slack*

1. W3Schools Validator. I pasted the HTML from my project into the validator and got 8 warnings. These included spaces in image names, errors in the contact form where names did not match ID's as well as some `h1` warnings. I amended the errors and reposted the code. I then pasted the CSS code and ran the validation again, this time finding 8 errors although they all related to a one duplicate line which, when removed showed no errors. 
1. To check for errors using google chrome developer tools, I right clicked on my finished website and chose inspect. The only error showing related to a cookie, the message was *A cookie associated with a cross-site resource at [Fontawesome](http://fontawesome.com/) was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. As I don't fully understand this, further investigation is required*.
1. I posted my project in the Peer Code Review channel on Slack and got detailed feedback with multiple suggestions and corrections. For example fixing file names which had capital letters, removing unused classes and code, optimising images and much more. I was also guided to make my navbar sticky. I tried this but did not like the look as the navbar is transparent and the logo was showing ontop of the phot of Ashling when you moved down the page. To fix this I got some guidance on Slack and was shown how to make the logo dissapear using some javascript code (acknowledgements below). 
1. Some of my file names are using capitals which is not correct, however, when I tried to fix them and push the changes to Github, the links were not working, therefore I have left them as is for this project. I need to be aware in my next project of creating correct file names from the begining to avoid this problem again. 

## Deployment 
 The site was deployed to github pages from Visual Studio Code as follows:
 1. Log into my GitHub account
 2. Choose the relevant repositry
 3. Ensure all changes have been pushed from VS to GitHub
 4. Click on the settings tab
 5. Go to the GitHub pages section
 6. Select the master-branch 
 7. GitHub provides you with a deployed site address

### To Deploy locally

1. In the github repository click on the 'Clone or Download' button. 
2. Copy the URL provided. 
3. Open a bash terminal and move to your desired directory. 
4. Type 'git clone' and paste in the URL.

## Credits

## Content 
The content came from myelf and text from Ashling Smith, the business owner. 
I created the logo using freelogodesign.org.

The javascript code to make the navbar logo hide on scroll was given to me by Eventyret_mentor from Code Institute Slack Community. 

## Media
All the images I used were obtained from [Pixaby](www.pixabay.com), a free images site apart from the photo of Ashling which she provided me with. 

## Code
Inspiration for the flipcards came from [codepen](www.codepen.io). I adapted the code to match my own requirements and design. I also adapted various pieces of code from [W3Schools](https://www.w3schools.com/). The navbar and form came from [Bootstrap](https://getbootstap.com/) both adapted for my requirements. 

## Acknowledgements 

Thanks to my mentor Ali his guidance during this process. Thanks to the Code Institute Slack community for their guidance and information and the tutors for helping with some sticky code. Special thanks to [Anthony](https://github.com/auxfuse) and [Simen](https://github.com/Eventyret) in the Code Institute Slack channels for their help and guidance on a variety of issues encountered. I took inspiration from [Bootstrap](https://getbootstap.com/), [W3Schools](https://www.w3schools.com/) and found solutions to problems on [StackOverflow](https://stackoverflow.com/), [Medium](https://www.medium.com/) and [Codepen](www.codepen.io/). 