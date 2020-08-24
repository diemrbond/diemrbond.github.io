# 01 HTML CSS Git: Code Refactor

For this project we needed to clean-up and refactor the <\HTML> and <\CSS> for a fictitious marketing agency company, called Horiseon: Social Solution Services.

It was important to:
```
> Leave the code a little cleaner than we found it.
> Improve the codebase for long term sustainability.
> Fix any broken links
> Clean up the CSS to make it more efficient
> Consolidate CSS selectors and properties
> Follow semantic structure of HTML elements
> Include comments before each element or section of the page
> Include a README describing the project
> Upload to GITHUB and deploy the application using GIT PAGES.
```

## Acceptance Criteria

```
GIVEN a webpage meets accessibility standards
WHEN I view the source code
THEN I find semantic HTML elements
WHEN I view the structure of the HTML elements
THEN I find that the elements follow a logical structure independent of styling and positioning
WHEN I view the image elements
THEN I find accessible alt attributes
WHEN I view the heading attributes
THEN they fall in sequential order
WHEN I view the title element
THEN I find a concise, descriptive title
```

## Changelist
GENERAL CHANGES
- Added simple comments throughout code and css.
- Grouped the CSS into sections
- Added image <\alt> tags.
- Added <\figure> tags to images.

HEAD CHANGES
- Changed the <\title> to a more descriptive title

BODY CHANGES
HEADER
- Changed the <\div header> to a <\header> tag.
- Changed the blank <\div> to a <\nav> tag.
- Fixed broken link in <\nav> to point to correct id
- Updated css to locate the <\nav> instead of <\div> in header.

SECTION
- Changed the <\div content> to a <\section> tag.
- Added missing id tag to first div
- Changed the classes to main-content to remove duplication

ASIDE
- Changed the <\div benefits> to an <\aside> tag.
- Fixed unecessary <\img> tag.
- Changed the classes to aside and aside-content to remove duplication

FOOTER
- Changed the <\div footer> to a <\footer> tag.
- Added <\code> and <\time> tags to the footer
- Changed the <\footer> <\h2> to a <\h4> to follow page hierarchy.

CSS CHANGES
- Refactored the CSS to remove unnecessary duplication of selectors
- Adjust the CSS to suit footer change to <\h4>

## Author
Andrew Kelleher 
www.github.com/diemrbond