'use strict';

const MergeTrees = require('broccoli-merge-trees');
const LessCompiler = require('broccoli-less-single');
const Funnel = require('broccoli-funnel');

const debug = require('broccoli-stew').debug;
const log = require('broccoli-stew').log;

const path = require('path');

module.exports = {
    name: 'ember-external-contact-components'

    // treeForAddon (tree) {
    //     let defaultTree = debug(this._super(...arguments), {name: 'default-tree'});
    //     let passedTree = debug(tree, {name: 'passed-tree'});
    //
    //     let addonLessTree = debug(new Funnel(passedTree, {
    //         include: ['components/**/*.less'],
    //         destDir: 'styles/addon'
    //     }), { name: 'addon-less-tree' });
    //
    //     let compiledLessTree = debug(new LessCompiler(
    //                                 debug(new MergeTrees([passedTree, addonLessTree]),
    //                                     {name: 'compiled-tree'}), 'styles/addon.less', `${this.name}.css`),
    //                                 {name: 'compiled-tree-result'});
    //
    //     // return compiledLessTree;
    //     // return defaultTree;
    //     return debug(new MergeTrees([defaultTree, compiledLessTree]), {name: 'result'});
    // },
};
