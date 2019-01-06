/**
 * MixinBuilder.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

/**
 * Class MixinBuilder
 * 
 * Mixin assistant.
 * 
 * @version 1.0.0
 */
export class MixinBuilder {

  /**
   * Class to expand mixins.
   */
  public superClass: any = null;

  /**
   * MixinBuilder constructor.
   * 
   * @param superClass Class to expand mixins.
   */
  public constructor (superClass: any) {
    this.superClass = superClass;
  }

  /**
   * 
   * @param mixins 
   */
  public with (...mixins: any) {
    return mixins.reduce((c: any, mixin: any) => mixin(c), this.superClass);
  }

}

/**
 * Helper method using a mixin assistant.
 * 
 * @param superClass Class to expand mixins.
 */
export const Mixer = (superClass: any) => new MixinBuilder(superClass);

/* End of file MixinBuilder.ts */