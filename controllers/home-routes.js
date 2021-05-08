const router = require("express").Router();
const { BlogPost, Comment, User } = require("../models");

router.get("/", async (req, res) => {
  console.log("just hold on were coming home");
  try {
    const blogData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blogposts = blogData.map((blogpost) => blogpost.get({ plain: true }));

    // console.log(blogposts)

    // sanity check
    console.log(blogposts);

    res.render("homepage", {
      blogposts: blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/blogpost/:id", async (req, res) => {
  try {
    const blogData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["author_id", "comment_body"],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const post = blogData.get({ plain: true });
    res.render("blogpost", { post });
  } catch (err) {}
});

router.get("/dashboard", async (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["author_id", "comment_body"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
