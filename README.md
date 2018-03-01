## Tweetly

This is a script to tweet from CLI.

## Prequisites
- NPM
- Twitter Developer Account

## Directions
1. Change Directory to location of tweetly and install dependencies.
	`$cd path/to/tweetly; npm install`
2. In tweetly.js, replace the text in the single quotes with your respective keys and secrets from twitter.
3. Make tweetly.js executeable.
	`$chmod u+x /path/to/tweetly.js`
4. In the Directory tweetly is located, use NPM to make a symbolic link.
	`$npm link`
5. You can now tweet by running the command "tweetly" followed by the desired content.
	`tweetly some tweet.`