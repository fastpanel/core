/**
 * Config.spec.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import fs from 'fs';
import { expect } from 'chai';
import * as fastPanel from './../src';

describe("fastPanel Core", () => {

  describe('Config', () => {
    
    let config: fastPanel.Config = null;
    
    it("instanceof", () => {
      config = new fastPanel.Config('test/.app/config', {a: 1, b: {c: 3}, deep: {}});
      expect(config).to.instanceof(fastPanel.Config);  
    });
    
    it('formatKey', () => {
      let keyA = '/Ext/Db.name';
      let keyB = "/Ext/Db.name";
      let keyC = '\\Ext\\Db.name';
      let keyD = "\\Ext\\Db.name";

      expect(config.formatKey(keyA)).to.equal('Ext/Db.name');
      expect(config.formatKey(keyB)).to.equal('Ext/Db.name');
      expect(config.formatKey(keyC)).to.equal('Ext/Db.name');
      expect(config.formatKey(keyD)).to.equal('Ext/Db.name');
    });

    it('getters', () => {
      expect(config.get('a')).to.equal(1);
      expect(config.get('b.c')).to.equal(3);
      expect(config.get('b.e.no', 'Qwerty')).to.equal('Qwerty');
    });

    it('setters', () => {
      config.set('a', 2);
      expect(config.get('a')).to.equal(2);

      config.set('b.c', 'test');
      expect(config.get('b.c')).to.equal('test');

      config.set('b.e.no', 'Qwerty');
      expect(config.get('b.e.no', false)).to.equal('Qwerty');
      
      config.unset('b.e.no');
      expect(config.get('b.e.no', false)).to.equal(false);
    });
    
    it('load', () => {
      expect(config.get('App.name', false)).to.equal('fastPanel Core Test');
      expect(config.get('App.deep.deep.deep', false)).to.equal(true);
      expect(config.get('Boot', false)).deep.equal(['A', 'B']);
    });
    
    it('save', () => {
      config.set('App.version', '1.0.0');
      config.save('App');

      expect(fs.existsSync('test/.app/config/App.env.json')).to.equal(true);
      expect(config.get('App.version')).to.equal('1.0.0');

      fs.unlinkSync('test/.app/config/App.env.json');
    });

  });

});

/* End of file Config.spec.ts */