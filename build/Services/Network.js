"use strict";
/**
 * Network.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cluster = __importStar(require("../Cluster"));
const Cli = __importStar(require("../Cli"));
exports.default = {
    async register(context) {
        console.log(Cli.Handler);
        console.log(Cluster.Handler);
        /* Check current app type. */
        if (context instanceof Cli.Handler) {
            console.log('Worker');
        }
        else {
            console.log('Not Worker');
        }
    },
    async startup(context) {
        /* Check current app type. */
        /* if (context instanceof Worker) {
          console.log('Worker');
        } else {
          console.log('Not Worker');
        } */
    }
};
/* End of file Network.ts */ 
