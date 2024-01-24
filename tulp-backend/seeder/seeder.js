const { default: mongoose } = require("mongoose")
const User = require("../models/user.model")

const seedDB = async () => {
  console.log("mongodb://127.0.0.1:27017/tulp_db")
  // mongoose connecttion
  mongoose
    .connect("mongodb://127.0.0.1:27017/tulp_db")
    .catch((err) => {
      console.log(err.stack)
      process.exit(1)
    })
    .then(() => {
      console.log("connected to db in development environment")
    })

  // seed admin
  const existingAdmin = await User.findOne({ role: "admin" })
  if (!existingAdmin) {
    await User.create({
      username: "alihakim",
      password: "password",
      email: "alihakime7732@gmail.com",
      firstName: "Ali",
      lastName: "Hakim",
      role: "admin",
    })
    console.log("Admin user seeded successfully.")
  } else {
    console.log("Admin user already exists.")
  }

  //instructors
  await User.create({
    username: "mohammad",
    password: "password",
    email: "mohammad@gmail.com",
    firstName: "mohammad",
    lastName: "hakim",
    role: "instructor",
    birth: "2000-10-10",
    imageUrl: "uploads/703609927084448-Male_15.jpg",
    aboutMe:
      "I am an instructor I live in chaqraa I love teaching computer science it is my favorite thing in the world",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "nur",
    password: "password",
    email: "nur@gmail.com",
    firstName: "nur",
    lastName: "hakim",
    role: "instructor",
    birth: "1986-10-10",
    imageUrl: "uploads/31085049448102-Female_16.jpg",
    aboutMe:
      "I am an instructor I like food and teaching english, I have a kid his name is karim, and life is fun away from my brother",
    education: {
      degree: "English",
      university: "LAU",
      dateOfGraduation: "2010-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "fadia",
    password: "password",
    email: "fadi@gmail.com",
    firstName: "fadi",
    lastName: "hakim",
    role: "instructor",
    birth: "2000-10-10",
    imageUrl: "uploads/7348145900572167-Female_5.jpg",
    aboutMe:
      "I live in canada, away from my family, it is not fun here but at least the internet is good and we can see snow everyday",
    education: {
      degree: "BioChemstry",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "mohanad",
    password: "password",
    email: "mohanad@gmail.com",
    firstName: "mohanad",
    lastName: "foani",
    role: "instructor",
    birth: "2000-10-10",
    imageUrl: "uploads/2633464853434935-Male_2.jpg",
    aboutMe:
      "I went to russia for some reason to be a doctor I think I wasted my life but it is okay since it is fun",
    education: {
      degree: "doctor",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "hassan",
    password: "password",
    email: "hassan@gmail.com",
    firstName: "hassan",
    lastName: "hakim",
    role: "instructor",
    birth: "2000-10-10",
    imageUrl: "uploads/3475539134119139-Male_7.jpg",
    aboutMe: "I dont know why I am here but everything is fine I guess",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })

  //students
  await User.create({
    username: "johnsmith",
    password: "password",
    email: "johnsmith@gmail.com",
    firstName: "john",
    lastName: "smith",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/4365400219945561-Male_10.jpg",
    aboutMe:
      "I love exploring new things and embracing challenges. Passionate about learning and growing every day",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "emilyjohnson",
    password: "password",
    email: "emilyjohnson@gmail.com",
    firstName: "Emily",
    lastName: "Johnson",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/4731404878115475-Female_2.jpg",
    aboutMe:
      "Adventurous spirit, always seeking inspiration. A believer in continuous improvement and making a positive impact",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "michealdavis",
    password: "password",
    email: "michealdavis@gmail.com",
    firstName: "micheal",
    lastName: "davis",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/005426835562341692-Male_17.jpg",
    aboutMe:
      "Curious mind, creative soul. Enthusiastic learner, always striving for excellence",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "suzan",
    password: "password",
    email: "suza@gmail.com",
    firstName: "suzan",
    lastName: "david",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/5894220152385821-Male_6.jpg",
    aboutMe:
      "Curious mind, creative soul. Enthusiastic learner, always striving for excellence",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "karim",
    password: "password",
    email: "karim@gmail.com",
    firstName: "karim",
    lastName: "nasirdin",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/6543767995972636-Male_14.jpg",
    aboutMe:
      "Curious mind, creative soul. Enthusiastic learner, always striving for excellence",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "saif",
    password: "password",
    email: "saif@gmail.com",
    firstName: "saif",
    lastName: "hasan",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/6574520027483493-Male_5.jpg",
    aboutMe:
      "Curious mind, creative soul. Enthusiastic learner, always striving for excellence",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "chris",
    password: "password",
    email: "chris@gmail.com",
    firstName: "chris",
    lastName: "noeleen",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/7434099611858225-Male_3.jpg",
    aboutMe:
      "Curious mind, creative soul. Enthusiastic learner, always striving for excellence",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "dana",
    password: "password",
    email: "dana@gmail.com",
    firstName: "dana",
    lastName: "rahman",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/7257448531396165-Female_13.jpg",
    aboutMe:
      "Curious mind, creative soul. Enthusiastic learner, always striving for excellence",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "safa",
    password: "password",
    email: "safa@gmail.com",
    firstName: "safa",
    lastName: "rahman",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/37381456107329214-Female_1.jpg",
    aboutMe:
      "Curious mind, creative soul. Enthusiastic learner, always striving for excellence",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "kevin",
    password: "password",
    email: "kevin@gmail.com",
    firstName: "kevin",
    lastName: "cawell",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/09343781587154654-Male_11.jpg",
    aboutMe:
      "Curious mind, creative soul. Enthusiastic learner, always striving for excellence",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })
  await User.create({
    username: "jack",
    password: "password",
    email: "jack@gmail.com",
    firstName: "jack",
    lastName: "mecwell",
    role: "student",
    birth: "2000-10-10",
    imageUrl: "uploads/10742309225863544-Male_9.jpg",
    aboutMe:
      "Curious mind, creative soul. Enthusiastic learner, always striving for excellence",
    education: {
      degree: "Computer Science",
      university: "SE Factory",
      dateOfGraduation: "2020-10-10",
    },
    socialMediaLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linked.com",
    },
  })

  // mongoose disconnect
  mongoose.connection.close()
}

seedDB()
