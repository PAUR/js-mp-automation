'use strict';

const
    path = require('path');

const CURRENT_DIR = './';

class Layout {

    constructor(paths, root) {
        this.__layout = paths;
        this.setRoot(root || '');
    }

    setRoot(root) {
        if (this._root === root)
            return;

        this._root = root;

        for (let property in this.__layout)
            this[property] = this.resolveProperty(property);
    }

    resolveProperty(property, value) {

        if (!value) {
            value = this.__layout[property];
        }

        property = Layout.filterProperty(property);

        if (value instanceof Layout) {
            return this.resolveLayoutProperty(property, value);
        }

        if (value instanceof Array) {
            return this.resolveArrayProperty(property, value);
        }

        if (value instanceof Object) {
            return this.resolveObjectProperty(property, value);
        }

        return this.resolveStringProperty(value);
    }

    resolveLayoutProperty(property, value) {
        var valueRoot = value._root === '' ? property : value._root;

        return new Layout(value.__layout, path.join(this._root, valueRoot));
    }

    resolveObjectProperty(property, value) {
        var valueRoot = (typeof value._root === 'undefined') ? property : value._root;
        delete value._root;
        return new Layout(value, path.join(this._root, valueRoot));
    }

    resolveArrayProperty(property, values) {
        return values.map(value  => this.resolveArrayItemProperty(property, value));
    }

    resolveArrayItemProperty(property, value) {

        if (typeof value === 'string')
            return this.resolveStringProperty(value);

        throw new Error('unsupported node type in layout');
    }

    resolveStringProperty(value) {
        return CURRENT_DIR + path.join(this._root, String(value));
    }

    toString() {
        return this._root;
    }

    static filterProperty(property) {
        if (property === '_root')
            return '';
        return property;
    }
}

module.exports = Layout;