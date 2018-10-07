var REGEX, addLinks, hidePopover, hidePopoverTimeout, showPopover;

REGEX = /((1 |2 |3 |)(Genesis|Gen|Ge|Gn|Exodus|Ex|Exod|Leviticus|Lev|Le|Lv|Numbers|Num|Nu|Nm|Nb|Deuteronomy|Deut|De|Dt|Joshua|Josh|Jos|Jsh|Judges|Judg|Jdg|Jg|Jdgs|Ruth|Ruth|Rth|Ru|Samuel|Sam|Sm|Sa|S|Kings|Kings|Kgs|Kin|Ki|Chronicles|Chr|Chr|Ch|Ezra|Ezra|Ezr|Ez|Nehemiah|Neh|Ne|Tobit|Tob|Judith|Jdt|Esther|Esth|Est|Es|Maccabees|Macc|Job|Jb|Psalms|Ps|Psalm|Pslm|Psa|Psm|Proverbs|Prov|Pro|Prv|Pr|Ecclesiastes|Eccl|Eccles|Eccle|Ecc|Ec|Song|Canticles|Cant|Wisdom|Wis|Sirach|Sir|Isaiah|Isa|Is|Jeremiah|Jer|Je|Jr|Lamentations|Lam|La|Baruch|Bar|Ezekial|Ezek|Eze|Ezk|Daniel|Dan|Da|Dn|Hosea|Hos|Ho|Joel|Joel|Jl|Amos|Am|Jonah|Jon|Jnh|Micah|Mic|Mc|Nahum|Nah|Na|Habakkuk|Hab|Zephaniah|Zeph|Zep|Zp|Haggai|Hag|Hg|Zechariah|Zech|Zec|Zc|Malachi|Mal|Ml|Matthew|Mt|Matt|Mark|Mk|Mrk|Luke|Lk|Luk|John|Jn|Jhn|Acts|Ac|Romans|Rom|Ro|Rm|Corinthians|Cor|Co|Galatians|Gal|Ga|Ephesians|Eph|Ephes|Philippians|Phil|Php|Pp|Colossians|Col|Thessalonians|Thess|Thes|Th|Timothy|Tim|Ti|Titus|Tit|Ti|Philemon|Philem|Phm|Pm|Hebrews|Heb|James|Jas|Jm|Peter|Pet|Pe|Pt|P|John|Jn|Jhn|J|Jude|Jude|Jud|Jd|Revelation|Rev|Apocalypse|Apoc) [0-9]+((\:|.)[0-9]+)?(-[0-9]+)?)/g;

addLinks = function() {
  var body, element, elements, escapedMatch, i, j, len, len1, match, matches, ref, regex;
  elements = document.getElementsByTagName('body');
  for (i = 0, len = elements.length; i < len; i++) {
    element = elements[i];
    body = element.innerHTML;
    matches = body.match(REGEX);
    ref = matches || [];
    for (j = 0, len1 = ref.length; j < len1; j++) {
      match = ref[j];
      escapedMatch = escape(match);
      regex = new RegExp(match, 'g');
      body = body.replace(regex, `<span class="olivetree-link" data-link="olivetree://bible/${escapedMatch}">${match}</span>`);
    }
    element.innerHTML = body;
  }
  return true;
};

hidePopoverTimeout = null;

hidePopover = function() {
  var elem, i, len, ref;
  ref = document.getElementsByClassName('olivetree-popover');
  for (i = 0, len = ref.length; i < len; i++) {
    elem = ref[i];
    if (elem == null) {
      continue;
    }
    elem.remove();
  }
  return true;
};

showPopover = function(target) {
  var popOver;
  popOver = document.createElement('a');
  popOver.className = 'olivetree-popover';
  popOver.href = target.dataset.link;
  popOver.innerHTML = 'Open with OliveTree';
  popOver.addEventListener('mouseover', function() {
    return clearTimeout(hidePopoverTimeout);
  });
  popOver.addEventListener('mouseout', hidePopover);
  return target.appendChild(popOver);
};

document.body.addEventListener('mouseover', function(evt) {
  if (evt.target.classList.contains('olivetree-link')) {
    return showPopover(evt.target);
  }
});

document.body.addEventListener('mouseout', function(evt) {
  if (!evt.target.classList.contains('olivetree-link')) {
    return true;
  }
  return hidePopoverTimeout = setTimeout(hidePopover, 100);
});

addLinks();
