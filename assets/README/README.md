# **My Portfolio**

For this project I thought I could create a page to be a host for my portfolio. I thought this would be a good project as I can update it as I progress through the course and use it as a job search tool.

I wanted to use this website as a professional place for recruiters to view and be impressed from. The reason for this is routed in the idea that recruiters or potential employers would have loads of potential portfolios to look at and so I wanted to streamline the process so that the key information is readily available

**UX**

This website is primarily for recruiters and potentials employers and customers. Eventually I would like to do use this website as advertisement for all 3 of the aforementioned users. For this reason I tried to make the website feel sleek, easy to use and have clear functionality. I didn&#39;t want for the site to become oversaturated with widgets and content as I basically wanted the website to be used as a business card of sorts.

I wanted to keep the website as stream lined as possible to emulate a business card of sort of aesthetic.

**Features**

- Index page – the index page is the loading page in which the user can navigate to the other pages, it serves only to grab the attention of the user by looking as professional as possible
- About me page – this page is used for saying a small amount about myself and my professional achievements and qualifications, this section there is also a cv download button.
- Contact page – this page is where I have used a form in case one of the users wanted to get in contact with me – originally I wanted to link and email api to this.
- Portfolio page – This page is where I have displayed all of the projects that I have worked on thus far and addionally where I am from and would work. It incorporates two apis

**Existing Features**

One of the main features of this website is the incorporation of the JQuery and using of JQuery to do API calls. This allowed me to show my GitHub repositories on my website. This was a key feature as the entire point of my website was to be a business card esc website for recruiters / customers / employers; so having my github repos listed directly on my site really drives the engagement for users.

Another piece of technology that I used was the GoogleMaps API. I used this to show to people where I am located for reference for jobs. In the future I would implement more functionality with the API to show more details.

**Features Left to Implement**

- I would like to incorporate the MailGun API on the contact page
- Add markers to Google maps api
- .js to change toggled down background color
- Sit analytics – view counter and download counter

**Technologies Used**

- [JQuery](https://jquery.com/)
  - The project uses  **JQuery**  to simplify DOM manipulation.
- Bootstrap –the project uses bootstrap for the main website framework, this is for the majority of the page.
- GoogleMapsAPI – this project utilizes the Google Maps API
- GithubAPI – this project utilizes the Github API

**Testing**

- **Visual inspection using Google developer tools**

For every page, my process was to implement a feature and then view it firstly in Google chrome developer tools to see how the website looked and if any of the features were broken or not displayed correctly. If the website was not being displayed correctly, I was able to alter the CSS in dev. tools to eventually reach the desired presentation.

This required a lot of back and forth comparisons as sometimes a fix for one viewport size would not work for other viewport sizes and browsers, in fact usually a fix at one size would actively break the website for another size.

- **Bugs found from visual inspections**

One on going problem I am having and haven&#39;t found a work around for is the height of the overlay. For some instances the overlay is the wrong size.

- **Cross-device visual inspection**

I made sure to use my (Samsung) and my friends (iPhone) phone to double and triple check my work. Even though Google Chrome developer tools have both of these devices resolutions sizes built-in, I made sure to test them with real-life hardware, as you can never be sure that virtual software is correct.

- Jasmine Testing

I did try to implement jasmine testing however most of the javascript that I wrote didn&#39;t have to much logic therefore it would take too long to do the jasmine testing with no real benefit.

**Deployment**

I developed this website on GitHub and using the Gitpod ide. The link to the repository is here https://github.com/ryanstedmanw/ProjectWebsite

To run this version of the website in the Gitpod IDE, you have as follows.

1. Navigate onto the GitHub Repo
2. Click onto branches
3. Click on GitPodPages and click the Gitpod button. This will load the IDE.
4. Type into the terminal; &quot;python3 -m HTTP.server&quot;
5. Click on the &quot;make public&quot; and then view it in browser or preview.

To access the GitHub pages you can either use this [https://ryanstedmanw.github.io/Milestone2/](https://ryanstedmanw.github.io/Milestone2/)or go onto the repository, then settings, scroll down to GitHub pages and click on the link there.

The main difference between the two branches (master and GitPodPages) is that the href link to the CSS and images are different and use relative and absolute links. This was not a problem for me when I was designing in Gitpod however GitHub uses different link terminology

**Credits**

**Content**

- In my original index.html I was going to use a script that was called typewriter.js to animate my index page but in the end decided not to incorporate it.

**Media**

- The photos used in this site were obtained from
- [https://www.google.com/url?sa=i&amp;url=https%3A%2F%2Fwww.engagingconflict.it%2Fhow-to-apply%2Fadmission-application&amp;psig=AOvVaw0sTKmwK6PXCI8IoKpmUrOh&amp;ust=1604784801025000&amp;source=images&amp;cd=vfe&amp;ved=0CAIQjRxqFwoTCJjpkbXv7uwCFQAAAAAdAAAAABAD](https://www.google.com/url?sa=i&amp;url=https%3A%2F%2Fwww.engagingconflict.it%2Fhow-to-apply%2Fadmission-application&amp;psig=AOvVaw0sTKmwK6PXCI8IoKpmUrOh&amp;ust=1604784801025000&amp;source=images&amp;cd=vfe&amp;ved=0CAIQjRxqFwoTCJjpkbXv7uwCFQAAAAAdAAAAABAD)
- [https://miro.medium.com/max/700/0\*OY5qehsIv6E8sO4b](https://miro.medium.com/max/700/0*OY5qehsIv6E8sO4b)
- [https://miro.medium.com/max/700/0\*7Trc2j8gqvX0BYO4](https://miro.medium.com/max/700/0*7Trc2j8gqvX0BYO4)
- https://miro.medium.com/max/2400/1\*lWehEaJQvsl86-AwU5L7hQ.png

**Acknowledgements**

- I received inspiration for this project from business cards and also other portfolio pages. Some examples can be found below;
- [https://brook-perryman.pixpa.com/](https://brook-perryman.pixpa.com/)
- https://www.matthewparkart.com/