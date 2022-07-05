const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const sendEmail = require('../controllers/sendEmail')
const jwt = require('jsonwebtoken')

const UserControllers = {

    singUpUsers: async (req, res) => {
        const { nameUser, lastNameUser, photoUser, email, password, country, from} = req.body.userData
        try {
            const userExists = await User.findOne({ email })
            const verification = false
            const uniqueString = crypto.randomBytes(15).toString('hex')
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
                    userExists.verification= true
                    if (from === "SignUpForm") {
                        await userExists.save()
                        res.json({
                            success: true,
                            from: from,
                            message: `We add ${from} to Sing in!`,
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
                        verification,
                        uniqueString:uniqueString,
                    })
                    if (from !== "SignUpForm") {
                        newUser.verification=true
                        await newUser.save()
                        res.json({
                            success: true,
                            from: from,
                            message: `New User created from ${from}!`
                        })
                    } else {
                        await sendEmail(email, uniqueString)
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
                } else if (userExists.verification) {
                        if (from !== "LogInForm") {
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
                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 1000* 60* 60*24})
                            await userExists.save()
                            res.json({
                                success: true,
                                from: from,
                                response: { userData, token },
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
                        if(userExists.verification === true){               
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
                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 1000* 60* 60*24})
                            await userExists.save()
                            res.json({
                                success: true,
                                from: from,
                                response: {userData, token},
                                message: "Welcome again " + userData.nameUser + " " + userData.lastNameUser,
                            })
                        } 
                        else {
                            res.json({
                                success: false,
                                from: from,
                                message: `verify your email or ypur password!`
                            })
                        }
                     }
                    }
                }
                else {
                     res.json({
                        success: false,
                        from: from,
                        message: `verify your acount in your email!`
                })
                }
            } catch (error) {
                console.log(error)
                res.json({ success: false,
                    message: "Something went wrong, try again in a few minutes" })
            }
        },
        verifyMail: async (req,res)=>{
            const {string} = req.params
            const user = await User.findOne({uniqueString: string})
            
            if(user){
                user.verification=true
                await user.save()
                res.redirect("http://localhost:3000/LogPage")
            }
            else{
                res.json({
                    success:false,
                    message: 'email has not been confirmed yet'
                })
            }
        },
        signOut: async (req, res) => {
            const email = req.body.closeUser;
            const user = await User.findOne({ email });
            await user.save();
            res.json({
              success: true,
              message: {email} + " sign out!",
            });
          },
        
        verifyToken:(req, res) => {
        
            if (!req.err) {
            res.json({
                success: true,
                response: {
                    id: req.user.id,
                    nameUser:req.user.nameUser,
                    email:req.user.email,
                    photoUser:req.user.photoUser,
                    from:"token"
                },
                message:"Hi! Welcome back "+req.user.nameUser}) 
            } else {
                res.json({
                    success:false,
                    message:"sign in please!"}) 
            }
        }
}
module.exports = UserControllers