#!/usr/bin/env node

'use strict';

var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});
var params = {screen_name: 'YOUR_TWITTER_USERNAME'};
var tweet = process.argv.slice(2, process.argv.length).join(' ');

client.post('statuses/update', { status: tweet},  
  function(error, tweet, response) {
    if(error) throw error;
    console.log("Success!"); 
});