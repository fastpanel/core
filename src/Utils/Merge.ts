/**
 * Merge.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 * 
 * This class is ported from the "https://github.com/yeikos/js.merge" repository.
 */

/**
 * 
 */
export class Merge {

  /**
   * Merge two or more objects.
   * 
   * @param {boolean} clone 
   * @param {boolean} recursive 
   * @param {Array<any>} argv 
   * 
   * @return any
   */
  public static merge (clone: boolean, recursive: boolean, ...argv: any[]) : any {
    let result = argv[0],
			size = argv.length;

		if (clone || Merge.typeOf(result) !== 'object')

			result = {};

		for (let index = 0; index < size; ++index) {

			let item = argv[index],

				type = Merge.typeOf(item);

			if (type !== 'object') continue;

			for (let key in item) {

				let sitem = clone ? Merge.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = Merge.recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;
  }

  /**
   * Merge two objects recursively.
   * 
   * @param {any} base 
   * @param {any} extend 
   * 
   * @return any
   */
  protected static recursive (base: any, extend: any) : any {
    if (Merge.typeOf(base) !== 'object')

			return extend;

		for (let key in extend) {

			if (Merge.typeOf(base[key]) === 'object' && Merge.typeOf(extend[key]) === 'object') {

				base[key] = Merge.recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;
  }

  /**
   * Clone the input removing any reference.
   * 
   * @param {any} input 
   * 
   * @return any
   */
  protected static clone (input: any) : any {
    let output = input,
			  type = Merge.typeOf(input),
			  index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index = 0; index < size; ++index)
				output[index] = Merge.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)
				output[index] = Merge.clone(input[index]);

		}

		return output;
  }

  /**
   * Get type of variable.
   * 
   * @param {any} input 
   * 
   * @return string
   */
  protected static typeOf(input: any) : string {
    return ({}).toString.call(input).slice(8, -1).toLowerCase();
  }

}

/* End of file Merge.ts */