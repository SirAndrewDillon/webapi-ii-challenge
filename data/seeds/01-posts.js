exports.seed = function (knex, Promise) {
  return knex('posts')
    .truncate()
    .then(function () {
      return knex('posts').insert([
        {
          title:
            'A lot of people are afraid of heights. Not me, I’m afraid of widths.',
          contents: 'Guess who said this',
        },
        {
          title: 'Bills travel through the mail at twice the speed of checks.',
          contents: 'Guess who said this',
        },
        {
          title:
            "Eagles may soar, but weasels don’t get sucked into jet engines.",
          contents: 'Guess who said this',
        },
        {
          title:
            " I almost broke both my arms trying to hold open a revolving door for a woman.",
          contents: 'Guess who said this',
        },
        {
          title:
            'I stayed up one night playing poker with Tarot cards. I got a full house and four people died.',
          contents: 'Guess who said this',
        },
        {
          title:
            'I was Caesarean born. Can’t really tell, although whenever I leave a house I go through the window.',
          contents: 'Guess who said this',
        },
        {
          title:
            'I went to a place to eat. It said breakfast at any time. So I ordered French Toast during the Renaissance.',
          contents: 'Guess who said this',
        },
        {
          title:
            ' I spilled spot remover on my dog and now he’s gone!',
          contents: 'Guess who said this',
        },
        {
          title:
            'My girlfriend does her nails with white-out. When shes asleep, I go over there and write misspelled words on them!',
          contents: 'Guess who said this',
        },
      ]);
    });
};
