# Web Development Project 1 - Recipe Cards

Submitted by: Alvis Yong

This web app: Resource Board - Project 1

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **There is a unique theme for events or resources relevant to a specific community**
- [X] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [X] Buttons or links to a related resources are on each card component
- [X] The site is responsive for both desktop and mobile formats

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='[https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGlzaGRvMHJwOTF4ZmxiZTd0N3J0aDBoNjh6MjdveWs5Z3lyaWIwcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NQk3X1BT5esjKIJTst/giphy.gif](https://media.giphy.com/media/NQk3X1BT5esjKIJTst/giphy.gif)' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCAP
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Initially, I treated the Event functions in the jsx files similar to innerHTML where I tried to append strings to the divs, e.g. <div> {addToGrid} <div>. However, the website keep giving me errors and printed the element events like <Event name=...> onto the body. I realized this method tried the strings I was appending to the div as <p> and the Event function that was imported was also not being used. To debug, I used the map method and used it in the div. 

I learned that React allows me to interact with both Javascript and HTML together and I will keep this in mind to reduce redundant code.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
