"use strict";
/**
 * Config.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const shelljs_1 = __importDefault(require("shelljs"));
const object_path_1 = __importDefault(require("object-path"));
const Merge_1 = require("./Utils/Merge");
const Component_1 = require("./Component");
const String_1 = require("./Utils/String");
/**
 * Class Config
 *
 * Config data and files manager.
 *
 * @version 1.0.0
 */
class Config extends Component_1.Component {
    /* ----------------------------------------------------------------------- */
    /**
     * Config constructor.
     *
     * @param path Path to the location of the config files.
     * @param data Initial config data.
     */
    constructor(path = '', data = {}) {
        /* Call parent. */
        super();
        /**
         * Internal storage.
         */
        this.storage = {};
        /**
         * Path to the location of the config files.
         */
        this._path = '';
        /* Set search path. */
        this.path = path;
        /* Set initial data. */
        this.storage = data;
    }
    /**
     * Path getter.
     */
    get path() {
        return this._path;
    }
    /**
     * Path setter.
     *
     * @param value New path value.
     */
    set path(value) {
        /* Normalize delimiters. */
        value = String_1.trim(value, '\/');
        /* Resolve full path. */
        value = path_1.default.resolve(value) + path_1.default.sep;
        /* Check if the folder exists. */
        if (!fs_1.default.existsSync(value)) {
            /* Create a folder. */
            shelljs_1.default.mkdir('-p', value);
        }
        /* Set clear path. */
        this._path = value;
    }
    /* ----------------------------------------------------------------------- */
    /**
     * Determine if the given config value exists using "dot" notation.
     *
     * @param key Dot notation index for search in config.
     */
    has(key) {
        /* Format key. */
        key = this.formatKey(key);
        /* Find data. */
        return object_path_1.default.has(this.storage, key);
    }
    /**
     * Get an item from storage using "dot" notation.
     *
     * @param key Dot notation index for search in config.
     * @param preset Default data if key not represented.
     */
    get(key, preset = null) {
        /* Format key. */
        key = this.formatKey(key);
        /* Get resource name. */
        let resource = key.split('.')[0];
        /* If not found, load the resource. */
        if (!this.has(resource)) {
            this.load(resource);
        }
        /* Find data. */
        return object_path_1.default.get(this.storage, key, preset);
    }
    /**
     * Set an item to storage using "dot" notation.
     *
     * @param key Dot notation index for search in config.
     * @param value New data.
     */
    set(key, value) {
        /* Format key. */
        key = this.formatKey(key);
        /* Set data. */
        object_path_1.default.set(this.storage, key, value);
        /*  */
        return this;
    }
    /**
     * Delete an item from storage using "dot" notation.
     *
     * @param key Dot notation index for search in config.
     */
    del(key) {
        /* Format key. */
        key = this.formatKey(key);
        /* Delete data. */
        object_path_1.default.del(this.storage, key);
        /*  */
        return this;
    }
    /* ----------------------------------------------------------------------- */
    /**
     * Loading config data from file.
     *
     * @param key Dot notation index for search in config.
     */
    load(key) {
        /* Format key. */
        key = this.formatKey(key);
        /* Get resource name. */
        let resource = key.split('.')[0];
        /* Comparison with runtime environment. */
        for (const value of ['', '.env']) {
            /* Formation of the file name. */
            let file = this.path + resource + value + '.json';
            /* Check if the file exists. */
            if (fs_1.default.existsSync(file)) {
                try {
                    /* Load file to storage. */
                    this.storage[resource] = Merge_1.Merge.merge(
                    /* Clone. */
                    true, 
                    /* Recursive. */
                    true, 
                    /* Original. */
                    this.storage[resource], 
                    /* File data. */
                    JSON.parse(fs_1.default.readFileSync(file, 'utf8')));
                }
                catch (error) {
                    console.error(error);
                }
            }
        }
        /*  */
        return this;
    }
    /**
     * Write the config data in a file.
     *
     * @param key Dot notation index for search in config.
     */
    save(key) {
        /* Format key. */
        key = this.formatKey(key);
        /* Get resource name. */
        let resource = key.split('.')[0];
        /* Formation of the file name. */
        let file = this.path + resource + '.env.json';
        /* Check if the file exists. */
        if (!fs_1.default.existsSync(file)) {
            /* Get the folder name. */
            let dir = path_1.default.dirname(file);
            /* Check if the folder exists. */
            if (!fs_1.default.existsSync(dir)) {
                /* Create a folder. */
                shelljs_1.default.mkdir('-p', dir);
            }
        }
        /* Write the data to a file. */
        fs_1.default.writeFileSync(file, JSON.stringify(this.storage[resource]));
        /*  */
        return this;
    }
    /* ----------------------------------------------------------------------- */
    /**
     * Clear key from spaces and normalizes the delimiters.
     *
     * @param key Dot notation index for search in config.
     */
    formatKey(key) {
        key = String_1.trim(key, '\/');
        key = String_1.str_replace(["\\", "/"], '/', key);
        return key;
    }
}
exports.Config = Config;
/* End of file Config.ts */ 
