import { assert } from 'meteor/practicalmeteor:chai';
import { Meteor } from 'meteor/meteor';

import MapCtrl from './map.ctrl';

describe('map', () => {

  describe('Controller', () => {
    it('is centered in brazil by default', () => {
      const brazilCenter = {
        lat: -15.893,
        lng: -52.2599,
        zoom: 5
      };
      const reactiveMock = (obj) => {
        obj.helpers = () => {};
        obj.getReactively = () => {};

        return { attach: () => {} };
      };
      const $scopeMock = {
        $watch: () => {}
      };
      const $mdMediaMock = () => {};

      const serviceMock = {
        findGeolocation: () => {}
      };

      if (Meteor.isClient) {
        assert.deepEqual(new MapCtrl($scopeMock, reactiveMock, $mdMediaMock, serviceMock).center, brazilCenter);
      }
    });
  });
});
