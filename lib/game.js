let clicks = 0;

function game(req, res) {
    clicks += 1;
    answer = {
        won: false,
        points: -1
    }
    if (clicks % 500 === 0)  {
        answer.won = true;
        answer.points = 250;
        res.send(JSON.stringify(answer))
    } else if (clicks % 100 === 0)  {
        answer.won = true;
        answer.points = 40;
        res.send(JSON.stringify(answer))
    } else if (clicks % 10 === 0)  {
        answer.won = true;
        answer.points = 5;
        res.send(JSON.stringify(answer))
    } else {
        res.send(JSON.stringify(answer))
    }
}

module.exports = game;