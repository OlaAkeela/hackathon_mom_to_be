/**
 * Everyday_Info.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    text: {
      type: 'text'
    },
    no_of_views: {
      type: 'integer'
    },
    info_language: {
      type: 'integer'
    }
  }
};

