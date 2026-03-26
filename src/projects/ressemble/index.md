---
title: Ressemble
headline: Refining visual styles and the user experience to help sales teams learn
theme: light
client: Ressemble
year: 2021
type: visual design, front-end development
date: 2021-09-01
image_bg: "#2A2C39"
image_layout: landscape
images:
  - src: images/hero.png
    alt: A view of a dashboard of an app.
preview_image_description: A view of a dashboard of an app.
description: Ressemble is a brand new platform that helps sales leaders get insight into the valuable DNA of their potential customers by enabling their sales team to work towards objectives while collecting information. I help them define their visual language and create seamless user experiences.
---

<div class="work__data">
  <div>
    <a href="https://www.ressemble.com" class="button-link" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" class="work__external-link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      View live site
    </a>
  </div>
  <div>
    <p><strong>My role</strong></p>
    <ul>
      <li>Lead design sprints and discussions</li>
      <li>Visual design</li>
      <li>HTML/SCSS implementation</li>
    </ul>
  </div>
  <div>
    <p><strong>Tech &amp; tools</strong></p>
    <ul>
      <li>Miro</li>
      <li>Figma</li>
      <li>Elixir</li>
      <li>HTML</li>
      <li>Tailwind CSS</li>
    </ul>
  </div>
  <div>
    <p><strong>Dates</strong></p>
    <ul>
      <li>March 2021 - present</li>
    </ul>
  </div>
</div>

<h2 class="work__subhead">Call debriefs</h2>

<div class="two-column">
  <figure>
    <img src="images/debrief-1.png" alt="Customer debrief page before being filled out." class="two-column__image" loading="lazy">
    <figcaption>Empty debrief</figcaption>
  </figure>
  <figure>
    <img src="images/debrief-2.png" alt="Customer debrief page after being filled out." class="two-column__image" loading="lazy">
    <figcaption>In-progress debrief</figcaption>
  </figure>
</div>

<h3>Making call notes actionable</h3>

<p>By giving users quick access to key actions we are able to teach sales teams that the information they collect is useful beyond notes that refresh your memory. Here we surface comments from a user's team and allow users to schedule reminders concerning a specific note.</p>

<figure>
  <img src="images/debrief-3.png" alt="Customer debrief page after being filled out." class="work__image" loading="lazy">
</figure>

<h3>Multiple ways to mark up notes</h3>

<p>Users are unique. Through our testing we found many different working styles and preferences by our users. We provide several entry points for marking up notes to minimize friction.</p>

<figure>
  <img src="images/debrief-2.png" alt="Customer debrief page after being filled out." class="work__image" loading="lazy">
</figure>

<h3>Showing progress, building motivation</h3>

<p>Allowing users to see how many objectives they've captured as they go helps motivate them to collect the information necessary to finish it 100%. The guide provides more in-depth descriptions of the objectives themselves.</p>

<figure>
  <img src="images/debrief-4.png" alt="Customer debrief page after being filled out." class="work__image" loading="lazy">
</figure>

<h2 class="work__subhead">Customer summary</h2>

<h3>Focusing on the task at hand</h3>

<p>The objectives and notes are at the forefront here, while the putting the timeline, comments, and details in a tab-able sidebar lets users focus on the task they came to accomplish.</p>

<figure>
  <img src="images/customer-page-3.png" alt="Customer debrief page after being filled out." class="work__image" loading="lazy">
</figure>

<h2 class="work__subhead">Insights report</h2>

<h3>Compact view, easily accessible details</h3>

<p>The objectives and notes are at the forefront here, while the putting the timeline, comments, and details in a tab-able sidebar lets users focus on the task they came to accomplish.</p>

<figure>
  <img src="images/insights-report-1.png" alt="Customer debrief page after being filled out." class="work__image" loading="lazy">
</figure>

<figure>
  <img src="images/insights-report-3.png" alt="Customer debrief page after being filled out." class="work__image" loading="lazy">
</figure>

<figure>
  <img src="images/insights-report-2.png" alt="Customer debrief page after being filled out." class="work__image" loading="lazy">
</figure>

<h2 class="work__subhead">The code</h2>

<h3>Repetitive, overly specific styles</h3>

<p>When implementing the designs shown above, one of my main focuses was to utilize Tailwind more to make the styles more DRY (Do not Repeat Yourself). By using the principles of BEM naming conventions I was able to condense the numerous and varying button styles into just two button styles that managed to work for almost all use cases across the app.</p>

<figure>
  <img src="images/PR-diff.png" alt="Code snippet showing how many button styles there were originally" class="work__image work__image--light" style="width: 164px;" loading="lazy">
  <figcaption>PRs like this make me happy :)</figcaption>
</figure>

<figure>
  <img src="images/button-styles-before.png" alt="Code snippet showing how many button styles there were originally" class="work__image" loading="lazy">
  <figcaption>Before</figcaption>
</figure>

<figure>
  <img src="images/button-styles-after.png" alt="Code snippet showing the reduced amount of button styles after refactoring" class="work__image" loading="lazy">
  <figcaption>After</figcaption>
</figure>

<h3>Opaque HTML and monolithic stylesheets</h3>

<p>As a new developer to the project trying to rework the existing HTML, I found that the Tailwind styles were not descriptive enough to let me know what I was looking at in the code.</p>

<p>By reworking the CSS to use BEM naming conventions and creating classes for the styles that contained Tailwind classes we were able to have the best of both worlds. Once refactored, the class names inform other developers of what each element is while still using Tailwind in the stylesheets.</p>

<figure>
  <img src="images/html-before.png" alt="Code snippet showing how many button styles there were originally" class="work__image" loading="lazy">
  <figcaption>Before</figcaption>
</figure>

<figure>
  <img src="images/html-after.png" alt="Code snippet showing the reduced amount of button styles after refactoring" class="work__image" loading="lazy">
  <figcaption>After</figcaption>
</figure>
