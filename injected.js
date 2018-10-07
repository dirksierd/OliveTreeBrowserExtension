var addLinks;

addLinks = function() {
  var body, escapedMatch, i, len, match, matches, ref, regexp;
  body = document.body.innerHTML;
  matches = body.match(/((1 |2 |3 |)(Genesis|Gen|Ge|Gn|Exodus|Ex|Exod|Leviticus|Lev|Le|Lv|Numbers|Num|Nu|Nm|Nb|Deuteronomy|Deut|De|Dt|Joshua|Josh|Jos|Jsh|Judges|Judg|Jdg|Jg|Jdgs|Ruth|Ruth|Rth|Ru|Samuel|Sam|Sm|Sa|S|Kings|Kings|Kgs|Kin|Ki|Chronicles|Chr|Chr|Ch|Ezra|Ezra|Ezr|Ez|Nehemiah|Neh|Ne|Tobit|Tob|Judith|Jdt|Esther|Esth|Est|Es|Maccabees|Macc|Job|Jb|Psalms|Ps|Psalm|Pslm|Psa|Psm|Proverbs|Prov|Pro|Prv|Pr|Ecclesiastes|Eccl|Eccles|Eccle|Ecc|Ec|Song|Canticles|Cant|Wisdom|Wis|Sirach|Sir|Isaiah|Isa|Is|Jeremiah|Jer|Je|Jr|Lamentations|Lam|La|Baruch|Bar|Ezekial|Ezek|Eze|Ezk|Daniel|Dan|Da|Dn|Hosea|Hos|Ho|Joel|Joel|Jl|Amos|Am|Jonah|Jon|Jnh|Micah|Mic|Mc|Nahum|Nah|Na|Habakkuk|Hab|Zephaniah|Zeph|Zep|Zp|Haggai|Hag|Hg|Zechariah|Zech|Zec|Zc|Malachi|Mal|Ml|Matthew|Mt|Matt|Mark|Mk|Mrk|Luke|Lk|Luk|John|Jn|Jhn|Acts|Romans|Rom|Ro|Rm|Corinthians|Cor|Co|Galatians|Gal|Ga|Ephesians|Eph|Ephes|Philippians|Phil|Php|Pp|Colossians|Col|Thessalonians|Thess|Thes|Th|Timothy|Tim|Ti|Titus|Tit|Ti|Philemon|Philem|Phm|Pm|Hebrews|Heb|James|Jas|Jm|Peter|Pet|Pe|Pt|P|John|Jn|Jhn|J|Jude|Jude|Jud|Jd|Revelation|Rev|Apocalypse|Apoc) [0-9]+(\:|.[0-9]+)?(-[0-9]+)?)/g);
  ref = matches || [];
  for (i = 0, len = ref.length; i < len; i++) {
    match = ref[i];
    escapedMatch = escape(match);
    regexp = new RegExp(match, 'g');
    body = body.replace(regexp, `<a title="Open in OliveTree" class="olivetree-link" href="olivetree://bible/${escapedMatch}">${match}</a>`);
  }
  document.body.innerHTML = body;
  return true;
};

addLinks()