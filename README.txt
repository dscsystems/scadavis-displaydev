SCADAvis.io Display Development Helper V3
=========================================

Copyright 2020-present - DSC Systems

This tools is intended to help development of SCADAvis.io SVG display files.

Use it directly online here: https://dscsystems.github.io/scadavis-displaydev/

Or clone the repository to some local folder.

    git clone https://github.com/dscsystems/scadavis-displaydev.git

Put the SVG file to be edited in this same folder.
New files can be derived from helloworld.svg.

Make sure you have node.js installed.

    npx serve .

Open the browser and go to

    http://localhost:3000/

Edit the tags and values in the taglist.xlsx file or directly in the table of tags.
Tag lists must be prepared with tags in the first column and values in the second column.
Updated tags reflect in the visual.

Use the SCADAvis SVG editor to edit the SVG file.

Each time the SVG file is changed it will be automatically be reloaded by the tool.

The default visual has some scripted buttons that shows the "Tags in File" and "Tags in Data" that can help with debug.

Use the skills files to help with the AI development of the SVG file and App development.

    @.agents/skills/scadavis-svg/SKILL.md
    @.agents/skills/scadavis-api/SKILL.md

Tools used to built this project:
    https://bossanova.uk/jexcel/v3/
    https://github.com/paulhodel/jsuites
    https://github.com/sheetjs/js-xlsx https://sheetjs.com/
 