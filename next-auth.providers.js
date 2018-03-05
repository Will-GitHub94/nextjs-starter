/**
 * next-auth.providers.js Example
 *
 * This file returns a simple array of oAuth Provider objects for NextAuth.
 *
 * This example returns an array based on what environment variables are set,
 * with explicit support for Facebook, Google and Twitter, but it can be used
 * to add strategies for other oAuth providers.
 *
 * Environment variables for this example:
 *
 * FACEBOOK_ID=
 * FACEBOOK_SECRET=
 * GOOGLE_ID=
 * GOOGLE_SECRET=
 * TWITTER_KEY=
 * TWITTER_SECRET=
 *
 * If you wish, you can put these in a `.env` to seperate your environment
 * specific configuration from your code.
 * */

// Load environment variables from a .env file if one exists
require("dotenv").config();

module.exports = () => {
	const providers = [];

	/**
   * Note: Twitter doesn't expose emails by default.
   * If we don't get one NextAuth will create a placeholder in the form
   * `{provider}-{account-id}@localhost.localdomain`
   *
   * To have your Twitter oAuth return emails go to apps.twitter.com and add
   * links to your Terms and Conditions and Privacy Policy under the "Settings"
   * tab, then check the "Request email addresses" from users box under the
   * "Permissions" tab.
   * */
	if (process.env.TWITTER_KEY && process.env.TWITTER_SECRET) {
		providers.push({
			providerName: "Twitter",
			providerOptions: {
				scope: []
			},
			Strategy: require("passport-twitter").Strategy,
			strategyOptions: {
				consumerKey: process.env.TWITTER_KEY,
				consumerSecret: process.env.TWITTER_SECRET,
				userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"
			},
			getProfile(profile) {
				// Normalize profile into one with {id, name, email} keys
				return {
					id: profile.id,
					name: profile.displayName,
					email: (profile.emails && profile.emails[0].value) ? profile.emails[0].value : ""
				};
			}
		});
	}

	if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
		providers.push({
			providerName: "github",
			providerOptions: {
				scope: []
			},
			Strategy: require("passport-github").Strategy,
			strategyOptions: {
				clientID: process.env.GITHUB_ID,
				clientSecret: process.env.GITHUB_SECRET,
				callbackURL: "http://127.0.0.1/auth/github/callback"
			},
			getProfile(profile) {
				// Normalize profile into one with {id, name, email} keys
				return {
					githubId: profile.id
				};
			}
		});
	}

	if (process.env.LINKEDIN_ID && process.env.LINKEDIN_SECRET) {
		providers.push({
			providerName: "LinkedIn",
			providerOptions: {
				scope: []
			},
			Strategy: require("passport-linkedin").Strategy,
			strategyOptions: {
				consumerKey: process.env.LINKEDIN_ID,
				consumerSecret: process.env.LINKEDIN_SECRET,
				userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"
			},
			getProfile(profile) {
				// Normalize profile into one with {id, name, email} keys
				return {
					id: profile.id,
					name: profile.displayName,
					email: (profile.emails && profile.emails[0].value) ? profile.emails[0].value : ""
				};
			}
		});
	}

	return providers;
};
