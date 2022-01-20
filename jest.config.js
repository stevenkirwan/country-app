module.exports = {
	testMatch: ["**/*.(test).(js)"],
	coveragePathIgnorePatterns: ["/node_modules/"],
	modulePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
	testEnvironment: "jsdom"
};