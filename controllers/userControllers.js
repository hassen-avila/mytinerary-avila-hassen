const User = require('../models/user')
const bcryptjs = require('bcryptjs')

const UserControllers = {

    singUpUsers: async (req, res) => {
        const { nameUser, lastNameUser, photoUser, email, password, country, from } = req.body.userData
        try {
            const userExists = await User.findOne({ email })
            if (userExists) {
                if (userExists.from.indexOf(from) !== -1) {
                    res.json({
                        success: false,
                        from: from,
                        message: `user ${nameUser} already exists, please LOG IN!`
                    })
                } else {
                    const passwordHasheada = bcryptjs.hashSync(password, 10)
                    userExists.from.push(from)
                    userExists.password.push(passwordHasheada)
                    if (from === "SignUpForm") {
                        await userExists.save()
                        res.json({
                            success: true,
                            from: from,
                            message: ``
                        })

                    } else {
                        userExists.save()
                        res.json({
                            success: true,
                            from: from,
                            message: `We add ${from} to Sing in!`
                        })
                    }
                }
                } else {                    
                    const passwordHasheada = bcryptjs.hashSync(password, 10)
                    const newUser = await new User({
                        nameUser,
                        lastNameUser,
                        photoUser,
                        email,
                        country,
                        from: [from],
                        password: [passwordHasheada],
                        emailVerified: false,
                    })
                    if (from !== "SignUpForm") {
                        await newUser.save()
                        
                        res.json({
                            success: true,
                            from: from,
                            message: `New User created!`
                        })
                    } else {
                        await newUser.save()
                        res.json({
                            success: true,
                            from: from,
                            message: `Check ${email} to validate and finish your acount!`
                        })
                    }
                }
            } catch (error) {
                console.log(error)
                res.json({ success: false, message: "Something went wrong, try again in a few minutes" })
            }
        },

        signInUser: async (req, res) => {
            const { email, password, from } = req.body.userLog
            try {
                const userExists = await User.findOne({ email })
                if (!userExists) {
                    res.json({ success: false, message: `${email} has no account in MyTinerary, please SIGN UP!` })
                } else {
                    if (from !== "LogInForm") {
                        if (userExists.emailVerified) {
                        let passwordmatch = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
                        console.log(passwordmatch)
                        if (passwordmatch.length > 0) {
                            const userData = {
                                id: userExists._id,
                                nameUser: userExists.nameUser,
                                lastNameUser: userExists.lastNameUser,
                                photoUser: userExists.photoUser,
                                email: userExists.email,
                                country: userExists.country,
                                from: userExists.from, 
                            }
                            
                            await userExists.save()
                            res.json({
                                success: true,
                                from: from,
                                response: { userData },
                                message: `welcome back ${userData.nameUser}!`,
                            })
                        } else {
                            res.json({
                                success: false,
                                from: from,
                                message: "You have not registered with" + from + "if you want to enter with this method you must do the SingUp with" + from
                            })
                        }
                    } else {
                        let passwordmatch = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
                        if (passwordmatch.length > 0) {
                            const userData = {
                                id: userExists._id,
                                nameUser: userExists.nameUser,
                                lastNameUser: userExists.lastNameUser,
                                photoUser: userExists.photoUser,
                                email: userExists.email,
                                country: userExists.country,
                                from: userExists.from,
                            }
                            await userExists.save()
                            res.json({
                                success: true,
                                from: from,
                                response: {userData},
                                message: "Welcome again " + userData.nameUser + " " + userData.lastNameUser,
                            })
                        } else {
                            res.json({
                                success: false,
                                from: from,
                                message: `verify your email or password!`
                            })
                        }
                    }
                }
            }
            } catch (error) {
                console.log(error)
                res.json({ success: false,
                    message: "Something went wrong, try again in a few minutes" })
            }
        }
}
module.exports = UserControllers