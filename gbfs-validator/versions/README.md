# GBFS versions

The `versions` folder contains json schemas from `MobilityData/gbfs-json-schema` and additionnal configuration for the validator (one additionnal file per version)

## JSON schemas

### The `schemas` folder

The `schemas` folder contains a [git subtree](https://www.atlassian.com/git/tutorials/git-subtree) of https://github.com/MobilityData/gbfs-json-schema.

You can pull schema update by using the command `git subtree pull --prefix gbfs-validator/versions/schemas https://github.com/MobilityData/gbfs-json-schema.git master --squash`

### The `partial` folder

The `partial` folder contains partial schemas that are dynamically generated and merged into the schema at runtime.

Those partial schemas contains data depending, for example, on the list of feeds or the data they contain.

## The `additional` folder

The `additional` folder contains additionnal schemas, dynamically generated used when a merge is not possible or not desirable.


# Contributing back

If you want to push a contribution to the schemas sub-project (`MobilityData/gbfs-json-schema`), you can use the command

```
git subtree push --prefix=gbfs-validator/versions/schemas/ https://github.com/MobilityData/gbfs-json-schema.git BRANCH
```

:warning: You probably don't have write access on `MobilityData/gbfs-json-schema`.
Please, fork it before and replace the repository url with your forked repository url.
