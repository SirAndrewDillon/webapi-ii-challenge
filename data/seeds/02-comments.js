
exports.seed = function (knex, Promise) {
  return knex('comments').truncate()
    .then(function () {
      return knex('comments').insert([
        { text: "People say nothing is impossible, but I do nothing every day.", post_id: 1 },
        { text: "Just cause you got the monkey off your back doesn’t mean the circus has left town.", post_id: 1 },
        { text: "When you have bacon in your mouth, it doesn’t matter who’s president.", post_id: 2 },
        { text: "It’s like my dad always used to say, “if people are talking about you behind your back, just fart really loud", post_id: 4 },
        { text: "If a kid calls his grandma Mommy and his mama Pam, he's going to jail!.", post_id: 4 },
        { text: "Women are like the police, they could have all the evidence in the world but they still want the confession.", post_id: 4 },
        { text: "You can never make a woman happy, it's impossible. I've never met a happy woman in my life. They're always complaining about something.", post_id: 5 },
        { text: "I mean, they don't grade fathers. But if your daughter's a stripper, you fucked up.", post_id: 7 },
        { text: "Do you know what the good side of crack is? If you're up at the right hour, you can get a VCR for $1.50. You can furnish your whole house for $10.95.", post_id: 7 },
        { text: "Doctors don't cure shit! They don't cure shit! The last disease doctors cured was polio, when's the last time you met someone with polio?", post_id: 7 },
        { text: "Anything you can suck at should make you nervous.", post_id: 8 },
        { text: "Whoever you hate will end up in your family. You don't like gays? You're gonna have a gay son. You don't like Puerto Ricans? Your daughter's gonna come home with Livin' La Vida Loca!", post_id: 8 }
      ]);
    });
};
