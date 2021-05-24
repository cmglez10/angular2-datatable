# Changelog

## 12.0.1 (2020-11-23)

Changes:

- Use Angular 12
- Sort headers are now 508 compliant and are usable by keyboard (Thanks @kvbutler)
- Publish in partial-ivy support - Angular ivy compiler required
- Stricter type declarations to prevent surprising runtime errors

## 11.1.0 (2020-11-23)

Changes:
    
    - Remove dependency to lodash

## 11.0.1 (2020-11-23)

Changes:
    
    - Specify correct peer dependency version

## 11.0.0 (2020-11-15)

Changes:
    
    - Use Angular 11

## 10.0.0 (2020-06-27)

Changes:
    
    - Use Angular 10

## 9.0.1 (2019-11-06)

Changes:
    
    - Use Angular 9
    - Use Angular CLI for build pipeline
    - Fix some linting issues

## 8.0.0 (2019-11-06)

Changes:
    
    - Use Angular 8

## 2.0.0 (2018-07-10)

Changes:
    
    - Published as package @pascalhonegger/ng-datatable
    - Use Angular 7

## 0.7.3 (2018-10-04)

Changes:
    
    - Security updates in dependencies.

## 0.7.2 (2018-10-03)

Changes:
    
    - Updated examples dependencies. (Thanks to @PascalHonegger)

## 0.7.1 (2018-10-03)

Changes:
    
    - Angular and RxJS get updated to version 6 (see package.json). The only code changes include changes to systemjs.config and two import statements.
    (Pull Request #3. Thanks to @PascalHonegger)

## 0.7.0 (2018-03-15)

Changes:
    
    - First commit of forked project (@cmglez10/ng-datatable)
    - Updated to Angular 5
    
## 0.6.0 (2017-03-27)

Fixes:

    - fix AOT incompatibility, changing @angular dependencies to peerDependencies, thanks to @trevex (#91)

## 0.5.2 (2016-11-13)

Changes:
    
    - added inputs/outputs for sorting (#14)
    
Bugfixes:

    - detect changes in inputData array (#10)
    - fixed detecting changes in mfRowsOnPage (#32)
    - fixed support for AOT compilation

## 0.5.1 (2016-10-25)

Changes:
    
    - changed the old "typings" system to the new "@types" system
    - added support for AOT compilation
    
Bugfixes:

    - sorting by child properties (#41)

## 0.5.0 (2016-10-09)

Breaking changes:

    - update angular library to 2.0.0
    
Bugfixes:

    - sort case insensitive
    - fixed pagination, fix #29, #33
    
#Changelog

## 0.4.2 (2016-05-11)

Breaking changes:

    - update angular library to 2.0.0-rc.0

## 0.3.0 (2016-05-08)

Breaking changes:

    - move `rowsOnPage` and `activePage` input from BootstrapPaginator to DataTable directive

Bugfixes:

    - fix error when mfData input is undefined
    - add src so map files should have correct paths

## 0.2.5 (2016-04-19)

Bugfixes:

    - fix not visible paginator

## 0.2.4 (2016-04-19)

Bugfixes:

    - add import for lodash in file `DataTable.ts`

## 0.2.3 (2016-03-21)

Bugfixes:

    - remove `href` attribute from DefaultSorter
    - add style `cursor: pointer` to links in DefaultSorter and BootstrapPaginator
    
## 0.2.2 (2016-03-21)

Bugfixes:

    - remove `href` attribute from BootstrapPaginator template
    
