const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const unicornSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    dob: Date,
    loves: [String],
    gender: String
});

const unicornModel = mongoose.model("unicorns", unicornSchema);

app.listen(process.env.PORT || 5000, err => {
    if (err) console.log(err);
})

app.use(express.static(`public`));

app.use(bodyparser.urlencoded({
    extended: true
}));

app.get("/findUnicorns", (req, res) => {
    console.log("request has been received");
    // res.send("Request received");

    unicornModel.find((err, unicorns) => {
        if (err) {
            console.log("Error occurred");
        } else {
            console.log("On time, on course, and on target.");
            console.log(unicorns);
        }
        res.send(JSON.stringify(unicorns));
    });
})

// mongodb+srv://nng32:aJBf0sIKFZ3PhxBZ@1537-a3.jimqj.mongodb.net/1537?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://nng32:aJBf0sIKFZ3PhxBZ@1537-a3.jimqj.mongodb.net/1537?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
