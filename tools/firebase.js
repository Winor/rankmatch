const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://test-c10cb.firebaseio.com"
});

const auth = admin.auth()

async function giveAccess(uid) {
  try {
    await auth.setCustomUserClaims(uid, {
      alloweduser: true
    })
    return true
  } catch (err) {
    console.log(err)
    return null
  }
}

async function createSuper(email) {
  try {
    const rndPass = Math.random().toString(36).slice(-8)
    const user = await auth.createUser({
      email: email,
      emailVerified: false,
      password: rndPass,
      disabled: false
    })
    return { db: user, pass: rndPass}

  } catch (err) {
    console.log(err)
    return null
  }
}

module.exports = {
  createSuper,
  giveAccess
}