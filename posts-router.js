const router = require("express").Router();

const Posts = require("./data/db");

router.post("/", (req, res) => {
    const body = req.body;

    // Check if there is a title and contents.
    if (!body.title || !body.contents) {
        // If not, return a 400.
        res.status(400).json({
            errorMessage: "Please provide title and contents for the post."
        });
    } else {
        // If so, use this method and send the body.
        Posts.insert(body)
            .then(result => {
                res.status(201).json(result);
            })

            .catch(() => {
                res.status(500).json({
                    error: "There was an error while saving the post to the database."
                });
            });
    }
});

router.post("/:id/comments", (req, res) => {
    const comment = req.body.text;
    const id = req.params.id;
    Posts.findById(id)
        .then(result => {
            if (result.length > 0) {
                if (comment) {
                    //   res.status(200).json(result);
                    Posts.insertComment(comment)
                        .then(commentResult => {
                            res.status(200).json(commentResult);
                        })
                        .catch(() => {
                            res.status(500).json({
                                error:
                                    "There was an error while saving the comment to the database."
                            });
                        });
                } else {
                    res
                        .status(400)
                        .json({ errorMessage: "Please provide text for the comment." });
                }
            } else {
                res
                    .status(404)
                    .json({ message: "The post with the specified ID does not exist." });
            }
        })
        .catch(() => {
            res.status(500).json({ error: "The post could not be retrieved." });
        });
});
