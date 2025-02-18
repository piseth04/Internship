'use strict';

/**
 * num service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::num.num');
