const mongoose = require('mongoose');
const User = mongoose.model('User');
const current_user = require("../models/user");
const session = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = {
	index: (req, res) => {
		console.log('Hit home route');
		let err = false
		if (!req.session.user) {
			console.log("too bad")
			req.session.user = ''
			return res.json(false)
		}
		else {
			User.findOne({ email: req.session.user })
				.then(user => res.json(user))
				.catch(err => {
					console.log("can't find")
					res.status(500).json(err)
				}) 
		}
	},
	register: function (req, res) {
		const newUser = new User(req.body)
		// console.log(req.body.email)
		// console.log(newUser)
		if (newUser === User.findOne({ email: req.body.email })) {
			return res.status(500).send(err)
		}
		else if (req.body.password != req.body.confirmPwd) {
			// console.log("passwords don't match")
			req.session.errors = newUser.errors
			return res.status(500).send(err)
		} else {
			newUser.save()
				.then(() => {
					req.session.user = req.body.email;
					// console.log(req.session.user)
					res.json(true)
				})
				.catch(err => {
					// req.session.errors = newUser.errors
					// console.log("User save error", err)
					return res.status(500).send(err)
				})
		}
	},
	login: function (req, res) {
		console.log(req.body.password)
		console.log("this is log")
		const email = req.checkBody('email', 'Email input must be entered').notEmpty()
		const password = req.checkBody('password', 'Password input must be full').notEmpty()
		const match = req.checkBody('email', 'Email not Found!').notEmpty()
		var errors = req.validationErrors();
		if (errors) {
			req.session.login = errors
			res.status(500).send(req.session.login)
		}
		else {
			const user = User.findOne({ email: req.body.email }, function (err, current_user) {
				if (err || user == null) {
					req.session.login = "User not Found!" 
					return res.json(req.session.login)
				}
				current_user.comparePassword(req.body.password, function (err, isMatch) {
					if (err) {
						console.log("hello")
						req.session.errors = "password does not match!"
						return res.status(500).send(err)
					}
					console.log("success")
					req.session.user = req.body.email
					res.json(true)
					// return res.redirect("/dashboard")
				})
			})
		}
	},
	dashboard: function (req, res) {
		if (!req.session.user) {
			req.session.user = ''
		}
		console.log(req.session.user)
		User.findOne({ email: req.session.user }, function (err, user) {
			if (err) { console.log("something went worng!") }
			
			const context = {
				"user": user
			}
			res.json(context)
		})
	},
	logout: (req, res) => {
		console.log("hello")
		req.session.user = null
		console.log(req.session.user)
		res.json(true)
	}

}
