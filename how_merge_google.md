### get newest code from upstream
git remote google git@github.com:google/blockly
git pull google master

### remove all language stuff again, that we don't nee.
cd msg/json/ && git rm !(constants.json|de.json|en.json|qqq.json|synonyms.json)
cd msg/js/ && git rm !(de.js|en.js)

### list all conflicts and fix them file by file.
git status | grep both
