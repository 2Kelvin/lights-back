# Lights Back

![KPLCslides](https://github.com/2Kelvin/lights-back/assets/85868026/ce283a08-2b22-452c-91e0-3b44691b4abd)

## Introduction

`lights-back` is a web application tailored to do one simple job, help a client report a power issue to the power company and get the help they need as soon as possible. Basically, acting as an easy and straightforward portal between the client and the power company.

Link to the web app: Click [here](https://github.com/2Kelvin/lights-back)

Lights Back LinkedIn blog post: Click [here](https://www.linkedin.com/pulse/project-lights-back-kelvin-njihia-3npyf/)

My LinkedIn Profile: Click [here](https://www.linkedin.com/in/kelvin-njihia)

## What inspired Lights Back? The story behind the app

A few years back, I lived in an area which experienced constant power blackouts regularly. We're talking about atleast 3 - 4 times a week. Some of this outages lasted for days. I remember going through light outages for 3 days. That's when I had the idea to try to solve this problem using what I already had, programming. I noticed that part of the long black out problems was due to the delay in reporting the issue. The reason, people didn't have the contacts to the power company or an easy to follow channel to do this. That's when I decided to build lights back for this exact reason. I hope it helps someone out there to get the help they need for their home or business power issues.

## Usage

The UI is pretty straightforward and user friendly. It's basically a form that a client fills reporting their power problem and in return this data is sent in form of an email to the power company. This was made possible through the `emailjs` service.

The tips section is tailored to help clients create a better email and even offer technical help on a task like creating a google maps pin. The aim is to make the email sent be as helpful as it can to the power company to efficiently help the client.

On successful send of an email, the web application displays an 'email sent successfully' card to notify the client that their request has been sent to the power company and they can rest easy waiting for a response. On the other hand, if the email wasn't sent a respective error message is displayed so that the client can retry sending the email.

To avoid sending blank emails, the web app cannot send an email if the following three mandatory fields haven't been filled: email subject, name, email and message field. The pin location and phone number fields are optional but if filled can offer a better response experience to the client since the power company can directly reach them and tailor a way forward to offer a solution to their problem.

If the client just wanted a different method to reach the company, it's provided in the 'other contacts' section, either through a direct phone line to the company or through the USSD.

![otherKPLCslides](https://github.com/2Kelvin/lights-back/assets/85868026/ca8d6828-3e5c-4ef1-909d-2e0c970a3bee)

## Installation

Clone the project:

`git clone https://github.com/2Kelvin/lights-back.git`

Navigate to the project folder:

`cd lights-back`

Install project dependencies:

`npm install`

## Contribution

If you want to contribute on this project feel free to contact me.

## Summary

This project aims to achieve these goals:

- [x] reduce time searching for a way to reach the power company.
- [x] act as a direct portal to the power company and get help as soon as possible.
- [x] have all the power company's contacts in one place for clients to find and use responsibly.
