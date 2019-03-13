import Sitemap from 'react-router-sitemap';

const router = require('./router').default;
const Sitemap = new Sitemap('../').default;
 
(
    new Sitemap(router)
        .build('/')
        .save('./sitemap2.xml')

);
